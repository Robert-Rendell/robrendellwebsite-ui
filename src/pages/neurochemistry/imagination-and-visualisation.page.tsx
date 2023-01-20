import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import { useWindowSize } from "../../hooks/use-window-size.hook";

export function ImaginationAndVisualisationPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  usePageView(SharedRoutes.Neurochemistry.ImaginationAndVisualisation);
  return (
    <div className="standard-page-margins standard-page-styling black-bg">
      <h1>
        <RobBackButton />{" "}
        {SharedText.Neurochemistry.ImaginationAndVisualisation}
      </h1>
      <MusicScrollDownMessage youtubeVideoEmbedId="jEXBJ1JFj-s">
        A lot of this mentioned on my{" "}
        <NewTabLink
          href={SharedRoutes.Neurochemistry.SubconsciousPositiveReactions}
        >
          subconscious positive reactions
        </NewTabLink>{" "}
        page
      </MusicScrollDownMessage>
    </div>
  );
}
