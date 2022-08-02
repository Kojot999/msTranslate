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
import { useDebouncedCallback } from "use-debounce";
import { useTranslate } from "hooks/useTranslate";

type TranslatorScreenProps = {
  languages: Array<Languages>;
};

export const TranslatorScreen: React.FC<TranslatorScreenProps> = ({
  languages,
}) => {
  const [selectedLanguages, setSelectedLanguages] = useState<SelectedLanguages>(
    { source: LanguageCode.Auto, target: LanguageCode.English }
  );
  const T = useTranslation();
  const [querry, setQuerry] = useState<string>();
  const [translatedText, setTranslatedText] = useState<string>();
  const [autoDetectedLanguage, setAutoDetectedLanguage] =
    useState<AutoDetectedLanguage>();
  const {
    isLoading,
    Error,
    fetch: autoDetectLanguage,
  } = useAutoDetectLanguage(setAutoDetectedLanguage);
  const debounceAction = useDebouncedCallback((debouncedCallback) => {
    if (debouncedCallback.lenght > 5) {
      return;
    }

    selectedLanguages.source === LanguageCode.Auto
      ? autoDetectLanguage(debouncedCallback)
      : translateText(debouncedCallback, selectedLanguages);

    if (selectedLanguages.source === LanguageCode.Auto) {
      autoDetectLanguage(debouncedCallback);
    }
  }, 1000);
  const {
    isLoading: isTranslating,
    Error: TranslateError,
    fetch: translateText,
  } = useTranslate(setTranslatedText);

  console.log(JSON.stringify({ translatedText }));
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
            value={querry}
            onChangeText={(newValue) => {
              if (newValue.length > 5000) {
                return;
              }
              setQuerry(newValue);
              debounceAction(newValue);
            }}
            autoFocus
            placeHolder={T.components.message.placeHolder}
          />
          {isLoading && <Loader />}
          <S.InputFooter>
            <SelectedLanguage
              autoDetectedLanguage={autoDetectedLanguage}
              Error={Error && selectedLanguages.source === LanguageCode.Auto}
              onClick={() => {
                setSelectedLanguages((prevState) => ({
                  ...prevState,
                  source: autoDetectedLanguage?.language as LanguageCode,
                }));
                setAutoDetectedLanguage(undefined);
                debounceAction(querry);
              }}
            />
            <TextCounter counter={querry?.length} limit={5000} />
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
            exclude={[selectedLanguages.source, LanguageCode.Auto]}
            onChange={(newCode) =>
              setSelectedLanguages((prevState) => ({
                ...prevState,
                target: newCode,
              }))
            }
            selectedLanguage={selectedLanguages.target}
          />
          <TextInput disabled value={translatedText} Error={TranslateError} />
          {isTranslating && <Loader />}
        </S.InputContainer>
      </S.TranslatorContainer>
    </S.Container>
  );
};
