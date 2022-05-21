import { useState } from "react";
import { PalindromeService } from "../services/palindrome-service";

export type Desafio1Query = {
  initial: string;
  final: string;
};

export default function Desafio1() {
  const service = new PalindromeService("http://localhost:3002/palindrome");

  const [query, setQuery] = useState<Desafio1Query>({ initial: "", final: "" });
  const [results, setResults] = useState("");

  function handleChange(event: any) {
    const { name, value } = event.target;
    setQuery({ ...query, [name]: value });
  }

  function handleSubmit() {
    if (query.initial.length > 0 && query.final.length > 0)
      service.execute(query).then(setResults);
  }

  return (
    <div>
      <div className="card">
        <h1>Desafio 1 - Palíndromos</h1>
        <p>
          Números palíndromos são aqueles que escritos da direita para esquerda
          ou da esquerda para direita tem o mesmo valor. Exemplo: 929, 44,
          97379.
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

      {results && (
        <div className="response card">
          <h2>Resposta</h2>
          <p>Esse é o resultado: </p>
          <textarea
            readOnly
            name="results"
            id="results"
            value={results}
          ></textarea>
        </div>
      )}
    </div>
  );
}
