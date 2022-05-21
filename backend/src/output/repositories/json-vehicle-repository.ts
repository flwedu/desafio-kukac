import IVehicle from "../../application/domain/vehicle/vehicle";
import IVehicleRepository from "./vehicle-repository";

export class JsonVehicleRepository implements IVehicleRepository {
  constructor(private readonly serverUrl: string) {}

  async save(vehicle: IVehicle) {
    const response = await fetch(this.serverUrl, {
      method: "POST",
      body: JSON.stringify(vehicle),
    });
    if (response.status === 200) {
      return vehicle;
    }
    return Promise.reject("Error saving vehicle");
  }

  async loadAll() {
    const response = await fetch(this.serverUrl, { method: "GET" });
    if (response.status === 200) {
      return await response.json();
    }
    return Promise.reject("Error loading vehicles");
  }
}
