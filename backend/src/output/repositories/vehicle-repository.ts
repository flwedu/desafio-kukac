import IVehicle from "../../application/domain/vehicle/vehicle";

export default interface IVehicleRepository {
  save: (vehicle: IVehicle) => Promise<IVehicle>;
  loadAll: () => Promise<IVehicle[]>;
}
