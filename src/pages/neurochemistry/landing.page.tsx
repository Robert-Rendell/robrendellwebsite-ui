import React, { useState } from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { DateWritten } from "../../components/date-written.component";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { PageViewsComponent } from "../../components/page-views.component";
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
      <DateWritten dateStarted>December 2022</DateWritten>
      <MusicScrollDownMessage youtubeVideoEmbedId="mbcVm8iepQE" start={120}>
        <PageViewsComponent pageViews={pageViews} />
        <p>
          Warning!! All brain chemicals mentioned in this work are completely
          self produced (inside your body).
        </p>
        <h2>Topics</h2>
        <ol>
          <li>
            <NewTabLink href={SharedRoutes.Neurochemistry.McEdoegsa} noNewTab>
              {SharedText.Neurochemistry.McEdoegsa}
            </NewTabLink>
          </li>
          <li>
            <NewTabLink
              href={SharedRoutes.Neurochemistry.ZonesOfRegulation}
              noNewTab
            >
              The {SharedText.Neurochemistry.ZonesOfRegulation}
            </NewTabLink>
          </li>
          <li>
            <NewTabLink href={SharedRoutes.Neurochemistry.SelfLove} noNewTab>
              {SharedText.Neurochemistry.SelfLove}
            </NewTabLink>
          </li>
          <li>
            {/* <NewTabLink
              href={SharedRoutes.Neurochemistry.Exercise}
              noNewTab
            >
              {SharedText.Neurochemistry.Exercise}
            </NewTabLink> */}
            {SharedText.Neurochemistry.Exercise} ... coming soon!
          </li>
          <li>
            <NewTabLink
              href={SharedRoutes.Neurochemistry.RelaxationResponse}
              noNewTab
            >
              {SharedText.Neurochemistry.RelaxationResponse}
            </NewTabLink>
          </li>
          <li>
            <NewTabLink
              href={SharedRoutes.Neurochemistry.ColdShowers}
              noNewTab
            >
              {SharedText.Neurochemistry.ColdShowers}
            </NewTabLink>
          </li>
          <li>
            {/* <NewTabLink
              href={SharedRoutes.Neurochemistry.Paranoia}
              noNewTab
            >
              {SharedText.Neurochemistry.Paranoia}
            </NewTabLink> */}
            {SharedText.Neurochemistry.Paranoia} ... coming soon!
          </li>
          <li>
            <NewTabLink
              href={SharedRoutes.Neurochemistry.SubconsciousPositiveReactions}
              noNewTab
            >
              {SharedText.Neurochemistry.SubconsciousPositiveReactions}
            </NewTabLink>
          </li>
          <li>
            <NewTabLink
              href={SharedRoutes.Neurochemistry.LearningAndGeneticCode}
              noNewTab
            >
              {SharedText.Neurochemistry.LearningAndGeneticCode}
            </NewTabLink>
          </li>
          <li>
            <NewTabLink
              href={SharedRoutes.Neurochemistry.MelatoninIsTheKeyToCreativity}
              noNewTab
            >
              {SharedText.Neurochemistry.MelatoninIsTheKeyToCreativity}
            </NewTabLink>
          </li>
          <li>
            <NewTabLink href={SharedRoutes.Neurochemistry.LetItBe} noNewTab>
              {SharedText.Neurochemistry.LetItBe}
            </NewTabLink>
          </li>

          <li>
            <NewTabLink
              href={SharedRoutes.Neurochemistry.AdviceFromTheBeatles}
              noNewTab
            >
              {SharedText.Neurochemistry.AdviceFromTheBeatles}
            </NewTabLink>
          </li>
          <li>
            <NewTabLink
              href={SharedRoutes.Neurochemistry.ImportanceOfStretching}
              noNewTab
            >
              {SharedText.Neurochemistry.ImportanceOfStretching}
            </NewTabLink>
          </li>
          <li>
            <NewTabLink
              href={SharedRoutes.Neurochemistry.GuiltAndForgiveness}
              noNewTab
            >
              {SharedText.Neurochemistry.GuiltAndForgiveness}
            </NewTabLink>
          </li>
          <li>
            <NewTabLink
              href={SharedRoutes.Neurochemistry.AttachmentAndSharing}
              noNewTab
            >
              {SharedText.Neurochemistry.AttachmentAndSharing}
            </NewTabLink>
          </li>
          <li>
            <NewTabLink
              href={SharedRoutes.Neurochemistry.SelfActualisation}
              noNewTab
            >
              {SharedText.Neurochemistry.SelfActualisation}
            </NewTabLink>
          </li>
          <li>
            {/* <NewTabLink
              href={SharedRoutes.Neurochemistry.ImaginationAndVisualisation}
              noNewTab
            >
              {SharedText.Neurochemistry.ImaginationAndVisualisation}
            </NewTabLink> */}
            {SharedText.Neurochemistry.ImaginationAndVisualisation} ... coming
            soon!
          </li>
          <li>
            <NewTabLink
              href={
                SharedRoutes.Neurochemistry.PropheciesAndMassAwakeningDiscussion
              }
              noNewTab
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
      </MusicScrollDownMessage>
    </div>
  );
}
