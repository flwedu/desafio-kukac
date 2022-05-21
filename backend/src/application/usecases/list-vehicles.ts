import IVehicleRepository from "../../output/repositories/vehicle-repository";

export class ListVehiclesUseCase {
  constructor(private readonly repository: IVehicleRepository) {}

  async execute() {
    return this.repository.loadAll();
  }
}
