export function testPalindrome(value: any) {
  const valueStr = String(value);
  const invertedStr = valueStr.split("").reverse().join("");

  return valueStr == invertedStr;
}
