import React from "react";

import { LabelWrapper } from "./styles";

interface LabelProps {
  htmlFor: string;
}

const Label: React.FC<LabelProps> = ({ children, htmlFor }) => {
  return <LabelWrapper htmlFor={htmlFor}>{children}</LabelWrapper>;
};

export default Label;
