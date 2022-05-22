import checkNullOrEmpty from "../../../util/check-null";
import {
  BusinessLogicError,
  ErrorMessages,
} from "../../errors/business-logic-error";
import IVehicle from "./vehicle";

export interface CarProps {
  model: string;
  year: number;
  brand: string;
  doors: 2 | 3 | 4;
  passengers: 1 | 2 | 3 | 4 | 5;
}

export default class Car implements IVehicle {
  model: string;
  year: number;
  doors: number;
  brand: string;
  wheels: number = 4;
  passengers: number;

  constructor({ model, year, doors, brand, passengers }: CarProps) {
    if (
      checkNullOrEmpty([model, year, doors, brand, passengers]) ||
      passengers > 5 ||
      doors > 4
    ) {
      throw new BusinessLogicError(ErrorMessages.PARAMETRO_INVALIDO);
    }

    this.model = model;
    this.year = year;
    this.brand = brand;
    this.doors = doors;
    this.passengers = passengers;
  }
}
