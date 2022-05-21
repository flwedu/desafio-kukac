import { Request, Response } from "express";
import { CarProps } from "../../application/domain/vehicle/car";
import RegisterCarUseCase from "../../application/usecases/register-car";
import IVehicleRepository from "../../output/repositories/vehicle-repository";

class RegisterCarController {
  constructor(private readonly repository: IVehicleRepository) {}

  async handle(req: Request, res: Response) {
    const props: CarProps = req.body;
    const results = await new RegisterCarUseCase(this.repository).execute(
      props
    );

    return res.json(results);
  }
}

export { RegisterCarController };
