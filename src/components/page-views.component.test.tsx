import React from "react";
import { render } from "@testing-library/react";
import { PageViewsComponent } from "./page-views.component";

describe("PageViewsComponent", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<PageViewsComponent />);
    expect(asFragment()).toMatchSnapshot();
  });
});
