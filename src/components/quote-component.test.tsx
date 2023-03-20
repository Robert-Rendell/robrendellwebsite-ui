import React from "react";
import { render } from "@testing-library/react";
import { QuoteComponent } from "./quote.component";

describe("QuoteComponent", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<QuoteComponent year={2023}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});