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
  doors = 0;
  brand: string;
  wheels = 2;
  passengers: number;

  constructor({ model, year, brand, passengers }: MotorcycleProps) {
    this.model = model;
    this.year = year;
    this.brand = brand;
    this.passengers = Number(passengers);
  }
}
