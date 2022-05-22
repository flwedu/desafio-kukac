import IVehicle from "../../../application/domain/vehicle/vehicle";
import IVehicleRepository from "../vehicle-repository";

export class InMemoryVehicleRepository implements IVehicleRepository {
  list: IVehicle[] = [];

  async save(vehicle: IVehicle) {
    const oldValue = this.list.length;
    this.list.push(vehicle);

    if (oldValue < this.list.length) {
      return Promise.resolve(`${vehicle.brand} ${vehicle.model} created`);
    }
    return Promise.reject("Error creating vehicle");
  }

  async loadAll() {
    return Promise.resolve(this.list);
  }
}
