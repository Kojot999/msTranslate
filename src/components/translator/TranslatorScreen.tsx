import * as S from "./TranslatorScreen.styles";
import {
  SelectLanguage,
  Loader,
  TextInput,
  SelectedLanguage,
  TextCounter,
  Switch,
} from "components";
import { AutoDetectedLanguage, LanguageCode, Languages } from "types";
import { useState } from "react";
import { SelectedLanguages } from "types/selectedLanguages";
import { useTranslation } from "hooks";
import { useAutoDetectLanguage } from "hooks/useAutoDetectLanguage";

type TranslatorScreenProps = {
  languages: Array<Languages>;
};

export const TranslatorScreen: React.FC<TranslatorScreenProps> = ({
  languages,
}) => {
  const [selectedLanguages, setSelectedLanguages] = useState<SelectedLanguages>(
    { source: LanguageCode.Polish, target: LanguageCode.English }
  );
  const T = useTranslation();
  const [value, setValue] = useState<string>();
  const [autoDetectedLanguage, setAutoDetectedLanguage] =
    useState<AutoDetectedLanguage>();
  const {
    isLoading,
    Error,
    fetch: autoDetectLanguage,
  } = useAutoDetectLanguage(setAutoDetectedLanguage);
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
          <TextInput
            value={value}
            onChangeText={(newValue) => {
              if (newValue.length > 5000) {
                return;
              }

              setValue(newValue);

              if (selectedLanguages.source === LanguageCode.English) {
                autoDetectLanguage(newValue);
              }
            }}
            autoFocus
            placeHolder={T.components.message.placeHolder}
          />
          {isLoading && <Loader />}
          <S.InputFooter>
            <SelectedLanguage
              autoDetectedLanguage={autoDetectedLanguage}
              Error={Error}
              onClick={() =>
                setSelectedLanguages((prevState) => ({
                  ...prevState,
                  source: autoDetectedLanguage?.language as LanguageCode,
                }))
              }
            />
            <TextCounter counter={value?.length} limit={5000} />
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
          <TextInput disabled />
          <Loader />
        </S.InputContainer>
      </S.TranslatorContainer>
    </S.Container>
  );
};
