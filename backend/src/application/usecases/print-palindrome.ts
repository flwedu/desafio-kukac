import { testPalindrome } from "../../algorithms/palindrome";
import {
  BusinessLogicError,
  ErrorMessages,
} from "../errors/business-logic-error";

export default class PrintPalindromeUseCase {
  private checkAndParseToNumber(value: any) {
    if (
      Number(value) >= 0 &&
      value !== undefined &&
      value !== NaN &&
      value !== null
    )
      return Number(value);
    throw new BusinessLogicError(ErrorMessages.VALOR_INVALIDO);
  }

  execute(initialValue: string | number, finalValue: string | number) {
    const [parsedInitial, parsedFinal] = [
      this.checkAndParseToNumber(initialValue),
      this.checkAndParseToNumber(finalValue),
    ];

    if (initialValue > finalValue) {
      throw new BusinessLogicError(ErrorMessages.PALINDROME_INICIAL_EH_MAIOR);
    }

    const numbers = [];
    for (let i = parsedInitial; i <= parsedFinal; i++) numbers.push(i);
    return numbers.filter(testPalindrome);
  }
}
