//@ts-nocheck
import {
  BusinessLogicError,
  ErrorMessages,
} from "../../application/errors/business-logic-error";
import { MoneyController } from "./money-controller";

describe("Money controller class tests", () => {
  const res = {
    json: jest.fn(() => res),
    send: jest.fn(() => res),
    status: jest.fn(() => res),
  };
  const next = jest.fn(() => next);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should call json() with results and status() with 200 for success", () => {
    const req = {
      body: {
        money: "150",
        price: "100",
      },
    };

    const sut = new MoneyController();
    sut.handle(req, res, next);

    expect.assertions(3);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      price: 100,
      returned: 50,
      m100: 0,
      m10: 5,
      m1: 0,
    });
    expect(next).toHaveBeenCalledTimes(0);
  });

  test.each([
    {
      money: "100",
      price: "150",
    },
    {
      money: "",
      price: "150",
    },
    {
      money: "250",
      price: "a",
    },
  ])("should call next() with error", (body) => {
    const req = {
      body,
    };

    const sut = new MoneyController();
    sut.handle(req, res, next);

    expect.assertions(2);
    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith(
      new BusinessLogicError(ErrorMessages.VALOR_INVALIDO)
    );
  });
});
