import {
  BusinessLogicError,
  ErrorMessages,
} from "../errors/business-logic-error";
import FindMinimumAmountOfNotes from "./find-minimum-amount-of-notes";

describe("Find minimum amount of notes use case tests", () => {
  test.each`
    money  | price | m100 | m10  | m1
    ${100} | ${90} | ${0} | ${1} | ${0}
    ${200} | ${50} | ${1} | ${5} | ${0}
    ${33}  | ${1}  | ${0} | ${3} | ${2}
  `("Should return the correct value", ({ money, price, m100, m10, m1 }) => {
    const sut = new FindMinimumAmountOfNotes();
    const result = sut.execute(money, price);

    expect(result).toEqual({
      price,
      returned: money - price,
      m100,
      m10,
      m1,
    });
  });

  test("Should throw error if price > money", () => {
    try {
      const sut = new FindMinimumAmountOfNotes();
      const result = sut.execute(5, 10);
    } catch (error) {
      expect(error).toEqual(
        new BusinessLogicError(ErrorMessages.VALOR_INVALIDO)
      );
    }
  });
});
