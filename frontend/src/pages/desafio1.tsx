import { useState } from "react";
import ResponseCard from "../components/response-card";
import useErrorContext from "../hooks/error-context";
import { ApiService } from "../services/api-service";

export type Desafio1Query = {
  initial: string;
  final: string;
};

export default function Desafio1() {
  const service = new ApiService("http://localhost:3002/palindrome");

  const { setError } = useErrorContext();

  const [query, setQuery] = useState<Desafio1Query>({ initial: "", final: "" });
  const [results, setResults] = useState("");

  function handleChange(event: any) {
    const { name, value } = event.target;
    setQuery({ ...query, [name]: value });
  }

  function handleSubmit() {
    if (query.initial.length > 0 && query.final.length > 0) {
      const queryData = JSON.stringify(query);
      service.post(queryData).then(setResults).catch(setError);
    }
  }

  return (
    <div>
      <div className="card shadow rounded">
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
      <div className="form-group card shadow rounded">
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
      <ResponseCard results={results} />
    </div>
  );
}
