import React from "react";
import { render } from "@testing-library/react";
import { PageComponent } from "./page.component";

describe("PageComponent", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<PageComponent route="Rob" title="Rob title"/>);
    expect(asFragment()).toMatchSnapshot();
  });
});