import { useTranslation } from "hooks";
import React, { useTransition } from "react";
import * as S from "./Message.styles";

type MessageProps = {
  message: string;
  withButton?: boolean;
  onClick?(): void;
};

export const Message: React.FunctionComponent<MessageProps> = ({
  message,
  withButton,
  onClick,
}) => {
  const T = useTranslation();
  return (
    <S.MessageContainer>
      <S.Text>{message}</S.Text>
      {withButton && (
        <S.Button onClick={onClick}>{T.components.message.tryAgin}</S.Button>
      )}
    </S.MessageContainer>
  );
};
