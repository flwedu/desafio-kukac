import IVehicle from "../../../application/domain/vehicle/vehicle";
import IVehicleRepository from "../vehicle-repository";

export class InMemoryVehicleRepository implements IVehicleRepository {
  list: IVehicle[] = [];

  async save(vehicle: IVehicle) {
    this.list.push(vehicle);
    return Promise.resolve(vehicle);
  }

  async loadAll() {
    return Promise.resolve(this.list);
  }
}
