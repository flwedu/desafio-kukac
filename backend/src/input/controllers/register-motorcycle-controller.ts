import { Request, Response } from "express";
import { MotorcycleProps } from "../../application/domain/vehicle/motorcycle";
import RegisterMotorcycleUseCase from "../../application/usecases/register-motorcycle";
import IVehicleRepository from "../../output/repositories/vehicle-repository";

class RegisterMotorcycleController {
  constructor(private readonly repository: IVehicleRepository) {}

  async handle(req: Request, res: Response) {
    const props: MotorcycleProps = req.body;
    const results = await new RegisterMotorcycleUseCase(
      this.repository
    ).execute(props);

    return res.json(results);
  }
}

export { RegisterMotorcycleController };
