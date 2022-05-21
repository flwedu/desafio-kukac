import { useState } from "react";
import ResponseCard from "../components/response-card";
import { ApiService } from "../services/api-service";

export default function Desafio3() {
  const service = new ApiService("http://localhost:3002/vehicles");

  const [query, setQuery] = useState({});
  const [results, setResults] = useState<string>("");

  function handleChange(event: any) {
    const { name, value } = event.target;
    setQuery({ ...query, [name]: value });
  }

  function handleSubmit() {
    if (true) {
      const queryData = JSON.stringify(query);
      service.post(queryData).then(setResults).catch(console.error);
    }
  }

  return (
    <div>
      <div className="card">
        <h1>Desafio 3 - Veículos</h1>
        <p></p>
      </div>
      <div className="form-group card">
        <button name="submit" onClick={handleSubmit}>
          Consultar
        </button>
      </div>

      {results && <ResponseCard results={results} />}
    </div>
  );
}
