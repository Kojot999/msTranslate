import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-inline: 10px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.foreground};
`;
export const EmesTransContainer = styled.div`
  color: ${({ theme }) => theme.colors.font};
`;
export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.font};
  text-decoration: underline;
  cursor: pointer;
`;
