import checkNullOrEmpty from "../../../util/check-null";
import {
  BusinessLogicError,
  ErrorMessages,
} from "../../errors/business-logic-error";
import IVehicle from "./vehicle";

export type MotorcycleProps = {
  model: string;
  year: number;
  brand: string;
  passengers: 1 | 2;
};

export default class Motorcycle implements IVehicle {
  model: string;
  year: number;
  brand: string;
  passengers: number;
  doors = 0;
  wheels = 2;

  constructor({ model, year, brand, passengers }: MotorcycleProps) {
    if (checkNullOrEmpty([model, year, brand, passengers]) || passengers > 2) {
      throw new BusinessLogicError(ErrorMessages.PARAMETRO_INVALIDO);
    }

    this.model = model;
    this.year = year;
    this.brand = brand;
    this.passengers = passengers;
  }
}
