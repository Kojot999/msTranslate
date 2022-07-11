import { useTranslation } from "hooks";
import * as S from "./Header.styles";
import { Images } from "assets";

export const Header = () => {
  const T = useTranslation();
  return (
    <S.HeaderContainer>
      <S.LogoContainer>
        <S.Logo src={Images.logo} />
        <S.Title>{T.components.header.title}</S.Title>
      </S.LogoContainer>
      <S.LinkContainer>
        <S.Link target="_blank" href="https://github.com/Kojot999/EmesTrans">
          {T.components.header.github}
        </S.Link>
      </S.LinkContainer>
    </S.HeaderContainer>
  );
};
