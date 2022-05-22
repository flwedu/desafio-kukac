import { InMemoryVehicleRepository } from "../../output/repositories/test/in-memory-vehicle-repository";
import RegisterMotorcycleUseCase from "./register-motorcycle";

describe("Register Motorcycle use case tests", () => {
  test("Should register a Motorcycle", async () => {
    const repository = new InMemoryVehicleRepository();
    const sut = new RegisterMotorcycleUseCase(repository);

    const result = await sut.execute({
      brand: "Honda",
      model: "Fireblade",
      year: 2022,
      passengers: 1,
    });

    expect(result).toEqual("Honda Fireblade created");
  });

  test("Should throw an error", async () => {
    const repository = new InMemoryVehicleRepository();
    const sut = new RegisterMotorcycleUseCase(repository);

    try {
      const result = await sut.execute({
        //@ts-expect-error
        passengers: 3,
        brand: "Honda",
        model: "Fireblade",
        year: 2022,
      });
    } catch (error) {
      expect(error).toEqual(expect.any(Error));
    }
  });
});
