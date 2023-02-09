import React from "react";
import { Table } from "react-bootstrap";
import { ArrowUp, ArrowDown } from "react-bootstrap-icons";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import { QuestionComponent } from "./components/question.component";

export function ImaginationAndVisualisationPage() {
  usePageView(SharedRoutes.Neurochemistry.ImaginationAndVisualisation);
  return (
    <div className="standard-page-margins standard-page-styling black-bg">
      <h1>
        <RobBackButton />{" "}
        {SharedText.Neurochemistry.ImaginationAndVisualisation}
      </h1>
      <MusicScrollDownMessage youtubeVideoEmbedId="88_KyOrLLsg">
        <p>
          There are a multitude of ways to control your neurochemistry, as
          mentioned on my{" "}
          <NewTabLink href={SharedRoutes.Neurochemistry.McEdoegsa}>
            mnemonic for happiness
          </NewTabLink>{" "}
          page.
        </p>
        <p>
          However, most of the techniques require that you aren&apos;t sat in
          one place. I believe it is possible to control your neurochemistry
          through pure thought (imagination) and visualisation.
        </p>
        <QuestionComponent>
          What thoughts control neurochemistry?
        </QuestionComponent>
        <p>
          As mentioned on my&nbsp;
          <NewTabLink
            href={SharedRoutes.Neurochemistry.SubconsciousPositiveReactions}
          >
            subconscious positive reactions
          </NewTabLink>{" "}
          page, there are ways for a emotionally self-regulating human being to
          control their neurochemistry through the power of <u>thought</u>{" "}
          alone.
        </p>
        <p>
          Let&apos;s go into more detail into some of the hormones /
          neurotransmitters involved:
        </p>
        <Table variant="dark">
          <thead>
            <tr>
              <th>Hormone(s)</th>
              <th>Thoughts</th>
              <th>Effect</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Serotonin
                <ArrowUp />
              </td>
              <td>
                reacting positively to events with thought (eg. positive
                perspective when you are faced with social ambiguity).
              </td>
              <td>Feel happier and more confident.</td>
            </tr>
            <tr>
              <td>
                Serotonin
                <ArrowUp />
              </td>
              <td>
                deeply imagining the hot sun on your face, on a sunny day in
                Spain;
              </td>
              <td>Feel happier.</td>
            </tr>
            <tr>
              <td>
                Oxytocin
                <ArrowUp />
                Serotonin
                <ArrowUp />
              </td>
              <td>
                deeply imagining your favourite things (eg. cats/dogs/pets)
              </td>
              <td>Feel comforted and happier!</td>
            </tr>
            <tr>
              <td>
                Adrenaline
                <ArrowUp />, Cortisol
                <ArrowUp />
              </td>
              <td>Remember, deeply, a time you were very, very scared.</td>
              <td>Faster heart beat, irrationality</td>
            </tr>
            <tr>
              <td>
                Serotonin
                <ArrowUp />
              </td>
              <td>
                Write down your achievements and think about each one deeply.
              </td>
              <td>Feel more confident with yourself</td>
            </tr>
            <tr>
              <td>
                Gamma-Aminobutyric Acid (GABA)
                <ArrowUp />, Adrenaline
                <ArrowDown />, Cortisol
                <ArrowDown />
              </td>
              <td>
                Concentration meditation: sit quietly and focus only on your
                breathing.
              </td>
              <td>Relaxation</td>
            </tr>
          </tbody>
        </Table>
        <QuestionComponent>What about visualisation?</QuestionComponent>
        <p>
          I am ignorant to athletic visualisation, as I have never competed
          professionally, but I am using empathy to imagine what this process
          might be doing to the athlete&apos;s neurochemistry.
        </p>
        <p>
          Athletes often talk about visualisation and how they use this
          technique to prepare, mentally, for challenges ahead.
        </p>
        <p>
          In my opinion, this is when athlete closes their eyes (or soft gaze)
          and use their mental projections to paint a picture of the future.
        </p>
        <p>
          When the athlete is thinking deeply and in detail about all the steps
          they need to execute to get to their goal, they are warming up the
          neural networks needed to stimulate the required muscles.
        </p>
        <p>
          This mental preparation, I believe, actually changes their
          neurochemistry in line with that visualised future.
        </p>
        <p>
          Serotonin would definitely be affected, as the preparation would give
          confidence to the athlete replaying the steps required.
        </p>
        <p>
          Adrenaline might be affected as the athlete imagines the starting gun
          going off and again when they approach a top speed of sprint.
        </p>
      </MusicScrollDownMessage>
    </div>
  );
}
