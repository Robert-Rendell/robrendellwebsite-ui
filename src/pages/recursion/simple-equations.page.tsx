import React from "react";
import { SharedText } from "../../common/shared-text";
import { NewTabLink } from "../../components/new-tab-link.component";
import { QuestionComponent } from "../neurochemistry/components/question.component";

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
        <p>
            The rules of Conway&apos;s Game of Life are, strangely, also very simple.
        </p>
        <ol>
          <li>
            Any live cell with fewer than two live neighbours dies, as if by underpopulation.
          </li>
          <li>
            Any live cell with two or three live neighbours lives on to the next generation.
          </li>
          <li>
            Any live cell with more than three live neighbours dies, as if by overpopulation.
          </li>
          <li>
            Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
          </li>
        </ol>
        <p>
          <NewTabLink href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Rules">
            Wikipedia: Conway&apos;s Game of Life
          </NewTabLink>
        </p>
        <QuestionComponent questionText="Is it worth considering, that the equation that governs humans is also very simple?"></QuestionComponent>
      </div>
    </>
  );
}
