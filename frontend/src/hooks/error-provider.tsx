import { createContext, useState } from "react";

type ErrorContextType = {
  error: any;
  setError: (err: any) => void;
};

const ErrorContext = createContext<ErrorContextType | null>(null);

const ErrorContextProvider = ({ children }: { children: JSX.Element }) => {
  const [error, setError] = useState<any>(null);

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export { ErrorContext, ErrorContextProvider };
