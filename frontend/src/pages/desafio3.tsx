import { useEffect, useState } from "react";
import InputTextField from "../components/input-text-field";
import ResponseCard from "../components/response-card";
import useErrorContext from "../hooks/error-context";
import { ApiService } from "../services/api-service";

export default function Desafio3() {
  const service = new ApiService("http://localhost:3002/vehicles");

  const { setError } = useErrorContext();

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
      service.post(queryData).then(formatResponseAndSetResults).catch(setError);
    }
  }

  function formatResponseAndSetResults(response: string) {
    setResults(`Foi inserido um veículo com as seguintes propriedades:
  ${JSON.stringify(response)}
    `);
  }

  return (
    <div>
      <div className="card shadow rounded">
        <h1>Desafio 3 - Cadastro de Veículos</h1>
        <p>
          Essa aplicação permite o cadastro de veículos (motos ou carros), cada
          um com seus campos individuais.
          <br />
          Escolha o tipo de veículo abaixo e preencha o formulário para inserção
          das informações no banco de dados.
        </p>
      </div>
      <div className="form-group card shadow rounded" onChange={handleChange}>
        <p>Dados do veículo:</p>
        <div className="flex flex-row">
          <span>Tipo:</span>
          <input defaultChecked type="radio" value="car" name="type" /> Carro
          <input type="radio" value="motorcycle" name="type" /> Moto
        </div>
        <form onSubmit={handleSubmit} name="form" className="form-group">
          <div className="grid grid-2">
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
          </div>
          <input
            className="button"
            type="submit"
            name="submit"
            value="Inserir"
          />
        </form>
      </div>
      <ResponseCard results={results} />
    </div>
  );
}

// Car Exclusive Form Fields
function CarFormFields({ query, setQuery }: any) {
  useEffect(() => {
    setQuery({
      ...query,
      passengers: "5",
      wheels: "4",
      doors: "2",
    });
  }, []);

  return (
    <div className="flex flex-col">
      <span>Quantidade de portas:</span>
      <select name="doors">
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </div>
  );
}

// Motorcycle Exclusive Form Fields
function MotorcycleFormFields({ query, setQuery }: any) {
  useEffect(() => {
    setQuery({
      ...query,
      passengers: "1",
      wheels: "2",
      doors: "0",
    });
  }, []);

  return (
    <div className="flex flex-col">
      <span>Passageiros:</span>
      <select name="passengers">
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </div>
  );
}
