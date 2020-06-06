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

export const Header = styled.header`
  margin: 48px 0 0;

  @media ${(props) => props.theme.mediaQueries.md} {
    margin: 48px auto 0;
  }
`;

export const LogoWrapper = styled.img``;

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

export const ButtonWrapper = styled.a`
  align-items: center;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  display: flex;
  height: 72px;
  margin-top: 40px;
  max-width: 360px;
  overflow: hidden;
  text-decoration: none;
  width: 100%;

  &:hover {
    background: ${(props) => props.theme.colors.primaryhover};
  }
`;

export const ButtonIcon = styled.span`
  align-items: center;
  background: rgba(0, 0, 0, 0.08);
  display: block;
  display: flex;
  height: 72px;
  justify-content: center;
  transition: background-color 0.2s;
  width: 72px;

  svg {
    color: ${(props) => props.theme.colors.white};
    height: 20px;
    width: 20px;
  }
`;

export const ButtonText = styled.strong`
  color: ${(props) => props.theme.colors.white};
  flex: 1;
  text-align: center;
`;
