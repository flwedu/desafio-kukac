import { testPalindrome } from "./palindrome";

describe("Test Palindrome function tests", () => {
  test.each([1, 22, 515, 2002, 129921])(
    "should return true for $s",
    (value) => {
      expect(testPalindrome(value)).toBeTruthy();
    }
  );

  test.each([12, -2, null, 2003, 1129921])(
    "should false true for $s",
    (value) => {
      expect(testPalindrome(value)).toBeFalsy();
    }
  );
});
