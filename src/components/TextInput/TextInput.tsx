import React from "react";
import { useEffect } from "react";
import * as S from "./TextInput.styles";

type TextInputProps = {
  disabled?: boolean;
  autoFocus?: boolean;
  placeHolder?: string;
  value?: string;
  onChangeText?(text: string): void;
};

export const TextInput: React.FC<TextInputProps> = ({
  autoFocus,
  disabled,
  placeHolder,
  value,
  onChangeText,
}) => {
  useEffect(() => {
    if (!disabled && autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const inputRef = React.createRef<HTMLTextAreaElement>();

  return (
    <S.Input
      disabled={disabled}
      ref={inputRef}
      placeholder={disabled ? undefined : placeHolder}
      value={value}
      onChange={(event) => {
        if (onChangeText) {
          onChangeText(event.target.value);
        }
      }}
    />
  );
};
