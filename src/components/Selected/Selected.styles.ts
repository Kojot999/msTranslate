import styled from "styled-components";
import { LanguageProps } from "./Selected";

export const Container = styled.div``;
export const Percentage = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;
export const Language = styled.a<LanguageProps>`
  cursor: ${({ disabled }) => (disabled ? undefined : "pointer")};
  text-decoration: ${({ disabled }) => (disabled ? undefined : "underline")};
  margin-left: 5px;
  color: ${({ theme }) => theme.colors.primary};
`;
