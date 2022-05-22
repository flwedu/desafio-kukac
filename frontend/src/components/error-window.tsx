import { useEffect } from "react";
import useErrorContext from "../hooks/error-context";

export function ErrorWindow({ logFn }: { logFn: Function }) {
  const { error, setError } = useErrorContext();

  useEffect(() => {
    if (error) {
      logFn(error);
    }
  }, []);

  function closeWindow() {
    setError(null);
  }

  return error ? (
    <div
      id="error-window"
      className="error-window flex flex-col shadow rounded"
    >
      <div className="header">{error.name}</div>
      <div className="body">
        {error.alert ? (
          <p>{error.alert}</p>
        ) : (
          <p>
            Ocorreu um erro ao processar sua requisição. Consulte o console do
            navegador para mais detalhes.
          </p>
        )}
      </div>
      <button onClick={closeWindow}>Fechar</button>
    </div>
  ) : (
    <></>
  );
}
