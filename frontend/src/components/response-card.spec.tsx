import { render } from "@testing-library/react";
import ResponseCard from "./response-card";
describe("Response Card component tests", () => {
  test("Should not render the component", () => {
    const { container } = render(<ResponseCard results="" />);

    expect.assertions(1);
    expect(container).toMatchInlineSnapshot("<div />");
  });

  test("Should render the component properly", () => {
    const { container } = render(<ResponseCard results="Test Result" />);

    expect.assertions(1);
    expect(container).toMatchSnapshot();
  });
});

export {};
