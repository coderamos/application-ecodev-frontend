import React from "react";
import { FiLogIn } from "react-icons/fi";

import { ButtonWrapper, ButtonIcon, ButtonText } from "./styles";

interface ButtonProps {
  text: string;
  type?: string;
  hasIcon?: boolean;
}
const Button: React.FC<ButtonProps> = ({ text, type, hasIcon }) => {
  return (
    <ButtonWrapper to="/create-point" type={type}>
      {hasIcon && (
        <ButtonIcon>
          <FiLogIn />
        </ButtonIcon>
      )}
      <ButtonText>{text}</ButtonText>
    </ButtonWrapper>
  );
};

export default Button;
