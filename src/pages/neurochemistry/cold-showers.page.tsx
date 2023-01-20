import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import { QuestionComponent } from "./components/question.component";

export function ColdShowersPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  usePageView(SharedRoutes.Neurochemistry.ColdShowers);
  return (
    <div className="standard-page-margins standard-page-styling black-bg">
      <h1>
        <RobBackButton /> {SharedText.Neurochemistry.ColdShowers}
      </h1>
      <MusicScrollDownMessage youtubeVideoEmbedId="ndqyUDPVBt0">
        <p>
          The latest buzz, after Wim Hof was televised on BBC in 2022, is cold
          showers.
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
        Research shows that taking a cold shower in the evening may affect your
        sleep in a bad way. This is because exposure to cold increases your
        cortisol level, which may lead to a poor night&apos;s sleep.
        </p>
        <p>Answer: in the morning.</p>
      </MusicScrollDownMessage>
    </div>
  );
}
