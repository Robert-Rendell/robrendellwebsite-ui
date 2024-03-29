import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import { useWindowSize } from "../../hooks/use-window-size.hook";

export function SelfActualisationPeakExperiencesPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  usePageView(SharedRoutes.Neurochemistry.SelfActualisation);
  return (
    <div className="standard-page-margins standard-page-styling black-bg-auto black-bg">
      <h1>
        <RobBackButton /> {SharedText.Neurochemistry.SelfActualisation}
      </h1>
      <MusicScrollDownMessage youtubeVideoEmbedId="OzLhXesNkCI" start={53}>
        <p>
          Self-actualisation is the complete realisation of one&apos;s
          potential, and the full development of one&apos;s abilities and
          appreciation for life. This concept is at the top of Maslow&apos;s
          Hierarchy of Needs.
        </p>
        <p>
          <NewTabLink href="https://www.simplypsychology.org/self-actualization.html#:~:text=Self%2Dactualization%20is%20the%20complete,every%20human%20being%20reaches%20it.">
            https://www.simplypsychology.org/self-actualization
          </NewTabLink>
        </p>
        <p>
          <NewTabLink href="https://en.wikipedia.org/wiki/Maslow%27s_hierarchy_of_needs">
            https://en.wikipedia.org/wiki/Maslow&apos;s_hierarchy_of_needs
          </NewTabLink>
        </p>
        <img
          width={width}
          src="https://www.verywellmind.com/thmb/luJzFVjtfBsCuRanONrj18FQxA4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4136760-article-what-is-maslows-hierarchy-of-needs-5a97179aeb97de003668392e.png"
        />
      </MusicScrollDownMessage>
    </div>
  );
}
