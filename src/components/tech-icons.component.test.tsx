import React from "react";
import { render } from "@testing-library/react";
import { TechIconsComponent } from "./tech-icons.component";

describe("TechIconsComponent", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<TechIconsComponent/>);
    expect(asFragment()).toMatchSnapshot();
  });
});