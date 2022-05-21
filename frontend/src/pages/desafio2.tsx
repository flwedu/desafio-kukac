import { useState } from "react";
import ResponseCard from "../components/response-card";
import { ApiService } from "../services/api-service";

type Desafio2Query = {
  money: string;
  price: string;
};

export default function Desafio2() {
  const service = new ApiService("http://localhost:3002/money");

  const [query, setQuery] = useState<Desafio2Query>({ money: "", price: "" });
  const [results, setResults] = useState<string>("");

  function handleChange(event: any) {
    const { name, value } = event.target;
    setQuery({ ...query, [name]: value });
  }

  function handleSubmit() {
    if (query.money.length > 0 && query.price.length > 0) {
      const queryData = JSON.stringify(query);
      service.post(queryData).then(setResults).catch(console.error);
    }
  }

  return (
    <div>
      <div className="card">
        <h1>Desafio 2 - Troco</h1>
        <p>
          Esse algoritmo, conhecido como Greedy, decompõe um número de acordo
          com os valores possíveis.
          <br />
          Para ilustrar sua utilização, será usado um exemplo de transação em
          que é necessário se calcular quantas notas deverão ser utilizadas para
          passar um troco.
          <br />
          Os valores das notas possíveis para este exemplo são:{" "}
          <code>R$ 100</code>, <code>R$ 10</code> e <code>R$ 1</code>.
          <br />
          Digite abaixo o preço de um objeto fictício e o valor recebido para
          calcular o troco e as cédulas utilizadas:
        </p>
      </div>
      <div className="form-group card">
        <input
          type="number"
          name="price"
          placeholder="Preço do produto"
          value={query.price}
          onChange={handleChange}
        />
        <input
          type="number"
          name="money"
          placeholder="Valor recebido"
          value={query.money}
          onChange={handleChange}
        />
        <button name="submit" onClick={handleSubmit}>
          Consultar
        </button>
      </div>

      {results && <ResponseCard results={results} />}
    </div>
  );
}
