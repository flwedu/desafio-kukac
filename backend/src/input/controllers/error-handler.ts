import { Request, Response } from "express";

export function errorHandler(err: any, req: Request, res: Response) {
  if (err.name === "BusinessLogicError") {
    return res.status(400).json(err.message);
  }
  return res.status(500).json(err.message);
}
