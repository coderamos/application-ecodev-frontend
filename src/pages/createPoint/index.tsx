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
  Label,
  Input,
} from "./styles";
import { Header } from "../../components";

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
            <Input type="text" name="name" id="name" />
          </FieldWrapper>
          <FieldGroupWrapper>
            <FieldWrapper>
              <Label htmlFor="email">e-mail</Label>
              <Input type="email" name="email" id="email" />
            </FieldWrapper>

            <FieldWrapper>
              <Label htmlFor="whatsapp">whatsapp</Label>
              <Input type="text" name="whatsapp" id="whatsapp" />
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
          </FormLegendWrapper>
        </FormFieldset>
      </Form>
    </CreatePointContainer>
  );
};

export default CreatePoint;
