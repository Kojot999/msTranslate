import { useTranslation } from "hooks";
import styled from "styled-components";
import { Images } from "assets";

export const Header = () => {
  const T = useTranslation();
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src={Images.logo} />
        <Title>{T.components.header.title}</Title>
      </LogoContainer>
      <LinkContainer>
        <Link target="_blank" href="https://github.com/Kojot999/EmesTrans">
          {T.components.header.github}
        </Link>
      </LinkContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-inline: 10px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.foreground};
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Logo = styled.img`
  width: 40px;
  margin-right: 5px;
`;

const Title = styled.h1`
  font-size: 30px;
  margin: 0;
  color: ${({ theme }) => theme.colors.font};
`;

const LinkContainer = styled.div``;

const Link = styled.a`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.font};
  text-decoration: underline;
  cursor: pointer;
`;
