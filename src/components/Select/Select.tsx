import { useMemo } from "react";
import { LanguageCode, Languages } from "types";
import * as S from "./Select.styles";

type SelectLanguageProps = {
  languages: Array<Languages>;
  selectedLanguage: LanguageCode;
  exclude: Array<LanguageCode>;
  onChange(newLanguage: LanguageCode): void;
};

export const SelectLanguage: React.FC<SelectLanguageProps> = ({
  languages,
  selectedLanguage,
  exclude,
  onChange,
}) => {
  const filteredLanguages = useMemo(
    () =>
      languages
        .filter((language) => !exclude.includes(language.code))
        .map((languages) => ({
          key: languages.code,
          label: languages.name,
        })),
    [languages, exclude]
  );

  return (
    <S.Select
      value={selectedLanguage}
      onChange={(event) => onChange(event.target.value as LanguageCode)}
    >
      {filteredLanguages.map((Language) => (
        <S.Option key={Language.key} value={Language.key}>
          {Language.label}
        </S.Option>
      ))}
    </S.Select>
  );
};
