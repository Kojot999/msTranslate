import { ThemeProvider } from "styled-components";
import { Footer, Header, TranslatorScreen, Message, Loader } from "components";
import { theme } from "styles";
import { useSupportedLanguages, useTranslation } from "hooks";
import * as S from "./App.styles";
import { useEffect, useState } from "react";
import { Languages } from "types";

export const App = () => {
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

  const getLayout = () => {
    if (isLoading) {
      return (
        <S.LoaderContainer>
          <Loader>
            <S.LoaderText>{T.components.app.loading}</S.LoaderText>
          </Loader>
        </S.LoaderContainer>
      );
    }
    if (Error) {
      return (
        <S.MessageContainer>
          <Message
            message={T.components.app.error}
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
            message={T.components.app.noSupportedLanguages}
            withButton={false}
          />
          ;
        </S.MessageContainer>
      );
    }

    return <TranslatorScreen languages={languages} />;
  };

  return (
    <ThemeProvider theme={theme}>
      <S.AppContainer>
        <Header />
        {getLayout()}
        <Footer />
      </S.AppContainer>
    </ThemeProvider>
  );
};
