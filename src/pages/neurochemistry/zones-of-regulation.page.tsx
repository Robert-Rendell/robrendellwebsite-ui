import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import zones from "../../resources/zones.jpg";

export function ZonesOfRegulationPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  usePageView(SharedRoutes.Neurochemistry.ZonesOfRegulation);
  return (
    <div className="standard-page-margins standard-page-styling black-bg">
      <h1>
        <RobBackButton /> {SharedText.Neurochemistry.ZonesOfRegulation}
      </h1>
      <MusicScrollDownMessage youtubeVideoEmbedId="fJ9rUzIMcZQ">
        <p>
          My sister introduced me to the&nbsp;
          <NewTabLink href="https://d1uvxqwmcz8fl1.cloudfront.net/tes/resources/12068045/01f52aea-5663-46a1-8728-37740dc2363a/image?width=500&height=500&version=1567674337888">
            Zones of Regulation
          </NewTabLink>{" "}
          a few years ago when she was teaching her school kids the topic{" "}
          <i>(Sister: you are a fantastic teacher)</i>.
        </p>
        <p>
          In that same conversation we shared our similar experiences of
          suffering which caused us to seek out coping mechanisms.
        </p>
        <p>
          As you can imagine, this chart is not just useful for children... it
          is for emotionally aware adults too.
        </p>
        <p>
          In July 2019, I added my own touch to the chart and I&apos;m sharing
          that with you here:
        </p>
        <img src={zones} width={width} />
      </MusicScrollDownMessage>
    </div>
  );
}
