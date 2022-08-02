import { APP_CONFIG } from "config";
import { useState } from "react";
import { AutoDetectedLanguage, Languages, SelectedLanguages } from "types";

export const useTranslate = (onSuccess: (translatedText: string) => void) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [Error, setError] = useState<boolean>(false);
  return {
    isLoading,
    Error,

    fetch: (query: string, selectedLanguages: SelectedLanguages) => {
      setLoading(true);
      setError(false);
      fetch(`${APP_CONFIG.API_URL}/translate`, {
        method: "POST",
        body: JSON.stringify({
          q: query,
          source: selectedLanguages.source,
          target: selectedLanguages.target,
          format: "text",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw response;
        })
        .then((response) => response.json())
        .then(([{ translatedText }]) => onSuccess(translatedText))
        .catch(() => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    },
  };
};
