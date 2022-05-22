import { NextFunction, Request, Response } from "express";
import PrintPalindromeUseCase from "../../application/usecases/print-palindrome";

export class PalindromeController {
  handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { initial, final } = req.body;
      const results = new PrintPalindromeUseCase().execute(initial, final);

      return res.json(results.join(" "));
    } catch (error) {
      next(error);
    }
  }
}
