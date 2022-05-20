import { Request, Response } from "express";
import FindMinimumAmountOfNotes from "../../application/usecases/find-minimum-amount-of-notes";

export class MoneyController {
  handle(req: Request, res: Response) {
    const { money, price } = req.body;
    const results = new FindMinimumAmountOfNotes().execute(money, price);

    return res.json(results);
  }
}
