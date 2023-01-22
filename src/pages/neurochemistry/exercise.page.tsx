import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import { QuestionComponent } from "./components/question.component";

export function ExercisePage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  usePageView(SharedRoutes.Neurochemistry.Exercise);
  return (
    <div className="standard-page-margins standard-page-styling black-bg">
      <h1>
        <RobBackButton /> {SharedText.Neurochemistry.Exercise}
      </h1>
      <MusicScrollDownMessage youtubeVideoEmbedId="8RkCi6yPjII">
        <p>
          Exercising is the single best course of action to improve your quality
          of life.
        </p>
        <p>
          Regular, sustained exercise releases neurotransmitter molecules called
          endocannabinoids which is the main brain hormone in{" "}
          <NewTabLink href="https://www.psychologytoday.com/gb/blog/the-athletes-way/202102/runner-s-high-depends-endocannabinoids-not-endorphins">
            &quot;Runner&apos;s High&quot;.
          </NewTabLink>{" "}
        </p>
        <QuestionComponent>
          What does a release of endocannabinoids feel like?
        </QuestionComponent>
        <p>
          From my experience of exercise (walking, jogging, sprinting and long
          distance cycle touring) I can tell you how to recognise
          endocannabinoids.
        </p>
        <p>
          Directly after sprinting a 5km run, I experience the adrenaline and
          also a buzz in my head for at least 15-20 mins.
        </p>
        <p>
          If I continue a regular pattern of at least 1-3 runs a week, I feel an
          inner calm change the shade of all my experiences throughout the week.
        </p>
        <p>
          Endocannabinoids are produced in the brain and these molecules
          suppress the firing of neurons. This manifests a feeling of relaxation
          and will almost certainly have an positive impact on your emotional
          reactions to events throughout the week.
        </p>
        <QuestionComponent>Is walking exercise?</QuestionComponent>
        <p>
          Yes walking is exercise. You can invoke the release of
          endocannabinoids through walking.
        </p>
        <QuestionComponent>
          What do Serotonin and Dopamine have to do with exercise?
        </QuestionComponent>
        <p>
          You get a double hit of serotonin and dopamine every time you push
          yourself to put your shoes on and get out for some exercise. &quot;I
          did it!&quot;
        </p>
        <p>
          Christopher Bergland always says: think about how you feel before the
          exercise and then how you feel afterwards.
        </p>
        <p>
          The hardest part is putting on your shoes to get out, once you are out
          the door, there&apos;s no turning back!
        </p>
        <QuestionComponent>
          What role do Endorphins play in exercise?
        </QuestionComponent>
        <p>
          Endorphins are definitely the most widely known neurotransmitter, but
          also most widely misunderstood.
        </p>
        <p>
          Endorphins are natural painkillers that are scientifically associated
          with high beats per minute of the heart.
        </p>
        <p>This means high intensity training.</p>
        <p>It also means that, yes, sweaty sex is on that list too.</p>
      </MusicScrollDownMessage>
    </div>
  );
}
