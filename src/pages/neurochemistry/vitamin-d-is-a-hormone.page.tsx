import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import { QuestionComponent } from "./components/question.component";

export function VitaminDIsAHormonePage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  usePageView(SharedRoutes.Neurochemistry.VitaminD);
  return (
    <div className="standard-page-margins standard-page-styling black-bg">
      <h1>
        <RobBackButton /> {SharedText.Neurochemistry.VitaminD}
      </h1>
      <MusicScrollDownMessage youtubeVideoEmbedId="QAPJBHC9gqU">
        <QuestionComponent hrOff>What is Vitamin D?</QuestionComponent>
        <hr />
        <p>
          The most common form of vitamin D is synthesized in the skin (called
          &quot;activation&quot;) after exposure to rays of ultraviolet B
          radiation (the sun). Vitamin D is thought of as more of a
          multifunctional hormone or{" "}
          <NewTabLink href="https://en.wikipedia.org/wiki/Prohormone">
            prohormone
          </NewTabLink>
          . This is because vitamin D plays contributes to many processes in the
          body.
        </p>
        <p>
          <ul>
            <li>
              In the UK, we only have sufficient exposure to sunlight in the
              months from March to October;
            </li>
            <li>
              In countries closer to the equator, people will get enough vitamin
              D year round;
            </li>
            <li>
              In the UK from October to March - we need to get vitamin D in a
              tablet form as the sunlight isn&apos;t sufficient;
            </li>
            <li>
              Those with darker skin have a reduced ability to synthesise
              vitamin D;
            </li>
            <li>Those who are housebound have little exposure to the sun;</li>
            <li>
              Vitamin D deficiency presents as rickets in children (think bow
              legged) and as osteomalacia in adults (reduced bone density which
              can lead to bone fractures);
            </li>
            <li>A single tablet of vitamin D is 10&micro;mg, which in clinical terms is 400 units. Some people who are vitamin D deficient are prescribed a weekly dose of 20,000 or even 80,000 units;</li>
            <li>
              Vitamin Stored in the body, not water soluble, that is why we don&apos;t
              vitamin D in our urine.
            </li>
          </ul>
        </p>
      </MusicScrollDownMessage>
    </div>
  );
}
