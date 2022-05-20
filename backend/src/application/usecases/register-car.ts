import IVehicleRepository from "../../output/repositories/vehicle-repository";
import Car, { CarProps } from "../domain/vehicle/car";

export default class RegisterCarUseCase {
  constructor(private readonly repository: IVehicleRepository) {}

  async execute(props: CarProps) {
    try {
      const car = new Car(props);
      return this.repository.save(car);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
