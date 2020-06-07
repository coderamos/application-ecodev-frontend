import React from "react";

import {
  CreatePointContainer,
  Form,
  FormTitle,
  FormFieldset,
  FormLegendWrapper,
  FormSubtitle,
  FormTextAuxiliary,
  FieldWrapper,
  FieldGroupWrapper,
} from "./styles";
import { Header, InputGeneric, Label } from "../../components";

const CreatePoint: React.FC = () => {
  return (
    <CreatePointContainer>
      <Header hasBackButtom />
      <Form>
        <FormTitle>
          Cadastro do <br />
          ponto de coleta
        </FormTitle>
        <FormFieldset>
          <FormLegendWrapper>
            <FormSubtitle>Dados</FormSubtitle>
          </FormLegendWrapper>

          <FieldWrapper>
            <Label htmlFor="name">nome da entidade</Label>
            <InputGeneric type="text" name="name" id="name" />
          </FieldWrapper>

          <FieldGroupWrapper>
            <FieldWrapper>
              <Label htmlFor="email">e-mail</Label>
              <InputGeneric type="email" name="email" id="email" />
            </FieldWrapper>

            <FieldWrapper>
              <Label htmlFor="whatsapp">whatsapp</Label>
              <InputGeneric type="text" name="whatsapp" id="whatsapp" />
            </FieldWrapper>
          </FieldGroupWrapper>
        </FormFieldset>

        <FormFieldset>
          <FormLegendWrapper>
            <FormSubtitle>Endereço</FormSubtitle>
            <FormTextAuxiliary>selecione o endereço no mapa</FormTextAuxiliary>
          </FormLegendWrapper>
        </FormFieldset>

        <FormFieldset>
          <FormLegendWrapper>
            <FormSubtitle>Ítems de coleta</FormSubtitle>
            <FormTextAuxiliary>
              selecione um ou mais itens abaixo
            </FormTextAuxiliary>
          </FormLegendWrapper>
        </FormFieldset>
      </Form>
    </CreatePointContainer>
  );
};

export default CreatePoint;
