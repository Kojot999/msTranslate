import styled from "styled-components";
import { useTranslation } from "hooks";
import { TextInput } from "components/TextInput/TextInput";
import { SelectLanguage } from "components/Select/Select";
import { Loader } from "components/Loader/Loader";
import { SelectedLanguage } from "components/Selected/Selected";
import { Switch } from "components/Switch/Switch";
import { TextCounter } from "components/TextCounter/TextCounter";
import { useSupportedLanguages } from "hooks";
import { useEffect } from "react";

export const TranslatorScreen = () => {
  const {
    isLoading,
    Error,
    fetch: getSupportedLanguages,
  } = useSupportedLanguages((languages) => console.log(languages));

  useEffect(() => {
    getSupportedLanguages();
  }, []);

  return (
    <Container>
      <TranslatorContainer>
        <InputContainer>
          <SelectLanguage />
          <TextInput />
          <Loader />
          <InputFooter>
            <SelectedLanguage />
            <TextCounter />
          </InputFooter>
        </InputContainer>
        <Switch />
        <InputContainer>
          <SelectLanguage />
          <TextInput />
          <Loader />
        </InputContainer>
      </TranslatorContainer>
    </Container>
  );
};

const TranslatorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 50px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
