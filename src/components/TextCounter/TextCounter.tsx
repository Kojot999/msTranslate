import styled from "styled-components";

export const TextCounter = () => {
  return <Counter>0/10000</Counter>;
};

const Counter = styled.div`
  color: ${({ theme }) => theme.colors.font};
`;
