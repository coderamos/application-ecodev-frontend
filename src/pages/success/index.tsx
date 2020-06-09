import React from "react";
import { FiCheckCircle } from "react-icons/fi";

import {
  SuccessWrapper,
  SuccessMessageWrapper,
  MessageText,
  MessageIcon,
} from "./styles";

const Success: React.FC = () => {
  return (
    <SuccessWrapper>
      <SuccessMessageWrapper>
        <MessageIcon>
          <FiCheckCircle />
        </MessageIcon>
        <MessageText>SUCESSO!</MessageText>
      </SuccessMessageWrapper>
    </SuccessWrapper>
  );
};

export default Success;
