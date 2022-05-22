import { ValidationError, ErrorMessages } from "../errors/validation-error";
import PrintPalindromeUseCase from "./print-palindrome";

describe("Print Palindrome class tests", () => {
  test.each`
    initial | final    | array
    ${"0"}  | ${"60"}  | ${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55]}
    ${"1"}  | ${10}    | ${[1, 2, 3, 4, 5, 6, 7, 8, 9]}
    ${"10"} | ${"120"} | ${[11, 22, 33, 44, 55, 66, 77, 88, 99, 101, 111]}
  `(
    "Should print all the palindrome numbers between $initial and $final",
    ({ initial, final, array }) => {
      const sut = new PrintPalindromeUseCase();

      const result = sut.execute(initial, final);

      expect.assertions(1);
      expect(result).toEqual(array);
    }
  );

  test.each`
    initial | final
    ${"10"} | ${5}
    ${100}  | ${0}
  `("Should throw error if initial > final", ({ initial, final }) => {
    const sut = new PrintPalindromeUseCase();

    expect.assertions(1);
    try {
      sut.execute(initial, final);
    } catch (err) {
      expect(err).toEqual(new ValidationError(ErrorMessages.VALOR_INVALIDO));
    }
  });

  test.each`
    initial | final
    ${null} | ${5}
    ${100}  | ${undefined}
    ${-10}  | ${0}
    ${"a"}  | ${999}
  `("Should throw error if one value is invalid", ({ initial, final }) => {
    const sut = new PrintPalindromeUseCase();

    expect.assertions(1);
    try {
      sut.execute(initial, final);
    } catch (err) {
      expect(err).toEqual(new ValidationError(ErrorMessages.VALOR_INVALIDO));
    }
  });
});
