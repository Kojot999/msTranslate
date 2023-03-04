import * as S from "./TextCounter.styles";

type TextCounterProps = {
  counter?: number;
  limit: number;
};

export const TextCounter: React.FC<TextCounterProps> = ({ limit, counter }) => {
  return (
    <S.Counter>
      {counter}/{limit}
    </S.Counter>
  );
};
