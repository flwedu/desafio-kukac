import { NextFunction, Request, Response } from "express";
import { CarProps } from "../../application/domain/vehicle/car";
import { MotorcycleProps } from "../../application/domain/vehicle/motorcycle";
import RegisterCarUseCase from "../../application/usecases/register-car";
import RegisterMotorcycleUseCase from "../../application/usecases/register-motorcycle";
import IVehicleRepository from "../../output/repositories/vehicle-repository";

class RegisterVehicleController {
  constructor(private readonly repository: IVehicleRepository) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const type = req.body.type;
      let results;

      if (type === "car") {
        const props: CarProps = req.body;
        results = await new RegisterCarUseCase(this.repository).execute(props);
      }
      if (type === "motorcycle") {
        const props: MotorcycleProps = req.body;
        results = await new RegisterMotorcycleUseCase(this.repository).execute(
          props
        );
      }

      return res.json(results);
    } catch (error) {
      next(error);
    }
  }
}

export { RegisterVehicleController };
