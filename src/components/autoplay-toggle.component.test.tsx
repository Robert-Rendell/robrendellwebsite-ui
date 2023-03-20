import React from "react";
import { render } from "@testing-library/react";
import { AutoplayToggleComponent } from "./autoplay-toggle.component";

describe("AutoplayToggleComponent", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<AutoplayToggleComponent/>);
    expect(asFragment()).toMatchSnapshot();
  });
});