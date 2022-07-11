import styled from "styled-components";

export const Input = styled.textarea`
  border: none;
  border-radius: 8px;
  width: 400px;
  height: 300px;
  color: ${({ theme }) => theme.colors.font};
  background-color: ${({ theme }) => theme.colors.input};
  resize: none;
  font-size: 20px;
  padding: 10px 15px;
`;
