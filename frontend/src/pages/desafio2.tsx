import { useState } from "react";
import ResponseCard from "../components/response-card";
import useErrorContext from "../hooks/error-context";
import { ApiService } from "../services/api-service";

type Desafio2Query = {
  money: string;
  price: string;
};

type ResponseData = {
  price: number;
  returned: number;
  m100: number;
  m10: number;
  m1: number;
};

export default function Desafio2() {
  const service = new ApiService("http://localhost:3002/money");

  const { setError } = useErrorContext();

  const [query, setQuery] = useState<Desafio2Query>({ money: "", price: "" });
  const [results, setResults] = useState<string>("");

  function handleChange(event: any) {
    const { name, value } = event.target;
    setQuery({ ...query, [name]: value });
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    const queryData = JSON.stringify(query);
    service.post(queryData).then(formatResult).catch(setError);
  }

  function formatResult(response: ResponseData) {
    const text = `Preço do produto: ${response.price}
Valor do troco: ${response.returned}
Cédulas utilizadas:
    - R$ 100,00: ${response.m100}
    - R$  10,00: ${response.m10}
    - R$   1,00: ${response.m1}
`;
    setResults(text);
  }

  return (
    <div>
      <div className="card shadow rounded">
        <h1>Desafio 2 - Troco</h1>
        <p>
          Para resolver esse desafio, será utilizado o algoritmo Greedy, que
          serve para calcular a quantidade de notas utilizadas em um troco.
          <br />
          Os valores das notas possíveis para este exemplo são:
          <br />
          <code>R$ 100</code>, <code>R$ 10</code> e <code>R$ 1</code>.
          <br />
          Digite abaixo o preço de um objeto fictício e o valor recebido para
          calcular o troco e as cédulas utilizadas:
        </p>
      </div>
      <form onSubmit={handleSubmit} className="form-group card shadow rounded">
        <input
          required
          min={0}
          type="number"
          name="price"
          placeholder="Preço do produto"
          value={query.price}
          onChange={handleChange}
        />
        <input
          min={Number(query.price) + 1}
          required
          type="number"
          name="money"
          placeholder="Valor recebido"
          value={query.money}
          onChange={handleChange}
        />
        <input
          className="button"
          type="submit"
          name="submit"
          value="Consultar"
        />
      </form>
      <ResponseCard results={results} />
    </div>
  );
}
