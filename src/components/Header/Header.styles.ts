import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-inline: 10px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.foreground};
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.img`
  width: 40px;
  margin-right: 5px;
`;

export const Title = styled.h1`
  font-size: 30px;
  margin: 0;
  color: ${({ theme }) => theme.colors.font};
`;

export const LinkContainer = styled.div``;

export const Link = styled.a`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.font};
  text-decoration: underline;
  cursor: pointer;
`;
