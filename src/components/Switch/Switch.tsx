import * as S from "./Switch.styles";
import { Images } from "assets";

type SwithProps = {
  onClick(): void;
};

export const Switch: React.FC<SwithProps> = ({ onClick }) => {
  return <S.SwitchIcon src={Images.exchange} onClick={onClick} />;
};
