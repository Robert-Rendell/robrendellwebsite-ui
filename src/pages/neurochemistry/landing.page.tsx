import React, { useState } from "react";
import Badge from "react-bootstrap/Badge";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { ScrollToTopLink } from "../../components/scroll-to-top-link.component";
import { PageViewResponse, usePageView } from "../../hooks/use-page-view.hook";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import "../page.css";

export function NeurochemistryLandingPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  const [pageViews, setPageViews] = useState<PageViewResponse>();
  usePageView(SharedRoutes.Neurochemistry.LandingPage, setPageViews);
  return (
    <div className="standard-page-margins standard-page-styling black-bg-auto black-bg">
      <h1>{SharedText.Neurochemistry.LandingPage}</h1>
      <MusicScrollDownMessage />
      { pageViews && (<>Page Views: <Badge bg="dark"><>{ pageViews.total.N }</></Badge></>)}
      <hr />
      <p>
        Are you sick of terrible, emotionally unaware managers, bosses and
        leaders in your life?
      </p>
      <p>Need some wisdom to deal with depression or anxiety?</p>
      <p>
        You are in the right place... get ready to{" "}
        <NewTabLink href="https://www.imdb.com/title/tt1219289/">
          unlock your mind&apos;s full potential
        </NewTabLink>
        .
      </p>
      <hr />
      <p>
        Warning!! All brain chemicals mentioned in this work are completely self
        produced (inside your body).
      </p>
      <h2>Topics</h2>
      <ol>
        <li>
          <NewTabLink href={SharedRoutes.Neurochemistry.McEdoegsa}>
            {SharedText.Neurochemistry.McEdoegsa}
          </NewTabLink>
        </li>
        <li>
          <NewTabLink href={SharedRoutes.Neurochemistry.ZonesOfRegulation}>
            The {SharedText.Neurochemistry.ZonesOfRegulation}
          </NewTabLink>
        </li>
        <li>
          <NewTabLink href={SharedRoutes.Neurochemistry.SelfLove}>
            {SharedText.Neurochemistry.SelfLove}
          </NewTabLink>
        </li>
        <li>
          <NewTabLink href={SharedRoutes.Neurochemistry.RelaxationResponse}>
            {SharedText.Neurochemistry.RelaxationResponse}
          </NewTabLink>
        </li>
        <li>
          <NewTabLink
            href={SharedRoutes.Neurochemistry.SubconsciousPositiveReactions}
          >
            {SharedText.Neurochemistry.SubconsciousPositiveReactions}
          </NewTabLink>
        </li>
        <li>
          <NewTabLink href={SharedRoutes.Neurochemistry.SelfActualisation}>
            {SharedText.Neurochemistry.SelfActualisation}
          </NewTabLink>
        </li>
        <li>
          <NewTabLink href={SharedRoutes.Neurochemistry.LearningAndGeneticCode}>
            {SharedText.Neurochemistry.LearningAndGeneticCode}
          </NewTabLink>
        </li>
        <li>
          <NewTabLink href={SharedRoutes.Neurochemistry.GuiltAndForgiveness}>
            {SharedText.Neurochemistry.GuiltAndForgiveness}
          </NewTabLink>
        </li>
        <li>
          <NewTabLink href={SharedRoutes.Neurochemistry.AttachmentAndSharing}>
            {SharedText.Neurochemistry.AttachmentAndSharing}
          </NewTabLink>
        </li>
        <li>
          <NewTabLink
            href={SharedRoutes.Neurochemistry.MelatoninIsTheKeyToCreativity}
          >
            {SharedText.Neurochemistry.MelatoninIsTheKeyToCreativity}
          </NewTabLink>
        </li>
        <li>
          <NewTabLink href={SharedRoutes.Neurochemistry.LetItBe}>
            {SharedText.Neurochemistry.LetItBe}
          </NewTabLink>
        </li>
        <li>
          <NewTabLink href={SharedRoutes.Neurochemistry.AdviceFromTheBeatles}>
            {SharedText.Neurochemistry.AdviceFromTheBeatles}
          </NewTabLink>
        </li>
        <li>
          <NewTabLink
            href={
              SharedRoutes.Neurochemistry.PropheciesAndMassAwakeningDiscussion
            }
          >
            [<u>Conclusion</u>]:{" "}
            {SharedText.Neurochemistry.PropheciesAndMassAwakeningDiscussion}
          </NewTabLink>
        </li>
      </ol>
      <p>
        <i>
          <a href="/neurochemistry/references">References</a>
        </i>
      </p>
      <img
        width={width}
        src="https://wallpapers.com/images/hd/human-holos-in-green-matrix-hallway-9y0kbjdasshb9q2a-9y0kbjdasshb9q2a.webp"
      />
      <iframe
        width={width}
        height="315"
        src="https://www.youtube.com/embed/mbcVm8iepQE?start=120&autoplay=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <ScrollToTopLink />
    </div>
  );
}
