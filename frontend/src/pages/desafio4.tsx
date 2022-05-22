import { useState } from "react";
import CepForm from "./../components/cep-form";
import CepAddressCard from "../components/cep-address-card";
import useErrorContext from "../hooks/error-context";
import { ApiService } from "../services/api-service";

export default function Desafio4() {
  const service = new ApiService("https://viacep.com.br/ws/");

  const { setError } = useErrorContext();
  const [results, setResults] = useState<string[]>([]);

  async function submit(arr: string[]) {
    postAllQueries(arr).then(setResults).catch(setError);
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
      <div className="card shadow rounded">
        <h1>Desafio 4 - Busca por CEP's</h1>
        <p>
          Digite abaixo um número de CEP para efetuar a busca pelos dados. Até 5
          CEP's podem ser informados por busca, um em cada linha.
        </p>
      </div>
      <CepForm submitFn={submit} />
      {results.length > 0 && (
        <div className="response card shadow rounded">
          <p>Esses são os resultados: </p>

          {results.map((result, index) => (
            <CepAddressCard key={index} data={result} />
          ))}
        </div>
      )}
    </div>
  );
}
