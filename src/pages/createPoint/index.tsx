import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";

import axios from "axios";
import { LeafletMouseEvent } from "leaflet";

import api from "../../services/api";

import {
  Header,
  InputGeneric,
  Label,
  InputSelect,
  Map,
} from "../../components";

import {
  CreatePointContainer,
  Form,
  FormTitle,
  FormFieldset,
  FormLegendWrapper,
  FormSubtitle,
  FormTextAuxiliary,
  FieldGroupWrapper,
  FieldWrapper,
  List,
  ListItemWrapper,
  ItemImage,
  ItemName,
  Button,
} from "./styles";

interface Item {
  id: number;
  title: string;
  image_url: string;
}

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

const CreatePoint: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [selectedUf, setSelectedUf] = useState<string>("0");
  const [selectedCity, setSelectedCity] = useState<string>("0");
  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([
    0,
    0,
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setInitialPosition([latitude, longitude]);
    });
  }, []);

  useEffect(() => {
    api.get("/items").then((response) => {
      setItems(response.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get<IBGEUFResponse[]>(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
      )
      .then((response) => {
        const ufsInitials = response.data.map((uf) => uf.sigla);
        setUfs(ufsInitials);
      });
  }, []);

  function handleSelectedUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value;
    setSelectedUf(uf);
  }

  function handleSelectedCity(event: ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value;
    setSelectedCity(city);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleMapClick(event: LeafletMouseEvent) {
    setSelectedPosition([event.latlng.lat, event.latlng.lng]);
  }

  function handleSelectItem(id: number) {
    const alreadySelected = selectedItems.findIndex((item) => item === id);
    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter((item) => item !== id);
      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { name, email, whatsapp } = formData;
    const uf = selectedUf;
    const city = selectedCity;
  }

  useEffect(() => {
    if (selectedUf === "0") return;
    axios
      .get<IBGECityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
      )
      .then((response) => {
        const citiesData = response.data.map((city) => city.nome);
        setCities(citiesData);
      });
  }, [selectedUf]);

  return (
    <CreatePointContainer>
      <Header hasBackButtom />
      <Form onSubmit={handleSubmit}>
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
            <InputGeneric
              type="text"
              name="name"
              id="name"
              onChange={handleInputChange}
            />
          </FieldWrapper>

          <FieldGroupWrapper>
            <FieldWrapper>
              <Label htmlFor="email">e-mail</Label>
              <InputGeneric
                type="email"
                name="email"
                id="email"
                onChange={handleInputChange}
              />
            </FieldWrapper>

            <FieldWrapper>
              <Label htmlFor="whatsapp">whatsapp</Label>
              <InputGeneric
                type="text"
                name="whatsapp"
                id="whatsapp"
                onChange={handleInputChange}
              />
            </FieldWrapper>
          </FieldGroupWrapper>
        </FormFieldset>

        <FormFieldset>
          <FormLegendWrapper>
            <FormSubtitle>Endereço</FormSubtitle>
            <FormTextAuxiliary>selecione o endereço no mapa</FormTextAuxiliary>
          </FormLegendWrapper>

          <Map
            zoom={16}
            initialPosition={initialPosition}
            onClick={handleMapClick}
            selectedPosition={selectedPosition}
          />

          <FieldGroupWrapper>
            <FieldWrapper>
              <Label htmlFor="uf">estado (uf)</Label>
              <InputSelect
                name="uf"
                id="uf"
                options={ufs}
                value={selectedUf}
                onChange={handleSelectedUf}
              />
            </FieldWrapper>

            <FieldWrapper>
              <Label htmlFor="city">cidade</Label>
              <InputSelect
                name="city"
                id="city"
                options={cities}
                disabled={cities.length === 0}
                onChange={handleSelectedCity}
              />
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
            {items &&
              items.map((item) => (
                <ListItemWrapper
                  key={item.id}
                  onClick={() => handleSelectItem(item.id)}
                  className={selectedItems.includes(item.id) ? "selected" : ""}
                >
                  <ItemImage src={item.image_url} alt={item.title} />
                  <ItemName>{item.title}</ItemName>
                </ListItemWrapper>
              ))}
          </List>
        </FormFieldset>
        <Button type="submit">cadastrar ponto de coleta</Button>
      </Form>
    </CreatePointContainer>
  );
};

export default CreatePoint;
