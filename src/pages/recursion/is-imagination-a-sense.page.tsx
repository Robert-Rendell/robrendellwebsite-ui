import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import { QuestionComponent } from "../neurochemistry/components/question.component";

export function IsImaginationASensePage() {
  usePageView(SharedRoutes.Recursion.IsImaginationASense);
  return (
    <>
      <div
        id="dimensions"
        className="standard-page-margins standard-page-styling"
      >
        <h1>
          <RobBackButton /> {SharedText.Recursion.IsImaginationASense}
        </h1>
        <MusicScrollDownMessage youtubeVideoEmbedId="_2vRbNehGB0">
          <p>
            So... if you&apos;ve read my previous topic on{" "}
            <NewTabLink href="./dimensions">dimensions</NewTabLink> then you are
            in a good position to understand my wacky beliefs on the following
            topic.
          </p>
          <QuestionComponent>
            If all of our senses work in 2D... how do you see in 3D?
          </QuestionComponent>
          <p>
            So we&apos;ve established that our senses provide us with 2D
            information about our 3D environment.
          </p>
          <p>I believe that our imagination is extremely powerful.</p>
          <p>
            The abstract thinking muscle (part of imagination) is a tool that we
            regularly use for problem solving. Imagination is a key part of
            geometry too, especially imagining shapes like the tesseract.
          </p>
          <QuestionComponent>
            Could our imagination be a connection to a 4D container?
          </QuestionComponent>
          <p>
            Well... yes it could be but, only if we truly spend time to{" "}
            <u>imagine</u> such things.
          </p>
          <p>
            In order to imagine a dimension you cannot hear, smell, see, touch
            or taste; what else apart from our imagination do we have as tools
            to <i>&quot;see&quot;</i> that dimension?
          </p>
          <hr />
          <p>
            This is where I&apos;d like to link this topic back to recursion.
          </p>
          <p>
            As said before on my{" "}
            <NewTabLink href="./dimensions">dimensions</NewTabLink> topic, I
            believe that a 4D container of our fractal universe could contain
            infinitely many versions of infinite possibilities of that 3D
            universe.
          </p>
          <p>With that in mind, I ask this question:</p>
          <QuestionComponent>
            If we can imagine and articulate with words an imagined 4D, does
            that mean imagination is our 6th sense?
          </QuestionComponent>
          <p>
            It is the case with a lot of things in the modern world that despite
            not being able to use your senses to detect a truth, you have to
            accept that truth is real.
          </p>
          <p>
            Let me give you some examples of where we accept certain truths
            &quot;blindly&quot;:
            <ul>
              <li>
                <i>I believe the shape of earth is an oblate spheroid</i>&nbsp;:
                but I have never been to space and seen it for myself;
              </li>
              <li>
                <i>
                  I believe I (may) have a lump of muscle in my head called a
                  brain
                </i>
                &nbsp;: but I have never seen my brains;
              </li>
              <li>
                <i>
                  When I get on a plane, I believe when I get off I will be in a
                  different place
                </i>
                &nbsp;: despite not being able to have an outside perspective of
                the plane travelling between A and B;
              </li>
              <li>
                <i>
                  I believe that the water I drink from the tap does not contain
                  any other substances apart from fluoride and H<sup>2</sup>O
                </i>
                &nbsp;: and I don&apos;t look into it any further because I
                trust that belief... and irrational paranoia is a terrible
                alternative!
              </li>
            </ul>
            <hr />
            <p>
              So in order to view our imagination as a 6th sense, you do need to
              be able to acquire a decent level of abstract thinking and an
              understanding of geometry.
            </p>
          </p>
        </MusicScrollDownMessage>
      </div>
    </>
  );
}
