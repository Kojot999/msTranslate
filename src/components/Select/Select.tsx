import styled from "styled-components";

export const SelectLanguage = () => {
  return (
    <Select>
      <Option>Polish</Option>
      <Option>English</Option>
    </Select>
  );
};

const Select = styled.select`
  max-width: 140px;
  margin-bottom: 10px;

  font-size: 14px;
  border: 0;
  background-color: ${({ theme }) => theme.colors.input};
  color: ${({ theme }) => theme.colors.font};
  padding: 3px 10px;
  border-radius: 5px;
`;
const Option = styled.option``;
