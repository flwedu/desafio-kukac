import { NextFunction, Request, Response } from "express";
import RegisterCarUseCase from "../../application/usecases/register-car";
import RegisterMotorcycleUseCase from "../../application/usecases/register-motorcycle";
import IVehicleRepository from "../../output/repositories/vehicle-repository";

class RegisterVehicleController {
  constructor(private readonly repository: IVehicleRepository) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const type = req.body.type;
      const props = req.body;
      let results;

      if (type === "car") {
        results = await new RegisterCarUseCase(this.repository).execute(props);
      }
      if (type === "motorcycle") {
        results = await new RegisterMotorcycleUseCase(this.repository).execute(
          props
        );
      }

      return res.status(201).json(results);
    } catch (error) {
      next(error);
    }
  }
}

export { RegisterVehicleController };
