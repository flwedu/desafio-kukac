import { testPalindrome } from "../../algorithms/palindrome";
import { checkAndParseToNumber } from "../../util/util-functions";
import { ErrorMessages, ValidationError } from "../errors/validation-error";

export default class PrintPalindromeUseCase {
  execute(initialValue: string | number, finalValue: string | number) {
    const [parsedInitial, parsedFinal] = [
      checkAndParseToNumber(initialValue),
      checkAndParseToNumber(finalValue),
    ];

    if (initialValue > finalValue) {
      throw new ValidationError(ErrorMessages.VALOR_INVALIDO);
    }

    const numbers = [];
    for (let i = parsedInitial; i <= parsedFinal; i++) numbers.push(i);
    return numbers.filter(testPalindrome);
  }
}
