import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { DateWritten } from "../../components/date-written.component";
import { Equation } from "../../components/equation.component";
import { MusicScrollDownMesssage } from "../../components/music-scroll-down.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { ScrollToTopLink } from "../../components/scroll-to-top-link.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import { QuestionComponent } from "../neurochemistry/components/question.component";

export function SimpleEquationsInfiniteComplexity() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 20;
  usePageView(SharedRoutes.Recursion.SimpleEquations);
  return (
    <>
      <div
        id="simple-equations"
        className="standard-page-margins standard-page-styling"
      >
        <h1>{SharedText.Recursion.SimpleEquations}</h1>
        <DateWritten>26.11.22</DateWritten>
        <span>
          &nbsp;
          <i>
            Part of <a href="/recursion">Recursion</a> project
          </i>
          .
        </span>
        <MusicScrollDownMesssage/>
        <hr />
        <p>
          As far as I understand, the idea of Fractals came from{" "}
          <NewTabLink href="https://en.wikipedia.org/wiki/Benoit_Mandelbrot">
            Benoit Mandelbrot&apos;s
          </NewTabLink>
          &nbsp;desire to find a language to describe the fantastic patterns we
          see in nature.
        </p>
        <hr />
        <p>
          The{" "}
          <NewTabLink href="https://en.wikipedia.org/wiki/Mandelbrot_set">
            Mandelbrot set
          </NewTabLink>{" "}
          fractal is generated from a very simple equation:
        </p>
        <Equation>
          Z<sub>n+1</sub> = Z<sub>n</sub>
          <sup>2</sup> + C
        </Equation>
        <p>
          The{" "}
          <NewTabLink href="/recursion/bifurcation-logistical-map">
            Bifurcation Diagram of the Logistical Map
          </NewTabLink>{" "}
          fractal is, also, generated from a very simple equation:
        </p>
        <Equation>
          x<sub>n+1</sub> = rx<sub>n</sub>(1 - x<sub>n</sub>)
        </Equation>
        <hr />
        <p>
          The rules of{" "}
          <NewTabLink href="/recursion#game-of-life">
            Conway&apos;s Game of Life
          </NewTabLink>{" "}
          (2d environment) are, strangely, also very simple - despite the
          incredible diversity of creatures (patterns) that emerge through
          it&apos;s infinite iteration. Here are the rules:
        </p>
        <ol>
          <li>
            Any live cell with fewer than two live neighbours dies, as if by{" "}
            <u>underpopulation</u>.
          </li>
          <li>
            Any live cell with two or three live neighbours lives on to the{" "}
            <u>next generation</u>.
          </li>
          <li>
            Any live cell with more than three live neighbours dies, as if by{" "}
            <u>overpopulation</u>.
          </li>
          <li>
            Any dead cell with exactly three live neighbours becomes a live
            cell, as if by <u>reproduction</u>.
          </li>
        </ol>
        <p>
          <NewTabLink href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Rules">
            Wikipedia: Conway&apos;s Game of Life
          </NewTabLink>
        </p>
        <QuestionComponent questionText="Is it worth considering, that the equation that governs our universe is also very simple?"></QuestionComponent>
        <p>
          First of all, you need to understand that the way creatures (patterns)
          emerge from Conway&apos;s Game of Life is far too similar to the way
          in which, said, biological &quot;creatures&quot; (patterns) emerge in
          our universe.
        </p>
        <p>
          Another interesting point on Conway&apos;s Game of Life is that in
          some implementations, the game reaches an equilibrium where the 2d
          world stands still in harmony. This, of course, may be deliberate in
          some implementations.
        </p>
        <QuestionComponent questionText="However, is it worth contemplating that our Earth reached a point of equilibrium until humans began to overpopulate Earth?" />
        <p>
          Ok everyone put on your space hats; it&apos;s about to get wacky in
          here.
        </p>
        <p>
          The human mind is still a mystery to us, even though we all have one
          (at least most of us do hehe). We believe that we are these
          fantastically intelligent beings because we are constantly comparing
          ourselves to other creatures of the world.
        </p>
        <p>
          We should, in my opinion, stop for a second to consider that all the
          life we see on Earth is beautiful, rich in variety and deeply
          intricate. However... I want you to imagine this idea:
        </p>
        <QuestionComponent>
          Is human consciousness an illusion?
        </QuestionComponent>
        <p>
          The reality, I believe, is we have a hard time imagining infinite or
          deeply intricate recursive patterns and that prevents us from
          considering that our own <i>&quot;consciousness&quot;</i> (self
          awareness) is a result of an elaborate electrical, physical and
          chemical storm.
        </p>
        <p>
          If we are indeed self referencing patterns (through the unimaginable
          combination of cells in the shape of our DNA), then you could say that
          what we are experiencing in life is the result of a simple equation on
          an infinite scale and infinite complexity.
        </p>
        <p>
          In conclusion, humans should stop being elitist in the, so called,
          &quot;hierarchy&quot; of Earthly creatures.
        </p>
        <p className="centred">
          &#62; GO VEGGIE; IT IS TASTY AND COLOURFUL &#60;
        </p>
        <p>
          If we don&apos;t take care of the world we evolved with, then we are
          doomed.
        </p>
        <p>
          Luckily,{" "}
          <NewTabLink href="https://en.wikipedia.org/wiki/Noah%27s_Ark">
            Elon Musk is probably building an Ark
          </NewTabLink>
          &nbsp;to save all the biodiversity in the world. And, in the case
          where the world falls to bits (
          <i>
            because we unnaturally unlocked too many minds and broke the rules
            LOL
          </i>
          )... then let us hope that he chose to save the octopuses, flowers,
          spiders and bees!
        </p>
        <iframe
          width={width}
          height="315"
          src="https://www.youtube.com/embed/UDVtMYqUAyw?autoplay=1&start=261"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <ScrollToTopLink/>
      </div>
    </>
  );
}
