import { useEffect } from "react";
import useErrorContext from "../hooks/error-context";

export function ErrorWindow() {
  const { error, setError } = useErrorContext();

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, []);

  function closeWindow() {
    setError(null);
  }

  return error ? (
    <div className="error-window flex flex-col shadow rounded">
      <div className="header">{error.name}</div>
      <div className="body">
        <div>{error.message}</div>
      </div>
      <button onClick={closeWindow}>Fechar</button>
    </div>
  ) : (
    <></>
  );
}
