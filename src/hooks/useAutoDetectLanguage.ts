import { APP_CONFIG } from "config";
import { useState } from "react";
import { AutoDetectedLanguage, Languages } from "types";

export const useAutoDetectLanguage = (
  onSuccess: (autoDetectedLanguage: AutoDetectedLanguage) => void
) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [Error, setError] = useState<boolean>(false);
  return {
    isLoading,
    Error,

    fetch: (query: string) => {
      setLoading(true);
      setError(false);
      fetch(`${APP_CONFIG.API_URL}/detect`, {
        method: "POST",
        body: JSON.stringify({
          q: query,
        }),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw response;
        })
        .then((response) => response.json())
        .then(([autoDetectLanguage]) => onSuccess(autoDetectLanguage))
        .catch(() => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    },
  };
};
