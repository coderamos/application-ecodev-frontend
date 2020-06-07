import React from "react";
import { FiArrowLeft } from "react-icons/fi";

import { HeaderWrapper, HeaderLink, LogoWrapper } from "./styles";
import { logo } from "../../assets";

interface HeaderProps {
  hasBackButtom?: boolean;
}

const Header: React.FC<HeaderProps> = ({ hasBackButtom }) => {
  return (
    <HeaderWrapper>
      <LogoWrapper src={logo} alt="ecodev" />
      {hasBackButtom && (
        <HeaderLink to="/">
          <FiArrowLeft />
          voltar para o início
        </HeaderLink>
      )}
    </HeaderWrapper>
  );
};

export default Header;
