import IVehicleRepository from "../../output/repositories/vehicle-repository";
import Motorcycle, { MotorcycleProps } from "../domain/vehicle/motorcycle";

export default class RegisterMotorcycleUseCase {
  constructor(private readonly repository: IVehicleRepository) {}

  async execute(props: MotorcycleProps) {
    try {
      const moto = new Motorcycle(props);
      return this.repository.save(moto);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
