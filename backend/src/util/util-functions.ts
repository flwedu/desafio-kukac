import {
  BusinessLogicError,
  ErrorMessages,
} from "../application/errors/business-logic-error";

function checkAndParseToNumber(value: any) {
  if (
    Number(value) >= 0 &&
    value !== undefined &&
    value !== NaN &&
    value !== null
  )
    return Number(value);
  throw new BusinessLogicError(ErrorMessages.VALOR_INVALIDO);
}

export { checkAndParseToNumber };
