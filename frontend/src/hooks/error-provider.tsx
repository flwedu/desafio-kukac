import { createContext, useState } from "react";

type ErrorContextType = {
  error: Error | null;
  setError: (err: Error | null) => void;
};

const ErrorContext = createContext<ErrorContextType | null>(null);

const ErrorContextProvider = ({ children }: { children: JSX.Element }) => {
  const [error, setError] = useState<Error | null>(null);

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export { ErrorContext, ErrorContextProvider };
