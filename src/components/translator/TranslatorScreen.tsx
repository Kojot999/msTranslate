import styled from "styled-components";
import { useTranslation } from "hooks";

export const TranslatorScreen = () => {
  const T = useTranslation();

  return <Container>{T.appName}</Container>;
};

const Container = styled.div`
  color: ${({ theme }) => theme.colors.font};
`;
