import React from "react";

import { InputWrapper } from "./styles";

interface InputProps {
  type: string;
  name: string;
  id: string;
  placeholder?: string;
}

const InputGeneric: React.FC<InputProps> = ({
  type,
  name,
  id,
  placeholder,
}) => {
  return (
    <InputWrapper type={type} name={name} id={id} placeholder={placeholder} />
  );
};

export default InputGeneric;
