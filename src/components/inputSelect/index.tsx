import React from "react";

import { SelectWrapper, OptionWrapper } from "./styles";

interface SelectProps {
  id: string;
  name: string;
  options: Array<OptionProps>;
}

interface OptionProps {
  description: string;
  value: any;
}

const InputSelect: React.FC<SelectProps> = ({ name, id, options }) => {
  return (
    <SelectWrapper name={name} id={id}>
      {options.map((option) => (
        <OptionWrapper value={option.value}>{option.description}</OptionWrapper>
      ))}
    </SelectWrapper>
  );
};

export default InputSelect;
