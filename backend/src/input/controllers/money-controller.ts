import { NextFunction, Request, Response } from "express";
import FindMinimumAmountOfNotes from "../../application/usecases/find-minimum-amount-of-notes";

export class MoneyController {
  handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { money, price } = req.body;
      const results = new FindMinimumAmountOfNotes().execute(money, price);
      return res.status(200).json(results);
    } catch (error) {
      next(error);
    }
  }
}
