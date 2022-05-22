import { render, screen } from "@testing-library/react";
import { ErrorContext } from "../hooks/error-provider";
import { ErrorWindow } from "./error-window";

describe("Error window component tests", () => {
  test("Should not render the component if error = null", () => {
    const error = null;
    const setError = jest.fn();

    const { container } = render(
      <ErrorContext.Provider value={{ error, setError }}>
        <ErrorWindow />
      </ErrorContext.Provider>
    );

    expect.assertions(1);
    expect(container.querySelector("#error-window")).toBeFalsy();
  });

  test("Should render the component", () => {
    const error = new Error("Test Error");
    const setError = jest.fn();

    const { container } = render(
      <ErrorContext.Provider value={{ error, setError }}>
        <ErrorWindow />
      </ErrorContext.Provider>
    );

    const errorWindow = container.querySelector("#error-window");

    expect.assertions(3);
    expect(errorWindow).toBeTruthy();
    expect(screen.getByText("Test Error")).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});

export {};
