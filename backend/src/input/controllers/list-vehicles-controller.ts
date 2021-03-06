import { NextFunction, Request, Response } from "express";
import { ListVehiclesUseCase } from "../../application/usecases/list-vehicles";
import IVehicleRepository from "../../output/repositories/vehicle-repository";

class ListVehiclesController {
  constructor(private readonly repository: IVehicleRepository) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const results = await new ListVehiclesUseCase(this.repository).execute();
      return res.status(200).json(results);
    } catch (error) {
      next(error);
    }
  }
}

export { ListVehiclesController };
