import React from "react";
import { SharedText } from "../../common/shared-text";
import { NewTabLink } from "../../components/new-tab-link.component";

export function SimpleEquationsInfiniteComplexity() {
  return (
    <>
      <div className="standard-page-margins standard-page-styling">
        <h1>{ SharedText.Recursion.SimpleEquations }</h1>
        <hr />
        <p>
          Fractals came from <NewTabLink href="https://en.wikipedia.org/wiki/Benoit_Mandelbrot">Benoit Mandelbrot&apos;s</NewTabLink>
          &nbsp;desire to find a language to describe the fantastic patterns we see in nature.
        </p>
        <hr/>
        <p>
          The <NewTabLink href="https://en.wikipedia.org/wiki/Mandelbrot_set">Mandelbrot set</NewTabLink> is generated from a very simple equation:
        </p>
        <h2>Z<sub>n+1</sub> = Z<sub>n</sub><sup>2</sup> + C</h2>
        <p>
          The <NewTabLink href="https://en.wikipedia.org/wiki/Mandelbrot_set">Bifurcation Diagram of the Logistical Map</NewTabLink> is, also, generated from a very simple equation:
        </p>
        <h2>x<sub>n+1</sub> = rx<sub>n</sub>(1 - x<sub>n</sub>)</h2>
        <hr/>
      </div>
    </>
  );
}
