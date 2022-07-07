import styled, { ThemeProvider } from "styled-components";
import { TranslatorScreen } from "components/translator";
import { theme } from "styles";

export const App = () => (
  <ThemeProvider theme={theme}>
    <AppContainer>
      <TranslatorScreen />
    </AppContainer>
  </ThemeProvider>
);

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;
