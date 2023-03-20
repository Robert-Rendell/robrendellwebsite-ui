import React from "react";
import { render } from "@testing-library/react";
import { RobBackButton } from "./back-button.component";

describe("RobBackButton", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<RobBackButton />);
    expect(asFragment()).toMatchSnapshot();
  });
});
