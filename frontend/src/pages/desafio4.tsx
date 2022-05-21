import { useState } from "react";
import ResponseCard from "../components/response-card";
import { ApiService } from "../services/api-service";

export default function Desafio4() {
  const service = new ApiService("http://localhost:3002/ceps");

  const [text, setText] = useState<string>("");
  const [results, setResults] = useState<string>("");

  function handleTextAreaChange(event: any) {
    setText(event.target.value);
  }

  function handleSubmit() {
    service.post(text).then(setResults).catch(console.error);
  }

  return (
    <div>
      <div className="card">
        <h1>Desafio 4 - Busca por CEP's</h1>
        <p>
          Digite abaixo um número de CEP para efetuar a busca pelos dados. Até 5
          CEP's podem ser informados por busca, separados por <code>";"</code>.
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
      {results && <ResponseCard results={results} />}
    </div>
  );
}
