import { greedy } from "../../algorithms/greedy";
import {
  BusinessLogicError,
  ErrorMessages,
} from "../errors/business-logic-error";

export default class FindMinimumAmountOfNotes {
  public availableNotes = [100, 10, 1];

  execute(money: number, price: number) {
    if (price > money) {
      throw new BusinessLogicError(ErrorMessages.VALOR_INVALIDO);
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
