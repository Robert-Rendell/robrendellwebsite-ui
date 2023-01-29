import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import { QuestionComponent } from "./components/question.component";

export function ColdShowersPage() {
  usePageView(SharedRoutes.Neurochemistry.ColdShowers);
  return (
    <div className="standard-page-margins standard-page-styling black-bg">
      <h1>
        <RobBackButton /> {SharedText.Neurochemistry.ColdShowers}
      </h1>
      <MusicScrollDownMessage youtubeVideoEmbedId="ndqyUDPVBt0">
        <p>
          The latest buzz, after{" "}
          <NewTabLink href="https://www.bbc.co.uk/programmes/p0bwtn6q">
            Wim Hof was televised
          </NewTabLink>{" "}
          on BBC in 2022, is cold showers.
        </p>
        <QuestionComponent>
          How do cold showers impact our neurochemistry?
        </QuestionComponent>
        <p>
          Cold showers have been proven to positively stimulate blood
          circulation and lower blood pressure. Anxiety causes increased blood
          pressure. So, with a cold shower, you may help bring it down. The cold
          shock also releases the stress hormones adrenaline and cortisol.
        </p>
        <QuestionComponent>
          When is the best time to have a cold shower?
        </QuestionComponent>
        <p>
          Research shows that taking a cold shower in the evening may affect
          your sleep in a bad way. This is because exposure to cold increases
          your cortisol level, which may lead to a poor night of sleep.
        </p>
        <p>Answer: in the morning.</p>
      </MusicScrollDownMessage>
    </div>
  );
}
