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

  test.each([
    {
      doors: 5,
      brand: "Ford",
      model: "Fiesta",
      year: 2013,
      passengers: 5,
    },
    {
      brand: "Ford",
      model: "Fiesta",
      year: 2013,
    },
    {
      brand: "Ford",
      model: "Fiesta",
      year: 2013,
      passengers: 5,
    },
    {
      doors: 4,
      brand: "Ford",
      model: "Fiesta",
      year: 2013,
    },
  ])("Should throw an error", async (props) => {
    const repository = new InMemoryVehicleRepository();
    const sut = new RegisterCarUseCase(repository);

    try {
      await sut.execute(props);
    } catch (error) {
      expect(error).toEqual(expect.any(Error));
    }
  });
});
