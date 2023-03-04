import styled from "styled-components";

export const TranslatorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 50px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LoaderContainer = styled.div`
  width: 50%;
  display: flex;
  align-self: center;
`;

export const LoaderText = styled.div`
  color: ${({ theme }) => theme.colors.font};
  margin-top: 10px;
`;

export const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
