import IVehicleRepository from "../../output/repositories/vehicle-repository";
import Car from "../domain/vehicle/car";

export default class RegisterCarUseCase {
  constructor(private readonly repository: IVehicleRepository) {}

  async execute(props: any) {
    const car = new Car(props);
    return this.repository.save(car);
  }
}
