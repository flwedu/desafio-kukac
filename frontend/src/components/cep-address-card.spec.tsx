import { render } from "@testing-library/react";
import CepAddressCard from "./cep-address-card";
describe("Cep Address Card components tests", () => {
  test("Should not render the component if address.cep is invalid", () => {
    const data = {};
    const { container } = render(<CepAddressCard data={data} />);

    expect.assertions(2);
    expect(container.querySelector("#cep-card")).toBeFalsy();
    expect(container).toMatchSnapshot();
  });

  test("Should render the component properly", () => {
    const data = {
      cep: "44900-000",
      localidade: "Irecê",
      uf: "BA",
    };
    const { container } = render(<CepAddressCard data={data} />);

    expect.assertions(2);
    expect(container.querySelector("#cep-card")).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});

export {};
