import { Request, Response } from "express";

export function errorHandler(err: Error, req: Request, res: Response) {
  if (err.name === "BusinessLogicError") {
    return res.status(400).json(JSON.stringify(err.message));
  }
  return res.status(500).json(JSON.stringify(err.message));
}
