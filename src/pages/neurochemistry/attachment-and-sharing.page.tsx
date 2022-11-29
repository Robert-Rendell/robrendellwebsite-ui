import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import { useWindowSize } from "../../hooks/use-window-size.hook";

export function AttachmentAndSharing() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  usePageView(SharedRoutes.Neurochemistry.AttachmentAndSharing);
  return (
    <div className="standard-page-margins standard-page-styling black-bg">
      <h1>
        <RobBackButton closeWindow />{" "}
        {SharedText.Neurochemistry.AttachmentAndSharing}
      </h1>
      <hr/>
      <p>
        One of the hardest mental blockers to remove is attachment.
      </p>
      <p>
        I haven&apos;t, personally, managed to remove it and I think it&apos;s only really buddhist monks (for example) that are truly able to achieve this.
      </p>
      <hr/>
      <p>
        I do, however, believe that you can get close by doing something we are all familiar with: <u>sharing</u>!
      </p>
      <p>
        Share this project with your family and those who you think would benefit from this knowledge!
      </p>
      <p>
        I am sharing all my knowledge with you and I can also share a film recommendation as well:
      </p>
      <NewTabLink href="https://www.amazon.co.uk/Inside-Out-DVD-Amy-Poehler/dp/B012CGVY4A/ref=sr_1_2?crid=2N7V0A85ZA3NQ&keywords=inside+out+film&qid=1669734112&sprefix=inside+out+film%2Caps%2C179&sr=8-2">
        Buy the DVD on amazon for £5!
      </NewTabLink>
      <hr/>
      <div className="centred">
        <img width={width/3} src="https://m.media-amazon.com/images/I/81lAh-OgfgL._AC_SY445_.jpg"/>
      </div>
      
    </div>
  );
}
