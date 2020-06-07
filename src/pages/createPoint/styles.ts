import styled from "styled-components";

export const CreatePointContainer = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  padding: 0 20px;
  width: 100%;

  header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: 48px;
  }
`;

export const Form = styled.form`
  background: ${(props) => props.theme.colors.white};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin: 80px auto;
  max-width: 730px;
  padding: 64px;

  @media ${(props) => props.theme.mediaQueries.md} {
    padding: 20px;
  }
`;

export const FormTitle = styled.h1`
  color: ${(props) => props.theme.colors.title};
  ${(props) => props.theme.fontTypes.FormTitle}
`;

export const FormFieldset = styled.fieldset`
  border: 0;
  margin-top: 64px;
  min-inline-size: auto;
`;

export const FormLegendWrapper = styled.legend`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  width: 100%;
`;

export const FormSubtitle = styled.h2`
  color: ${(props) => props.theme.colors.title};
  ${(props) => props.theme.fontTypes.FormSubtitle}
`;

export const FormTextAuxiliary = styled.span`
  color: ${(props) => props.theme.colors.text};
  ${(props) => props.theme.fontTypes.formTextAuxiliary}

  @media ${(props) => props.theme.mediaQueries.md} {
    font-size: 12px;
  }
`;

export const FieldGroupWrapper = styled.div`
  display: flex;
  flex: 1;

  div + div {
    margin-left: 24px;
  }

  @media ${(props) => props.theme.mediaQueries.md} {
    display: block;

    div + div {
      margin-left: 0;
    }
  }
`;

export const FieldWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;
