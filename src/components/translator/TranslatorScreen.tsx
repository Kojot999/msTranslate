import * as S from "./TranslatorScreen.styles";
import { useTranslation } from "hooks";
import {
  SelectLanguage,
  Loader,
  Message,
  TextInput,
  SelectedLanguage,
  TextCounter,
  Switch,
} from "components";
import { useSupportedLanguages } from "hooks";
import { useEffect, useState } from "react";
import { Languages } from "types";

export const TranslatorScreen = () => {
  const [languages, setLanguages] = useState<Array<Languages>>([]);
  const T = useTranslation();
  const {
    isLoading,
    Error,
    fetch: getSupportedLanguages,
  } = useSupportedLanguages(setLanguages);

  useEffect(() => {
    getSupportedLanguages();
  }, []);

  if (isLoading) {
    return (
      <S.LoaderContainer>
        <Loader>
          <S.LoaderText>{T.screen.translator.loading}</S.LoaderText>
        </Loader>
      </S.LoaderContainer>
    );
  }
  if (Error) {
    return (
      <S.MessageContainer>
        <Message
          message={T.screen.translator.error}
          withButton
          onClick={() => getSupportedLanguages()}
        />
      </S.MessageContainer>
    );
  }
  if (languages.length === 0) {
    return (
      <S.MessageContainer>
        <Message
          message={T.screen.translator.noSupportedLanguages}
          withButton={false}
        />
        ;
      </S.MessageContainer>
    );
  }

  return (
    <S.Container>
      <S.TranslatorContainer>
        <S.InputContainer>
          <SelectLanguage />
          <TextInput />
          <Loader />
          <S.InputFooter>
            <SelectedLanguage />
            <TextCounter />
          </S.InputFooter>
        </S.InputContainer>
        <Switch />
        <S.InputContainer>
          <SelectLanguage />
          <TextInput />
          <Loader />
        </S.InputContainer>
      </S.TranslatorContainer>
    </S.Container>
  );
};
