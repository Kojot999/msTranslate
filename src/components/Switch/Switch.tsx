import styled from "styled-components";
import { Images } from "assets";

export const Switch = () => {
  return <SwitchIcon src={Images.exchange} />;
};

const SwitchIcon = styled.img`
  cursor: pointer;
  width: 25px;
  height: 25px;
`;
