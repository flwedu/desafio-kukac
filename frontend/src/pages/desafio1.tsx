import { useState } from "react";
import ResponseCard from "../components/response-card";
import { ApiService } from "../services/api-service";

export type Desafio1Query = {
  initial: string;
  final: string;
};

export default function Desafio1() {
  const service = new ApiService("http://localhost:3002/palindrome");

  const [query, setQuery] = useState<Desafio1Query>({ initial: "", final: "" });
  const [results, setResults] = useState("");

  function handleChange(event: any) {
    const { name, value } = event.target;
    setQuery({ ...query, [name]: value });
  }

  function handleSubmit() {
    if (query.initial.length > 0 && query.final.length > 0) {
      const queryData = JSON.stringify(query);
      service.post(queryData).then(setResults).catch(console.error);
    }
  }

  return (
    <div>
      <div className="card">
        <h1>Desafio 1 - Palíndromos</h1>
        <p>
          Números palíndromos são aqueles que escritos da direita para esquerda
          ou da esquerda para direita tem o mesmo valor. Exemplos:{" "}
          <code>929</code>, <code>44</code> e <code>97379</code>.
          <br />
          Esse programa exibe todos os números palíndromos dentro de um
          intervalo definido por você.
        </p>
      </div>
      <div className="form-group card">
        <input
          type="number"
          name="initial"
          placeholder="Valor inicial"
          value={query.initial}
          onChange={handleChange}
        />
        <input
          type="number"
          name="final"
          placeholder="Valor final"
          value={query.final}
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
