import styled from "styled-components";
import { useTranslation } from "hooks";

export const TranslatorScreen = () => {
  const T = useTranslation();

  return <Container>Transy</Container>;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  color: ${({ theme }) => theme.colors.font};
`;
