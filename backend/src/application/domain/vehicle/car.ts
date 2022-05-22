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
    this.model = model;
    this.year = year;
    this.brand = brand;
    this.doors = doors;
    this.passengers = passengers;
  }
}
