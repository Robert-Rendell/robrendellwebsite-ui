import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { QuoteComponent } from "../../components/quote.component";
import { usePageView } from "../../hooks/use-page-view.hook";

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
        <p>
          <NewTabLink href="https://www.urbandictionary.com/define.php?term=tl%3Bdr">TL;DR</NewTabLink>? Too bad. Go back a few steps ya numpty.
        </p>
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
          Remember to fully breathe out, before you breathe in.
        </QuoteComponent>
      </MusicScrollDownMessage>
    </div>
  );
}
