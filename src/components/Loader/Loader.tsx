import { ReactNode } from "react";
import * as S from "./Loader.styles";

type Props = {
  children?: ReactNode;
};

export const Loader = ({ children }: Props) => (
  <S.LoaderContainer>
    <S.ActivityIndicator />
    {children && <S.ChildrenContainer>{children}</S.ChildrenContainer>}
  </S.LoaderContainer>
);
