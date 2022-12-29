import React from "react";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import { QuestionComponent } from "../neurochemistry/components/question.component";
import "../page.css";

export function WhatAreVibesPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1><RobBackButton /> {SharedText.Biomagnetism.WhatAreVibes}</h1>
      <MusicScrollDownMessage youtubeVideoEmbedId="sYJXPfMu8cY" start={3}>
        <p>
          People often talk about &apos;vibes&apos; (or &apos;vibrations&apos;)
          in the context of human social interactions.
        </p>
        <p>
          There are a lot of wacky ideas people often have about what this force
          is.
        </p>
        <p>
          Vibes are certainly not forms of biomagnetism and the reason I felt it
          was important to tackle this topic is because I believe humans may use
          magnetism - just not in these particular social situations.
        </p>
        <QuestionComponent>Tell us then, what are vibes?</QuestionComponent>
        <p>
          In my opinion, vibes are the resulting feeling (of {" "}
          <NewTabLink href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3929526/">
            friend or foe
          </NewTabLink>
          ) that we get from a social interpretation equation inside our
          mind. This feeling is calculated automatically in our subconscious and
          instinctual minds (away from our conscious up brain).
        </p>
        <p>
          Let&apos;s start with <u>example A</u>:{" "}
          <i>
            You meet a group of people for the first time and you instantly have
            a feeling about this group of people.
          </i>
        </p>
        <p>
          In studying computer science, students learn that in order to recreate
          the human senses in computers one must break down the sensing process
          into steps.
        </p>
        <p>
          It is through that process that I am able to break down the steps in
          &apos;vibes&apos; into the following:
          <ul className="ol-extra-margins">
            <li>
              <b>hearing</b> - humans communicate using language and word choice
              is important in conveying feelings;
            </li>
            <li>
              <b>seeing</b> - humans communicate using body language and facial
              cues;
            </li>
            <li>
              <b>smelling</b> - human are association machines, we use
              association in many ways in our minds; in this case scents;
            </li>
            <li>
              <b>your current state of mind</b> - constitutes possible bias (or
              skew) in the social interpretation equation.
            </li>
          </ul>
        </p>
        <p>
          All of the above parameters describe inputs to a network in your mind
          that is calculating the{" "}
          <NewTabLink href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3929526/">
            friend or foe
          </NewTabLink>{" "}
          instinctual & subconscious outcome.
        </p>
        <p>
          Notice I have named 3 of the 5 known human senses, that is because the
          other two senses are far too intimate (taste and touch) to provide you
          with information from a distance. Evolution has taught us that by the
          time you are at a distance where taste and touch might be possible, it
          might also be too late for it to matter!
        </p>
      </MusicScrollDownMessage>
    </div>
  );
}
