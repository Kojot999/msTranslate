import { useTranslation } from "hooks";
import { AutoDetectedLanguage } from "types";
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
        {language && `(${language})`}
      </S.Language>
    </S.Container>
  );
};
