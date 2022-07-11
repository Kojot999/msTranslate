import { useTranslation } from "hooks";
import * as S from "./Footer.styles";

export const Footer = () => {
  const T = useTranslation();
  const year = new Date().getFullYear();
  return (
    <S.FooterContainer>
      <S.EmesTransContainer>
        &copy; {year} {T.components.footer.companyName}
      </S.EmesTransContainer>
      <S.LinkContainer>
        <S.Link target="_blank" href="https://www.svgrepo.com/svg/373463/bazel">
          {T.components.footer.svgrepo}
        </S.Link>
        <S.Link target="_blank" href="https://libretranslate.com/">
          {T.components.footer.libreTranslate}
        </S.Link>
      </S.LinkContainer>
    </S.FooterContainer>
  );
};
