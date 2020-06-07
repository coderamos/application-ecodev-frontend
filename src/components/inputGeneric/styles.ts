import styled from "styled-components";

export const InputWrapper = styled.input`
  background: #f0f0f5;
  border-radius: 8px;
  border: 0;
  color: ${(props) => props.theme.colors.text};
  flex: 1;
  font-size: 16px;
  padding: 16px 24px;

  &::placeholder {
    color: ${(props) => props.theme.colors.placeholder};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
