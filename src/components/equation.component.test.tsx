import React from "react";
import { render } from "@testing-library/react";
import { Equation } from "./equation.component";

describe("EquationComponent", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<Equation/>);
    expect(asFragment()).toMatchSnapshot();
  });
});