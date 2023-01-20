import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import { useWindowSize } from "../../hooks/use-window-size.hook";

export function ColdShowersPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  usePageView(SharedRoutes.Neurochemistry.ColdShowers);
  return (
    <div className="standard-page-margins standard-page-styling black-bg">
      <h1>
        <RobBackButton /> {SharedText.Neurochemistry.ColdShowers}
      </h1>
      <MusicScrollDownMessage youtubeVideoEmbedId="ndqyUDPVBt0">
        Getting your body used to adrenaline and cortisol on a daily basis
        Research shows that taking a cold shower in the evening may affect your
        sleep in a bad way. This is because exposure to cold increases your
        cortisol level, which may lead to a poor night&apos;s sleep. Cold
        showers have been proven to positively stimulate blood circulation and
        lower blood pressure. Anxiety causes increased blood pressure. So, with
        a cold shower, you may help bring it down. The cold shock also releases
        the stress hormones norepinephrine, cortisol, and adrenaline.
        https://www.wimhofmethod.com/benefits-of-cold-showers#:~:text=Scientific%20studies%20have%20found%20that,which%20stimulates%20the%20immune%20response.
        https://www.wimhofmethod.com/blog/cold-showers-vs-hot-showers#:~:text=Cold%20showers%20for%20mental%20health&text=Cold%20showers%20have%20been%20proven,norepinephrine%2C%20cortisol%2C%20and%20adrenaline.
      </MusicScrollDownMessage>
    </div>
  );
}
