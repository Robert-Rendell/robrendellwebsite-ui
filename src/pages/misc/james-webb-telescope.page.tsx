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

      <NewTabLink href="httpshttps://www.nasa.gov/sites/default/files/thumbnails/image/main_image_star-forming_region_carina_nircam_final-5mb.jpg://webbtelescope.org/webb-science/the-observatory/infrared-astronomy">
        Infrared Astronomy
      </NewTabLink>
      <br />
      <NewTabLink href="https://webbtelescope.org/resource-gallery/images">
        Official Image Gallery
      </NewTabLink>
      <br />
      <NewTabLink href="https://webbtelescope.org/resource-gallery/videos">
        Videos
      </NewTabLink>
      <br />
      <NewTabLink href="https://webbtelescope.org/glossary">
        Glossary
      </NewTabLink>
      <hr />
      <img
        width="100%"
        src="https://www.nasa.gov/sites/default/files/thumbnails/image/main_image_star-forming_region_carina_nircam_final-5mb.jpg"
      />
      <NewTabLink href="https://www.nasa.gov/image-feature/goddard/2022/nasa-s-webb-reveals-cosmic-cliffs-glittering-landscape-of-star-birth">
        Carina Nebula
      </NewTabLink>
      <hr />
      <img
        width="100%"
        src="https://www.nasa.gov/sites/default/files/thumbnails/image/main_image_galaxies_stephans_quintet_sq_nircam_miri_final-5mb.jpg"
      />
      <NewTabLink href="https://www.nasa.gov/image-feature/goddard/2022/nasa-s-webb-sheds-light-on-galaxy-evolution-black-holes">
        Stefan&apos;s Quintet
      </NewTabLink>
      <hr />
      <img
        width="100%"
        src="https://www.nasa.gov/sites/default/files/thumbnails/image/main_image_stellar_death_s_ring_miri_nircam_sidebyside-5mb.jpg"
      />
      <NewTabLink href="https://www.nasa.gov/image-feature/goddard/2022/nasa-s-webb-captures-dying-star-s-final-performance-in-fine-detail">
        Southern Ring Nebula
      </NewTabLink>
      <hr />
      <img
        width="100%"
        src="https://www.nasa.gov/sites/default/files/thumbnails/image/main_image_deep_field_smacs0723-5mb.jpg"
      />
      <NewTabLink href="https://www.nasa.gov/image-feature/goddard/2022/nasa-s-webb-delivers-deepest-infrared-image-of-universe-yet">
        Webb&apos;s First Deep Field
      </NewTabLink>
    </PageComponent>
  );
}
