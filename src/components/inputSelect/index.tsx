import React from "react";

import { SelectWrapper, OptionWrapper } from "./styles";

interface SelectProps {
  id: string;
  name: string;
  options: string[];
  value?: string;
  onChange?(event: any): any;
  disabled?: boolean;
}

const InputSelect: React.FC<SelectProps> = ({
  name,
  id,
  options,
  value,
  onChange,
  disabled,
}) => {
  return (
    <SelectWrapper
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      disabled={disabled}
    >
      <OptionWrapper value="0">Selecione uma opção</OptionWrapper>
      {options.map((option) => (
        <OptionWrapper key={option} value={option}>
          {option}
        </OptionWrapper>
      ))}
    </SelectWrapper>
  );
};

export default InputSelect;
