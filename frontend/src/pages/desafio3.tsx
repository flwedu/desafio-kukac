import { useEffect, useState } from "react";
import InputTextField from "../components/input-text-field";
import ResponseCard from "../components/response-card";
import { ApiService } from "../services/api-service";

export default function Desafio3() {
  const service = new ApiService("http://localhost:3002/vehicles");

  const [query, setQuery] = useState({
    type: "car",
    brand: "",
    model: "",
    year: "2022",
    doors: "4",
    wheels: "4",
    passengers: "5",
  });
  const [results, setResults] = useState<string>("");

  useEffect(() => {}, []);

  function handleChange(event: any) {
    const { name, value } = event.target;
    setQuery({ ...query, [name]: value });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    // Get Form element
    const form = document.getElementsByTagName("form")[0];
    // Verify if form is valid
    if (form.checkValidity()) {
      const queryData = JSON.stringify(query);
      service.post(queryData).then(setResults).catch(console.error);
    }
  }

  return (
    <div>
      <div className="card">
        <h1>Desafio 3 - Cadastro de Veículos</h1>
        <p>
          Essa aplicação permite o cadastro de veículos (motos ou carros), cada
          um com seus campos individuais.
          <br />
          Escolha o tipo de veículo abaixo e preencha o formulário para inserção
          das informações no banco de dados.
        </p>
      </div>
      <div className="form-group card" onChange={handleChange}>
        <p>Dados do veículo:</p>
        <div className="flex flex-row">
          <span>Tipo:</span>
          <input defaultChecked type="radio" value="car" name="type" /> Carro
          <input type="radio" value="motorcycle" name="type" /> Moto
        </div>
        <form
          onSubmit={handleSubmit}
          name="form"
          className="form-group grid grid-2"
        >
          <InputTextField
            name="brand"
            placeholder="Marca"
            value={query.brand}
          />
          <InputTextField
            name="model"
            placeholder="Modelo"
            value={query.model}
          />
          <input
            type="number"
            required
            maxLength={4}
            name="year"
            id="year"
            defaultValue={Number(query.year)}
          />
          {query.type === "car" ? (
            <CarFormFields query={query} setQuery={setQuery} />
          ) : (
            <MotorcycleFormFields query={query} setQuery={setQuery} />
          )}
          <input
            className="button"
            type="submit"
            name="submit"
            value="Inserir"
          />
        </form>
      </div>
      {results && <ResponseCard results={results} />}
    </div>
  );
}
function CarFormFields({ query, setQuery }: any) {
  useEffect(() => {
    setQuery({
      ...query,
      passengers: "5",
      wheels: "4",
      doors: "4",
    });
  }, []);

  return (
    <div className="flex flex-row">
      <span>Quantidade de portas:</span>
      <input type="radio" value="2" name="doors" /> 2
      <input type="radio" value="3" name="doors" /> 3
      <input type="radio" value="4" name="doors" defaultChecked /> 4
    </div>
  );
}

function MotorcycleFormFields({ query, setQuery }: any) {
  useEffect(() => {
    setQuery({
      ...query,
      passengers: "2",
      wheels: "2",
      doors: "0",
    });
  }, []);

  return (
    <div className="flex flex-row">
      <span>Passageiros:</span>
      <input type="radio" value="1" name="passengers" /> 1
      <input type="radio" value="2" name="passengers" defaultChecked /> 2
    </div>
  );
}
