import React from "react";
import { FiLogIn } from "react-icons/fi";
import {
  HomeContainer,
  HomeContent,
  Header,
  LogoWrapper,
  MainWrapper,
  MainTitle,
  MainText,
  ButtonWrapper,
  ButtonIcon,
  ButtonText,
} from "./styles";
import { logo } from "../../assets";

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <HomeContent>
        <Header>
          <LogoWrapper src={logo} alt="ecodev" />
        </Header>
        <MainWrapper>
          <MainTitle>Seu marketplace de coleta de resíduos</MainTitle>
          <MainText>
            Ajudamos pessoas a encontraem pontos de coleta de forma eficiente.
          </MainText>
          <ButtonWrapper href="/cadastro">
            <ButtonIcon>
              <FiLogIn />
            </ButtonIcon>
            <ButtonText>cadastre um ponto de coleta</ButtonText>
          </ButtonWrapper>
        </MainWrapper>
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
