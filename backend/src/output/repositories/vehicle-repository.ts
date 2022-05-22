import IVehicle from "../../application/domain/vehicle/vehicle";

export default interface IVehicleRepository {
  save: (vehicle: IVehicle) => Promise<string>;
  loadAll: () => Promise<IVehicle[]>;
}
