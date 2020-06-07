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
  List,
  ListItemWrapper,
  ItemImage,
  ItemName,
  Button,
} from "./styles";
import { Header, InputGeneric, Label, InputSelect } from "../../components";

const ufOptions = [
  { value: 0, description: "selecione o estado" },
  { value: 1, description: "uf 1" },
];

const cityOptions = [
  { value: 0, description: "selecione a cidade" },
  { value: 1, description: "cidade 1" },
];

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

          <FieldGroupWrapper>
            <FieldWrapper>
              <Label htmlFor="uf">estado (uf)</Label>
              <InputSelect name="uf" id="uf" options={ufOptions} />
            </FieldWrapper>

            <FieldWrapper>
              <Label htmlFor="city">cidade</Label>
              <InputSelect name="city" id="city" options={cityOptions} />
            </FieldWrapper>
          </FieldGroupWrapper>
        </FormFieldset>

        <FormFieldset>
          <FormLegendWrapper>
            <FormSubtitle>Ítems de coleta</FormSubtitle>
            <FormTextAuxiliary>
              selecione um ou mais itens abaixo
            </FormTextAuxiliary>
          </FormLegendWrapper>
          <List>
            <ListItemWrapper>
              <ItemImage
                src="http://localhost:3333/uploads/oleo.svg"
                alt="oleo"
              />
              <ItemName>Óleo de Cozinha</ItemName>
            </ListItemWrapper>
            <ListItemWrapper>
              <ItemImage
                src="http://localhost:3333/uploads/oleo.svg"
                alt="oleo"
              />
              <ItemName>Óleo de Cozinha</ItemName>
            </ListItemWrapper>
            <ListItemWrapper>
              <ItemImage
                src="http://localhost:3333/uploads/oleo.svg"
                alt="oleo"
              />
              <ItemName>Óleo de Cozinha</ItemName>
            </ListItemWrapper>
            <ListItemWrapper>
              <ItemImage
                src="http://localhost:3333/uploads/oleo.svg"
                alt="oleo"
              />
              <ItemName>Óleo de Cozinha</ItemName>
            </ListItemWrapper>
            <ListItemWrapper>
              <ItemImage
                src="http://localhost:3333/uploads/oleo.svg"
                alt="oleo"
              />
              <ItemName>Óleo de Cozinha</ItemName>
            </ListItemWrapper>
            <ListItemWrapper>
              <ItemImage
                src="http://localhost:3333/uploads/oleo.svg"
                alt="oleo"
              />
              <ItemName>Óleo de Cozinha</ItemName>
            </ListItemWrapper>
          </List>
        </FormFieldset>
        <Button type="submit">cadastrar ponto de coleta</Button>
      </Form>
    </CreatePointContainer>
  );
};

export default CreatePoint;
