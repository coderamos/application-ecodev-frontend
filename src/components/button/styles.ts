import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonWrapper = styled(Link)`
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
  padding: 0 20px;
  flex: 1;
  text-align: center;

  @media ${(props) => props.theme.mediaQueries.md} {
    padding: 0 4px;
  }
`;
