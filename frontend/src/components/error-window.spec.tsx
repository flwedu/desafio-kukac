import { render, screen } from "@testing-library/react";
import { ErrorContext } from "../hooks/error-provider";
import { ErrorWindow } from "./error-window";

describe("Error window component tests", () => {
  test("Should not render the component if error = null", () => {
    const error = null;
    const setError = jest.fn();
    const logFn = jest.fn();

    const { container } = render(
      <ErrorContext.Provider value={{ error, setError }}>
        <ErrorWindow logFn={logFn} />
      </ErrorContext.Provider>
    );

    expect.assertions(2);
    expect(container.querySelector("#error-window")).toBeFalsy();
    expect(logFn).toHaveBeenCalledTimes(0);
  });

  test("Should render the component", () => {
    const error = new Error("Test Error");
    const setError = jest.fn();
    const logFn = jest.fn();

    const { container } = render(
      <ErrorContext.Provider value={{ error, setError }}>
        <ErrorWindow logFn={logFn} />
      </ErrorContext.Provider>
    );

    const errorWindow = container.querySelector("#error-window");

    expect.assertions(4);
    expect(errorWindow).toBeTruthy();
    expect(screen.getByText("Test Error")).toBeTruthy();
    expect(container).toMatchSnapshot();
    expect(logFn).toHaveBeenCalledTimes(1);
  });
});

export {};
