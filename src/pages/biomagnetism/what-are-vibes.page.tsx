import React from "react";
import Table from "react-bootstrap/Table";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import { QuestionComponent } from "../neurochemistry/components/question.component";
import "../page.css";

export function WhatAreVibesPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  usePageView(SharedRoutes.Biomagnetism.WhatAreVibes);
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>
        <RobBackButton /> {SharedText.Biomagnetism.WhatAreVibes}
      </h1>
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
          magnetism - just not in social situations.
        </p>
        <QuestionComponent>Tell us then, what are vibes?</QuestionComponent>
        <p>
          In my opinion, vibes are the resulting feeling (of{" "}
          <NewTabLink href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3929526/">
            friend or foe
          </NewTabLink>
          ) that we get from a <u>social interpretation equation</u> inside our
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
              <b>seeing</b> - humans communicate using body language and facial
              cues; light always travels the fastest and provides the quickest
              result;
            </li>
            <li>
              <b>hearing</b> - humans communicate using language and word choice
              is important in conveying feelings;
            </li>
            <li>
              <b>smelling</b> - human are association machines, we use
              association in many ways in our minds; in this case scents;
            </li>
            <li>
              <b>your current state of mind</b> - constitutes possible bias (or
              skew) in the <u>social interpretation equation</u>.
            </li>
          </ul>
        </p>
        <p>
          All of the above parameters describe inputs to a network in your mind
          that is calculating the{" "}
          <NewTabLink href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3929526/">
            friend or foe
          </NewTabLink>{" "}
          subconscious & instinctual outcome.
        </p>
        <p>
          Notice I have named 3 of the 5 known human senses, that is because the
          other two senses are far too intimate (taste and touch) to provide you
          with information from a distance. Evolution has taught us that by the
          time you are at a distance where taste and touch might be possible, it
          might also be too late for it to matter!
        </p>
        <QuestionComponent>
          How does this all work in the above &quot;example A&quot;?
        </QuestionComponent>
        <p>
          <u>Example A:</u>
          <br />
          <i>
            You meet a group of people for the first time and you instantly have
            a feeling about this group of people.
          </i>
        </p>
        <p>
          <i>
            You feel that there is a positive vibe but you can&apos;t put your
            finger on the reasons why.
          </i>
        </p>
        <p>
          Let us break down the steps again and analyse what our hidden minds
          (subconscious & instinctual minds) have calculated:
        </p>
        <p>
          <ul className="ol-extra-margins">
            <li>seeing;</li>
            <li>hearing;</li>
            <li>smelling;</li>
            <li>your current state of mind.</li>
          </ul>
        </p>
        <p>
          Using these steps we can create a table of facts and interpretation
          and that removes the need to list state of mind.
        </p>
        <p>
          Let&apos;s do this assuming a <u>positive</u> state of mind (a.k.a
          mindset):
        </p>
        <div>
          <Table variant="dark" hover>
            <thead>
              <tr>
                <th></th>
                <th>Seeing</th>
                <th>Hearing</th>
                <th>Smelling</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>Fact</b>
                </td>
                <td>The group are laughing and smiling</td>
                <td>
                  The group are talking using ambiguous phrases/words that could
                  be misinterpreted (eg. glass half full <i>or</i> glass half
                  empty)
                </td>
                <td>
                  The group smell of smoke because they are smoking cigarettes
                  together
                </td>
              </tr>
              <tr>
                <td>
                  <b>Interpretation</b>
                </td>
                <td>&quot;I like these people, they are happy&quot;</td>
                <td>&quot;glass half full&quot;</td>
                <td>&quot;My favourite grandad used to smoke&quot;</td>
              </tr>
              <tr>
                <td colSpan={1}>
                  <b>Friend or Foe?</b>
                </td>
                <td colSpan={3}>
                  Friend - based on vibes and <u>positive</u> mindset :)
                </td>
              </tr>
            </tbody>
          </Table>
        </div>

        <p>
          Now... let&apos;s do the same thing again assuming a <u>negative</u>{" "}
          state of mind (a.k.a mindset):
        </p>
        <div>
          <Table variant="dark" hover>
            <thead>
              <tr>
                <th></th>
                <th>Seeing</th>
                <th>Hearing</th>
                <th>Smelling</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>Fact</b>
                </td>
                <td>The group are laughing and smiling</td>
                <td>
                  The group are talking using ambiguous phrases/words that could
                  be misinterpreted (eg. glass half full <i>or</i> glass half
                  empty)
                </td>
                <td>
                  The group smell of smoke because they are smoking cigarettes
                  together
                </td>
              </tr>
              <tr>
                <td>
                  <b>Interpretation</b>
                </td>
                <td>
                  &quot;These people are laughing at me and I do not know
                  them&quot;
                </td>
                <td>&quot;glass half empty&quot;</td>
                <td>&quot;I hate the smell of smoke&quot;</td>
              </tr>
              <tr>
                <td colSpan={1}>
                  <b>Friend or Foe?</b>
                </td>
                <td colSpan={3}>
                  Foe - based on vibes and <u>negative</u> mindset :(
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </MusicScrollDownMessage>
    </div>
  );
}
