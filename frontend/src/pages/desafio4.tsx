import { useState } from "react";
import CepAddressCard from "../components/cep-address-card";
import useErrorContext from "../hooks/error-context";
import { ApiService } from "../services/api-service";

export default function Desafio4() {
  const service = new ApiService("https://viacep.com.br/ws/");

  const { setError } = useErrorContext();

  const [text, setText] = useState<string>("");
  const [results, setResults] = useState<string[]>([]);

  function handleTextAreaChange(event: any) {
    setText(event.target.value);
  }

  async function handleSubmit() {
    const queries = formatQuery(text);
    postAllQueries(queries).then(setResults).catch(setError);
  }

  async function postAllQueries(query: string[]) {
    const results = await Promise.all(
      query.map((query) => {
        return service.get(`${query}/json`);
      })
    );
    return results;
  }

  return (
    <div>
      <div className="card">
        <h1>Desafio 4 - Busca por CEP's</h1>
        <p>
          Digite abaixo um número de CEP para efetuar a busca pelos dados. Até 5
          CEP's podem ser informados por busca, um em cada linha.
        </p>
      </div>
      <div className="form-group card">
        <textarea
          value={text}
          onChange={handleTextAreaChange}
          rows={5}
          placeholder="Digite aqui os números de CEP"
        ></textarea>
        <button onClick={handleSubmit}>Consultar</button>
      </div>
      {results.length > 0 && (
        <div className="response card">
          <p>Esses são os resultados: </p>

          {results.map((result, index) => (
            <CepAddressCard key={index} data={result} />
          ))}
        </div>
      )}
    </div>
  );
}

function formatQuery(text: string): string[] {
  // Sanitizing
  text = text.replaceAll(/[a-z\-]/gi, "");
  text = text.replaceAll(/[\s;,]/gi, "\n");

  let arr = text.split("\n");
  // Pick only the first 5 positions
  // Add missing zeroes
  arr = arr.slice(0, 5).map((el) => el.padEnd(8, "0"));

  return arr;
}
