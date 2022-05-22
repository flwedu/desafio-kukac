import IVehicleRepository from "../../output/repositories/vehicle-repository";
import Motorcycle from "../domain/vehicle/motorcycle";

export default class RegisterMotorcycleUseCase {
  constructor(private readonly repository: IVehicleRepository) {}

  async execute(props: any) {
    const moto = new Motorcycle(props);
    return this.repository.save(moto);
  }
}
