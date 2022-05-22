import { useContext } from "react";
import { ErrorContext } from "./error-provider";

const useErrorContext = () => {
  const context = useContext(ErrorContext);

  if (!context) {
    throw new Error("ErrorContext is undefined");
  }

  return context;
};

export default useErrorContext;
