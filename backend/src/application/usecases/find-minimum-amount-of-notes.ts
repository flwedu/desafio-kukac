import { greedy } from "../../algorithms/greedy";
import { checkAndParseToNumber } from "../../util/util-functions";
import { ErrorMessages, ValidationError } from "../errors/validation-error";

export default class FindMinimumAmountOfNotes {
  public availableNotes = [100, 10, 1];

  execute(moneyInput: number | string, priceInput: number | string) {
    const [money, price] = [
      checkAndParseToNumber(moneyInput),
      checkAndParseToNumber(priceInput),
    ];

    if (price > money) {
      throw new ValidationError(ErrorMessages.VALOR_INVALIDO);
    }

    const returned = money - price;
    const [m100, m10, m1] = greedy(this.availableNotes, returned);

    return {
      price,
      returned,
      m100,
      m10,
      m1,
    };
  }
}
