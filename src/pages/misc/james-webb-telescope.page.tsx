import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { NewTabLink } from "../../components/new-tab-link.component";
import { PageComponent } from "../../components/page.component";

export function JamesWebbTelescopePage() {
  return (
    <PageComponent
      title={SharedText.Miscellaneous.JamesWebbTelescope}
      route={SharedRoutes.Miscellaneous.JamesWebbTelescope}
    >
      <NewTabLink href="https://webbtelescope.org/quick-facts">
        Quick facts
      </NewTabLink>
      <ul>
        <li>
          <NewTabLink href="https://webbtelescope.org/quick-facts/telescope-quick-facts">
            Telescope
          </NewTabLink>
        </li>
        <li>
          <NewTabLink href="https://webbtelescope.org/quick-facts/mission-launch-quick-facts">
            Mission & Launch
          </NewTabLink>
        </li>
        <li>
          <NewTabLink href="https://webbtelescope.org/quick-facts/science-quick-facts">
            Webb Science
          </NewTabLink>
        </li>
      </ul>

      <NewTabLink href="https://webbtelescope.org/webb-science/the-observatory/infrared-astronomy">
        Infrared Astronomy
      </NewTabLink>

      <NewTabLink href="https://webbtelescope.org/resource-gallery/images">
        Official Image Gallery
      </NewTabLink>

      <NewTabLink href="https://webbtelescope.org/resource-gallery/videos">
        Videos
      </NewTabLink>

      <NewTabLink href="https://webbtelescope.org/glossary">
        Glossary
      </NewTabLink>
    </PageComponent>
  );
}
