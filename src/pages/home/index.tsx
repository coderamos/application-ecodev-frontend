import React from "react";
import { FiLogIn } from "react-icons/fi";

import { Header } from "../../components";

import {
  HomeContainer,
  HomeContent,
  MainWrapper,
  MainTitle,
  MainText,
  ButtonWrapper,
  ButtonIcon,
  ButtonText,
} from "./styles";

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <HomeContent>
        <Header />
        <MainWrapper>
          <MainTitle>Seu marketplace de coleta de resíduos</MainTitle>
          <MainText>
            Ajudamos pessoas a encontraem pontos de coleta de forma eficiente.
          </MainText>
          <ButtonWrapper to="/create-point">
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
