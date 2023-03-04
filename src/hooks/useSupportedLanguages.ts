import { Language } from "components/Selected/Selected.styles";
import { APP_CONFIG } from "config";
import { useState } from "react";
import { LanguageCode, Languages } from "types";
import { useTranslation } from "./useTranslations";

export const useSupportedLanguages = (
  onSuccess: (languages: Array<Languages>) => void
) => {
  const T = useTranslation();
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
        .then((languages) => {
          const allLanguages: Array<Languages> = [
            {
              code: LanguageCode.Auto,
              name: T.common.autoTranslate,
            },
          ].concat(languages);
          onSuccess(allLanguages);
        })
        .catch(() => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    },
  };
};
