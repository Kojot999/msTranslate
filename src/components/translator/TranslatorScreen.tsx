import * as S from "./TranslatorScreen.styles";
import {
  SelectLanguage,
  Loader,
  TextInput,
  SelectedLanguage,
  TextCounter,
  Switch,
} from "components";
import { LanguageCode, Languages } from "types";
import { useState } from "react";
import { SelectedLanguages } from "types/selectedLanguages";

type TranslatorScreenProps = {
  languages: Array<Languages>;
};

export const TranslatorScreen: React.FC<TranslatorScreenProps> = ({
  languages,
}) => {
  const [selectedLanguages, setSelectedLanguages] = useState<SelectedLanguages>(
    { source: LanguageCode.Polish, target: LanguageCode.English }
  );

  return (
    <S.Container>
      <S.TranslatorContainer>
        <S.InputContainer>
          <SelectLanguage
            languages={languages}
            exclude={[selectedLanguages.target]}
            onChange={(newCode) =>
              setSelectedLanguages((prevState) => ({
                ...prevState,
                source: newCode,
              }))
            }
            selectedLanguage={selectedLanguages.source}
          />
          <TextInput />
          <Loader />
          <S.InputFooter>
            <SelectedLanguage />
            <TextCounter />
          </S.InputFooter>
        </S.InputContainer>
        <Switch
          onClick={() =>
            setSelectedLanguages((prevState) => ({
              source: prevState.target,
              target: prevState.source,
            }))
          }
        />
        <S.InputContainer>
          <SelectLanguage
            languages={languages}
            exclude={[selectedLanguages.source]}
            onChange={(newCode) =>
              setSelectedLanguages((prevState) => ({
                ...prevState,
                target: newCode,
              }))
            }
            selectedLanguage={selectedLanguages.target}
          />
          <TextInput />
          <Loader />
        </S.InputContainer>
      </S.TranslatorContainer>
    </S.Container>
  );
};
