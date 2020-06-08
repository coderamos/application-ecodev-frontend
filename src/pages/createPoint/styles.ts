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
    display: none;
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
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 24px;
`;

export const List = styled.ul`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;

  @media ${(props) => props.theme.mediaQueries.md} {
    gap: 8px;
    grid-template-columns: repeat(2, 1fr);
  }

  .selected {
    background: ${(props) => props.theme.colors.backgroundhover};
    border: 2px solid ${(props) => props.theme.colors.primary};
  }
`;

export const ListItemWrapper = styled.li`
  align-items: center;
  background: #f5f5f5;
  border-radius: 8px;
  border: 2px solid #f5f5f5;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 180px;
  justify-content: space-between;
  padding: 32px 24px 16px;
  text-align: center;
`;

export const ItemImage = styled.img``;

export const ItemName = styled.span`
  align-items: center;
  color: ${(props) => props.theme.colors.title};
  display: flex;
  flex: 1;
  margin-top: 12px;
`;

export const Button = styled.button`
  align-self: flex-end;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  border: 0;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  height: 56px;
  margin-top: 40px;
  transition: background-color 0.2s;
  width: 260px;

  &:hover {
    background: ${(props) => props.theme.colors.primaryhover};
  }

  @media ${(props) => props.theme.mediaQueries.md} {
    width: 100%;
  }
`;
