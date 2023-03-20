import React from "react";
import { render } from "@testing-library/react";
import { FullScreenToggleComponent } from "./full-screen-toggle.component";

describe("FullScreenToggleComponent", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<FullScreenToggleComponent path={"hello"}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});