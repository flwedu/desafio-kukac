import IVehicle from "./vehicle";

export type CarProps = {
  model: string;
  year: number;
  doors: 2 | 3 | 4;
  brand: string;
};

export default class Car implements IVehicle {
  model: string;
  year: number;
  doors: number;
  brand: string;

  constructor({ model, year, doors, brand }: CarProps) {
    this.model = model;
    this.year = year;
    this.doors = Number(doors);
    this.brand = brand;
  }
}
