import { APP_CONFIG } from "config";
import { useState } from "react";
import { AutoDetectedLanguage, Languages, SelectedLanguages } from "types";
import axios from "axios";

export const useTranslate = (setData: (translatedText: string) => void) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [Error, setError] = useState<boolean>(false);
  const translateText = (
    querry: any,
    selectedLanguages: { source: string; target: string }
  ) => {
    setLoading(true);

    axios
      .post(`${APP_CONFIG.API_URL}/translate`, {
        q: querry,
        source: selectedLanguages.source,
        target: selectedLanguages.target,
        format: "text",
      })
      .then((res) => {
        setLoading(false);
        setData(res?.data?.translatedText);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };

  return { translateText, Error, isLoading };
};
