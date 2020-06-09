import styled from "styled-components";

export const SuccessWrapper = styled.div`
  align-items: center;
  background: ${(props) => props.theme.colors.backgroundblack};
  display: flex;
  height: 100vh;
  justify-content: center;
  opacity: 0.95;
`;

export const SuccessMessageWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const MessageIcon = styled.span`
  display: flex;
  svg {
    color: ${(props) => props.theme.colors.primary};
    height: 54px;
    width: 54px;
  }
`;

export const MessageText = styled.h1`
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontTypes.title};
`;
