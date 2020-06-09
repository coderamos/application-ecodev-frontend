import React from "react";
import { FiCheckCircle } from "react-icons/fi";

import {
  SuccessWrapper,
  SuccessMessageWrapper,
  MessageText,
  MessageIcon,
} from "./styles";

import { Button } from "../../components";

const Success: React.FC = () => {
  return (
    <SuccessWrapper>
      <SuccessMessageWrapper>
        <MessageIcon>
          <FiCheckCircle />
        </MessageIcon>
        <MessageText>SUCESSO!</MessageText>
        <Button text="cadastre um novo ponto" />
      </SuccessMessageWrapper>
    </SuccessWrapper>
  );
};

export default Success;
