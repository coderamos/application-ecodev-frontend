import styled, { css } from "styled-components";

import { homebackground } from "../../assets";

const backgroundImage = css`
  background: url(${homebackground}) no-repeat 800px bottom;
`;

export const HomeContainer = styled.div`
  height: 100vh;
  ${backgroundImage};
`;

export const HomeContent = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
  max-width: 1100px;
  padding: 0 30px;
  width: 100%;

  @media ${(props) => props.theme.mediaQueries.md} {
    align-items: center;
    text-align: center;
  }
`;

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  max-width: 560px;

  @media ${(props) => props.theme.mediaQueries.md} {
    align-items: center;
  }
`;

export const MainTitle = styled.h1`
  color: ${(props) => props.theme.colors.title};
  ${(props) => props.theme.fontTypes.title}

  @media ${(props) => props.theme.mediaQueries.md} {
    font-size: 42px;
  }
`;

export const MainText = styled.p`
  color: ${(props) => props.theme.colors.text};
  margin-top: 24px;
  ${(props) => props.theme.fontTypes.text}
`;
