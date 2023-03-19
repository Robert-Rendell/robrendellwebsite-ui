import React from "react";
import { render } from "@testing-library/react";
import { DateWritten } from "./date-written.component";

describe("DateWrittenComponent", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<DateWritten/>);
    expect(asFragment()).toMatchSnapshot();
  });
});