import styled from "styled-components";

export const Container = styled.div``;
export const Percentage = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;
export const Language = styled.a`
  cursor: pointer;
  text-decoration: underline;
  margin-left: 5px;
  color: ${({ theme }) => theme.colors.primary};
`;
