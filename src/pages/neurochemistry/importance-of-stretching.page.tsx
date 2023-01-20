import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import { QuestionComponent } from "./components/question.component";

export function ImportanceOfStretchingPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  usePageView(SharedRoutes.Neurochemistry.ImportanceOfStretching);
  return (
    <div className="standard-page-margins standard-page-styling black-bg">
      <h1>
        <RobBackButton /> {SharedText.Neurochemistry.ImportanceOfStretching}
      </h1>
      <MusicScrollDownMessage youtubeVideoEmbedId="tHlYLt7Vt2c">
        <QuestionComponent>Why do we need to stretch?</QuestionComponent>
        <p>
          We were not always <NewTabLink href="bipeds">bipeds</NewTabLink>. A
          long time ago, we used to scramble around on{" "}
          <NewTabLink href="https://en.wikipedia.org/wiki/Animal_Farm">
            four legs
          </NewTabLink>
          . Back then our backs and heads were horizontal, parallel with the
          ground and we didn&apos;t need to pump blood upwards, against gravity,
          to our brains (the control centre).
        </p>
        <p>
          Blood carries the required nutrients to grow cells and provide
          building blocks for new neurons and learning networks.
        </p>
        <p>
          I believe we evolved to standing on two feet, primarily, so we had two
          limbs free to manipulate tools. I also agree with other theories which
          suggest advantages of having a greater field of vision since our heads
          are higher from the ground on two feet. Imagine a meerkat on alert for
          predators!
        </p>
        <hr />
        <p>
          In Islam, people use prayer mats at the call to prayer and lower their
          heads to the ground. Muslims do this multiple times on a daily basis,
          meaning in their waking life, they are pumping fresh blood to their
          heads.
        </p>
        <p>
          In Hinduism, yoga (stretching and meditation) is an essential
          ingredient in paying respects to the trimurti.
        </p>
      </MusicScrollDownMessage>
    </div>
  );
}
