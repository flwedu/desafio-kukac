//@ts-nocheck
import {
  BusinessLogicError,
  ErrorMessages,
} from "../../application/errors/business-logic-error";
import { InMemoryVehicleRepository } from "../../output/repositories/test/in-memory-vehicle-repository";
import IVehicleRepository from "../../output/repositories/vehicle-repository";
import { RegisterVehicleController } from "./register-vehicle-controller";

describe("Register vehicle controller class tests", () => {
  let repository: IVehicleRepository;
  let spy: jest.SpyInstance;

  const car = {
    type: "car",
    brand: "Ford",
    doors: "4",
    model: "Fiesta",
    year: "2022",
    passengers: "5",
  };
  const moto = {
    type: "motorcycle",
    brand: "Honda",
    model: "CG",
    year: "2022",
    passengers: "2",
  };

  const res = {
    json: jest.fn(() => res),
    send: jest.fn(() => res),
    status: jest.fn(() => res),
  };
  const next = jest.fn(() => next);

  beforeEach(() => {
    repository = new InMemoryVehicleRepository();
    spy = jest.spyOn(repository, "save");
    jest.clearAllMocks();
  });

  describe("In case of success.. should call json() and status(201)...", () => {
    test.each([car, moto])("For a correct input", async (body) => {
      const req = {
        body,
      };
      const sut = new RegisterVehicleController(repository);

      await sut.handle(req, res, next);

      expect.assertions(3);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(res.json).toHaveBeenCalledWith(
        `${req.body.brand} ${req.body.model} created`
      );
    });
  });

  describe("Should call next() with error", () => {
    test.each([
      {
        ...car,
        passengers: undefined,
      },
      {
        ...moto,
        brand: undefined,
      },
      {
        ...moto,
        passengers: "3",
      },
      {
        ...car,
        doors: "5",
      },
      {
        ...car,
        passengers: "7",
      },
    ])("For missing parameters in body = %s", async (body) => {
      const req = {
        body,
      };
      const sut = new RegisterVehicleController(repository);

      await sut.handle(req, res, next);

      expect.assertions(3);
      expect(res.json).toHaveBeenCalledTimes(0);
      expect(next).toHaveBeenCalledWith(
        new BusinessLogicError(ErrorMessages.PARAMETRO_INVALIDO)
      );
      expect(spy).toHaveBeenCalledTimes(0);
    });
  });
});
