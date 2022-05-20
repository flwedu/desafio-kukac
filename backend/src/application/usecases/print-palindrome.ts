import { testPalindrome } from "../../algorithms/palindrome";
import { checkAndParseToNumber } from "../../util/util-functions";
import {
  BusinessLogicError,
  ErrorMessages,
} from "../errors/business-logic-error";

export default class PrintPalindromeUseCase {
  execute(initialValue: string | number, finalValue: string | number) {
    const [parsedInitial, parsedFinal] = [
      checkAndParseToNumber(initialValue),
      checkAndParseToNumber(finalValue),
    ];

    if (initialValue > finalValue) {
      throw new BusinessLogicError(ErrorMessages.PALINDROME_INICIAL_EH_MAIOR);
    }

    const numbers = [];
    for (let i = parsedInitial; i <= parsedFinal; i++) numbers.push(i);
    return numbers.filter(testPalindrome);
  }
}
