import fs from "fs/promises";
import path from "path";
import IVehicle from "../../application/domain/vehicle/vehicle";
import IVehicleRepository from "./vehicle-repository";

export class JsonVehicleRepository implements IVehicleRepository {
  private dbPath: string;
  private dbFileName: string;

  constructor(dbFileName: string) {
    this.dbFileName = dbFileName;
    this.dbPath = path.resolve(__dirname, "../../../", this.dbFileName);
  }

  private returnError(err: any) {
    return Promise.reject(err);
  }

  async save(vehicle: IVehicle) {
    try {
      const data = await fs.readFile(this.dbPath, "utf8");
      const arr = JSON.parse(data);
      const oldLength = arr.vehicles.length;

      arr.vehicles.push(vehicle);
      if (arr.vehicles.length > oldLength) {
        await fs.writeFile(this.dbPath, JSON.stringify(arr));
        return `${vehicle.brand} ${vehicle.model} created`;
      }
      throw new Error("Error adding vehicle to list");
    } catch (error) {
      return this.returnError(error);
    }
  }

  async loadAll() {
    try {
      const data = await fs.readFile(this.dbPath, "utf8");
      const arr = JSON.parse(data);
      return arr;
    } catch (error) {
      return this.returnError(error);
    }
  }
}
