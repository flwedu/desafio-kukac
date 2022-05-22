import IVehicle from "./vehicle";

export interface MotorcycleProps {
  model: string;
  year: number;
  brand: string;
  passengers: 1 | 2;
}

export default class Motorcycle implements IVehicle {
  model: string;
  year: number;
  brand: string;
  passengers: number;
  doors = 0;
  wheels = 2;

  constructor({ model, year, brand, passengers }: MotorcycleProps) {
    this.model = model;
    this.year = year;
    this.brand = brand;
    this.passengers = passengers;
  }
}
