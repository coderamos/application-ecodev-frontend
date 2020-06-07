import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
  margin: 48px 0 0;

  @media ${(props) => props.theme.mediaQueries.md} {
    margin: 48px auto 0;
  }
`;

export const HeaderLink = styled(Link)`
  align-items: center;
  color: ${(props) => props.theme.colors.title};
  display: flex;
  font-weight: bold;
  text-decoration: none;

  svg {
    color: ${(props) => props.theme.colors.primary};
    margin-right: 16px;
  }

  @media ${(props) => props.theme.mediaQueries.md} {
    svg {
      margin-right: 4px;
    }
  }
`;

export const LogoWrapper = styled.img``;
