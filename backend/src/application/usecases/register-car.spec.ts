import { InMemoryVehicleRepository } from "../../output/repositories/test/in-memory-vehicle-repository";
import RegisterCarUseCase from "./register-car";

describe("Register Car use case tests", () => {
  test("Should register a car", async () => {
    const repository = new InMemoryVehicleRepository();
    const sut = new RegisterCarUseCase(repository);

    const result = await sut.execute({
      doors: 4,
      brand: "Ford",
      model: "Fiesta",
      year: 2013,
      passengers: 5,
    });

    expect(result).toEqual(`Ford Fiesta created`);
  });

  test("Should throw an error", async () => {
    const repository = new InMemoryVehicleRepository();
    const sut = new RegisterCarUseCase(repository);

    try {
      const result = await sut.execute({
        //@ts-expect-error
        doors: 5,
        brand: "Ford",
        model: "Fiesta",
        year: 2013,
        passengers: 5,
      });
    } catch (error) {
      expect(error).toEqual(expect.any(Error));
    }
  });
});
