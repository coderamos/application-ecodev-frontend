import React from "react";

import { Button, Header } from "../../components";

import {
  HomeContainer,
  HomeContent,
  MainText,
  MainTitle,
  MainWrapper,
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
          <Button text="cadastre um ponto de coleta" hasIcon />
        </MainWrapper>
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
