import { APP_CONFIG } from "config";
import { useState } from "react";
import { Languages } from "types";

export const useSupportedLanguages = (
  onSuccess: (languages: Array<Languages>) => void
) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [Error, setError] = useState<boolean>(false);

  return {
    isLoading,
    Error,

    fetch: () => {
      setLoading(true);
      setError(false);
      fetch(`${APP_CONFIG.API_URL}/languages`)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw response;
        })
        .then((response) => response.json())
        .then(onSuccess)
        .catch(() => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    },
  };
};
