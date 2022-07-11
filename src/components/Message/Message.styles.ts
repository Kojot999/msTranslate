import styled from "styled-components";

export const MessageContainer = styled.div``;
export const Button = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px 5px;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
`;
export const Text = styled.div`
  color: ${({ theme }) => theme.colors.font};
  margin-bottom: 10px;
`;
