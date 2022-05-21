import { Request, Response } from "express";
import { CarProps } from "../../application/domain/vehicle/car";
import { MotorcycleProps } from "../../application/domain/vehicle/motorcycle";
import RegisterCarUseCase from "../../application/usecases/register-car";
import RegisterMotorcycleUseCase from "../../application/usecases/register-motorcycle";
import IVehicleRepository from "../../output/repositories/vehicle-repository";

class RegisterVehicleController {
  constructor(private readonly repository: IVehicleRepository) {}

  async handle(req: Request, res: Response) {
    const type = req.body.type;
    let results;

    if (type === "Car") {
      const props: CarProps = req.body.props;
      results = await new RegisterCarUseCase(this.repository).execute(props);
    }
    if (type === "Motorcycle") {
      const props: MotorcycleProps = req.body.props;
      results = await new RegisterMotorcycleUseCase(this.repository).execute(
        props
      );
    }

    return res.json(results);
  }
}

export { RegisterVehicleController };
