import styled from "styled-components";

export const SelectWrapper = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: ${(props) => props.theme.colors.background};
  border-radius: 8px;
  border: 0;
  color: ${(props) => props.theme.colors.text};
  flex: 1;
  font-size: 16px;
  padding: 16px 24px;
`;

export const OptionWrapper = styled.option``;
