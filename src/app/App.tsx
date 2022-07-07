import styled, { ThemeProvider } from "styled-components";
import { Footer, Header, TranslatorScreen } from "components";
import { theme } from "styles";

export const App = () => (
  <ThemeProvider theme={theme}>
    <AppContainer>
      <Header />
      <TranslatorScreen />
      <Footer />
    </AppContainer>
  </ThemeProvider>
);

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
