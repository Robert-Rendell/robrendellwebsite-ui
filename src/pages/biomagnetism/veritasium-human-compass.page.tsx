import React from "react";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import { QuestionComponent } from "../neurochemistry/components/question.component";
import "../page.css";

export function VeritasiumHumanCompassPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>
        <RobBackButton /> {SharedText.Biomagnetism.VeritasiumHumanCompass}
      </h1>
      <hr />
      <iframe
        width={width}
        height="315"
        src="https://www.youtube.com/embed/dg3pza4y2ws?autoplay=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <QuestionComponent>Need a recap on the video?</QuestionComponent>
      <p>Here&apos;s the juicy details:</p>
      <ul>
        <li>Experiment at CalTech Biology;</li>
        <li>
          Research paper question:{" "}
          <i>Do humans have any brain response to a magnetic field?</i>;
        </li>
        <li>
          Dogs use magnetic fields at a subconscious and/or instinctual
          level:&nbsp;
          <NewTabLink href="https://www.theguardian.com/news/datablog/2014/jan/08/dogs-defecate-earths-magnetic-field-research-finds">
            for pooing
          </NewTabLink>
          ;
        </li>
        <li>Humans are not exceptions among other mammals;</li>
        <li>
          Robin Baker studies around English countryside, students asked which
          direction they came from; Princeton then repeated the experiment but
          failed to get substantial behavioural results;
        </li>
      </ul>
      <p>CalTech experiment details:</p>
      <ul>
        <li>
          3D Modified Faraday Cage; 4 square coils in all three directions;
          designed to create a magnetic field in any direction
        </li>
        <li>Uniform magnetic field in the centre of the cage;</li>
        <li>
          Experiment done in absolute darkness; No sound, tactile, visual
          stimulation;
        </li>
        <li>Simulating a redirect the earth&apos;s magnetic field;</li>
        <li>
          Researchers are not interested in vestibular sensors that humans may
          use in an internal navigation equation;
        </li>
        <li>
          Using 64 electrodes around the skull to pick up electrical signals in
          the brain.
        </li>
        <li>
          Alpha wave brain signals operate at 10Hz; known to be an indicator of
          relaxing but not sleeping; Alpha wave is suppressed (drops) when brain
          detects something from your senses;
        </li>
      </ul>
      <p>Conclusions from EEG results (electrodes):</p>
      <ul>
        <li>Non-conscious / implicit use of magnetic fields;</li>
        <li>3db alpha power decrease (counter-clockwise);</li>
        <li>Humans vary </li>
        <li>
          Theories: some languages use cardinal directions rather than words
          like &apos;front&apos;, &apos;back&apos;, &apos;left&apos; and
          &apos;right&apos;. These native speakers may have a comparatively
          higher reception to magnetism to other humans of different languages
          that don&apos;t use cardinal directions. These native speakers may
          have built an association with their language and the magnetism senses
          subconsciously.
        </li>
      </ul>
    </div>
  );
}
