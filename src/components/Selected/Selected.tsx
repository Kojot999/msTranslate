import { useTranslation } from "hooks";
import { useCallback } from "react";
import { AutoDetectedLanguage, LanguageCode } from "types";
import * as S from "./Selected.styles";

export type LanguageProps = {
  disabled: boolean;
};

type SelectedLanguageProps = {
  autoDetectedLanguage?: AutoDetectedLanguage;
  onClick(): void;
  Error: boolean;
};

export const SelectedLanguage: React.FC<SelectedLanguageProps> = ({
  autoDetectedLanguage = {},
  Error,
  onClick,
}) => {
  const { confidence, language } = autoDetectedLanguage;
  const T = useTranslation();
  const getDetectedLanguage = useCallback(() => {
    if (!language) {
      return undefined;
    }
    const [detectedLanguage] =
      Object.entries(LanguageCode).find(
        ([, languageCode]) => language === languageCode
      ) || [];

    return detectedLanguage ? `(${language})` : undefined;
  }, [language]);

  return (
    <S.Container>
      <S.Percentage>{confidence && `${confidence}%`}</S.Percentage>
      <S.Language
        onClick={() => {
          if (!Error) {
            onClick();
          }
        }}
        disabled={Error}
      >
        {Error && T.components.confidence.error}
        {language && getDetectedLanguage()}
      </S.Language>
    </S.Container>
  );
};
