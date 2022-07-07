import { useTranslation } from "hooks";
import styled from "styled-components";

export const Footer = () => {
  const T = useTranslation();
  const year = new Date().getFullYear();
  return (
    <FooterContainer>
      <EmesTransContainer>
        &copy; {year} {T.components.footer.companyName}
      </EmesTransContainer>
      <LinkContainer>
        <Link target="_blank" href="https://www.svgrepo.com/svg/373463/bazel">
          {T.components.footer.svgrepo}
        </Link>
        <Link target="_blank" href="https://libretranslate.com/">
          {T.components.footer.libreTranslate}
        </Link>
      </LinkContainer>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-inline: 10px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.foreground};
`;
const EmesTransContainer = styled.div`
  color: ${({ theme }) => theme.colors.font};
`;
const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.font};
  text-decoration: underline;
  cursor: pointer;
`;
