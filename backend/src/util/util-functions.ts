import {
  ErrorMessages,
  ValidationError,
} from "../application/errors/validation-error";

function checkAndParseToNumber(value: any) {
  if (
    Number(value) >= 0 &&
    value !== undefined &&
    value !== NaN &&
    value !== null
  )
    return Number(value);
  throw new ValidationError(ErrorMessages.VALOR_INVALIDO);
}

export { checkAndParseToNumber };
