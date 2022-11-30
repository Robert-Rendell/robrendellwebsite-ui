import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { QuoteComponent } from "../../components/quote.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import { QuestionComponent } from "./components/question.component";

export function NeurochemistryConclusionPage() {
  usePageView(SharedRoutes.Neurochemistry.PropheciesAndMassAwakeningDiscussion);
  return (
    <div className="standard-page-margins standard-page-styling black-bg">
      <h1>
        <RobBackButton />{" "}
        {SharedText.Neurochemistry.PropheciesAndMassAwakeningDiscussion} ...
      </h1>
      <MusicScrollDownMessage
        youtubeVideoUrl="https://www.youtube.com/embed/h24D87SqaLQ"
        heightPercent={0.5}
      >
        <p>So! ... In conclusion, what I will say is this...</p>
        <p>
          You must learn my second mnemonic for happiness (featured below),
          because this website will not last long on the world wide web;&nbsp;
          <i>&quot;AGENTS&quot; ARE COMING!</i> ;).
        </p>
        <p>You must hide this mnemonic deep inside you, in your brain stem.</p>
        <p>
          Learn it well. Learn it first in your up brain (cerebrum), then in
          your habit brain (cerebellum) and finally in your instinctual brain
          (brain stem).
        </p>
        <ol className="ol-extra-margins">
          <li>M = MC EGOEGSA Mnemonic</li>
          <li>Z = Zones of Regulation</li>
          <li>S = Self-love</li>
          <li>R = Relaxation Response</li>
          <li>P = Positive Mindset</li>
          <li>S = Self actualisation</li>
          <li>L = Learning</li>
          <li>F = Forgiveness</li>
          <li>S = Sharing</li>
          <li>M = Melatonin (creative juices)</li>
          <li>L = Let it go</li>
          <li>A = Advice from The Beatles</li>
        </ol>
        <QuestionComponent>
          <u>M</u>ost <u>Z</u>ion <u>S</u>uper <u>R</u>oads <u>P</u>oint{" "}
          <u>S</u>
          lowly, <u>L</u>ovingly, <u>F</u>orgivingly, &apos;<u>S</u>pecially{" "}
          <u>L</u>ongbenton <u>A</u>ristocracy
        </QuestionComponent>
        <p>
          If you reject these ideas I have articulated in this project, they
          will only consume you.
        </p>
        <p>
          If you use this knowledge to do bad things, I need do nothing. Karma
          will come for you, as it always does.
        </p>
        <hr />
        <p>My final piece is this:</p>
        <QuoteComponent year={2022}>
          Remember to fully breath out, before you breath in.
        </QuoteComponent>
      </MusicScrollDownMessage>
    </div>
  );
}
