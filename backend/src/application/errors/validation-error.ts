class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

const ErrorMessages = {
  VALOR_INVALIDO: "Valor inválido",
  PARAMETRO_INVALIDO: "Parâmetro inválido",
};

export { ValidationError, ErrorMessages };
