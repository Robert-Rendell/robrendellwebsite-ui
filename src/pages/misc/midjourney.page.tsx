import React from "react";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import "./india.page.css";
import { usePageView } from "../../hooks/use-page-view.hook";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { NewTabLink } from "../../components/new-tab-link.component";

export function MidJourneyPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  usePageView(SharedRoutes.Miscellaneous.Midjourney);
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>{SharedText.Miscellaneous.Midjourney}</h1>
      <hr />
      <p>
        <NewTabLink href="https://docs.midjourney.com/docs/quick-start">
          Quick start tutorial
        </NewTabLink>
      </p>
      <p>
        <NewTabLink href="https://www.midjourney.com/showcase/top/">
          Top community showcase images
        </NewTabLink>
      </p>
      <p>
        <NewTabLink href="https://docs.midjourney.com/docs/prompts">
          Command: /imagine [prompt]
        </NewTabLink>
        <ul>
          <li>
            Subject:
            <ul>
              <li>person, animal, character, location, object, etc.</li>
            </ul>
          </li>
          <li>
            Medium:
            <ul>
              <li>
                photo, painting, illustration, sculpture, doodle, tapestry, etc.
              </li>
            </ul>
          </li>
          <li>
            Environment:
            <ul>
              <li>
                indoors, outdoors, on the moon, in Narnia, underwater, the
                Emerald City, etc.
              </li>
            </ul>
          </li>
          <li>
            Lighting:
            <ul>
              <li>soft, ambient, overcast, neon, studio lights, etc</li>
            </ul>
          </li>
          <li>
            Color:
            <ul>
              <li>
                vibrant, muted, bright, monochromatic, colorful, black and
                white, pastel, etc.
              </li>
            </ul>
          </li>
          <li>
            Mood:
            <ul>
              <li>Sedate, calm, raucous, energetic, etc.</li>
            </ul>
          </li>
          <li>
            Composition:
            <ul>
              <li>Portrait, headshot, closeup, birds-eye view, etc.</li>
            </ul>
          </li>
        </ul>
      </p>
      <hr />
    </div>
  );
}
