import React from "react";

import { InputWrapper } from "./styles";

interface InputProps {
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  onChange?(event: any): any;
}

const InputGeneric: React.FC<InputProps> = ({
  type,
  name,
  id,
  placeholder,
  onChange,
}) => {
  return (
    <InputWrapper
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default InputGeneric;
