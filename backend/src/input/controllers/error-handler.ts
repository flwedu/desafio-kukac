import { Request, Response } from "express";

export function errorHandler(error: any, req: Request, res: Response) {
  if (error.name == "BusinessLogicError") {
    res.status(400);
    res.json(JSON.stringify(error));
  }
  res.status(500);
  res.json(JSON.stringify(error));
}
