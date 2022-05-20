class BusinessLogicError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "BusinessLogicError";
  }
}

const ErrorMessages = {
  PALINDROME_INICIAL_EH_MAIOR: "O valor inicial não pode ser maior que o final",
  VALOR_INVALIDO: "Valor inválido",
  PARAMETRO_INVALIDO: "Parâmetro inválido",
};

export { BusinessLogicError, ErrorMessages };
