import React from "react";
import { render } from "@testing-library/react";
import { InfinitySpinnerComponent } from "./infinity-spinner.component";

describe("InfinitySpinnerComponent", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<InfinitySpinnerComponent/>);
    expect(asFragment()).toMatchSnapshot();
  });
});