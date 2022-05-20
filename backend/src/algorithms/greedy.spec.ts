import { greedy } from "./greedy";

describe("Greedy algorithm function tests", () => {
  test.each`
    notes           | value  | expected
    ${[1]}          | ${10}  | ${[10]}
    ${[5, 1]}       | ${10}  | ${[2, 0]}
    ${[100, 10, 1]} | ${110} | ${[1, 1, 0]}
    ${[100, 10, 1]} | ${132} | ${[1, 3, 2]}
  `(
    "Should return the expected result for notes: $notes and value: $value to Equal $expected",
    ({ notes, value, expected }) => {
      expect(greedy(notes, value)).toEqual(expected);
    }
  );
});
