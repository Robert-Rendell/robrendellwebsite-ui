import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { usePageView } from "../../hooks/use-page-view.hook";
import { useWindowSize } from "../../hooks/use-window-size.hook";

export function GiantPacificOctopusPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  usePageView(SharedRoutes.Miscellaneous.GiantPacificOctopus);
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>{SharedText.Miscellaneous.GiantPacificOctopus}</h1>
      <p>22 Facts: Self-regulating Cephalopods</p>
      <img
        width={width}
        src="https://www.americanoceans.org/wp-content/uploads/2021/01/giant-pacific-octopus-attack-humans-1024x681.jpg"
      />
      <img
        width={width}
        src="https://media.fisheries.noaa.gov/dam-migration-miss/1280_ove0emz6YWd3.jpg?1536093455"
      />
      <img
        width={width}
        src="https://media.npr.org/assets/img/2011/06/01/gettyimages_73790192_wide-0a0ced315567fc824e9043ed8915c9c57629dc63-s800-c85.webp"
      />
      <hr />
      <p>
        <i>
          One of the largest octopus species in the world lives in Alaskan
          waters: Giant Pacific Octopus
        </i>
      </p>
      <div className="numbered-list-margins">
        <ol>
          <li>
            A 50-pound octopus can squeeze through a hole only 2 inches in
            diameter. If their beak fits, they can get through.
          </li>
          <li>They are about 90 percent muscle.</li>
          <li>
            You can tell a male octopus from a female by looking at the tip of
            its third arm on the right (starting between the eyes and going
            clockwise). Males have a special reproductive tip on this arm that
            has no suckers on the last few inches. This specialized tip is
            visible even in immature octopus. To mate, the male inserts this
            special arm into the female&apos;s body cavity. A captured male will
            try to protect this arm.
          </li>
          <li>
            Female octopus can wait until months after mating to fertilize the
            eggs.
          </li>
          <li>
            An average female Giant Pacific Octopus in Alaska can lay 90,000
            eggs.
          </li>
          <li>
            Giant Pacific octopus mothers sacrifice their lives after laying
            their eggs in deep-water dens. They live with their eggs for up to
            seven months without eating, ensuring that streams of oxygen- and
            nutrient-rich water waft over them. Mothers usually die after their
            broods hatch.
          </li>
          <li>
            Fishermen like to cut off the tip of an octopus&apos; arm and use it
            for halibut bait because it continues to wiggle even after being cut
            off.
          </li>
          <li>
            Octopus frequently lose an arm to predators, but they grow back.
          </li>
          <li>
            Giant Pacific Octopus are cannibals. They will happily kill and eat
            smaller octopus.
          </li>
          <li>
            All species of octopus have venom. The venom of the Giant Pacific
            Octopus is not dangerous to humans, but Australia&apos;s blue-ringed
            octopus is known as one of the most poisonous marine animals—its
            venom is deadly to humans.
          </li>
          <li>
            Octopus actually have shells similar to clams and snails. There is a
            pair of small, spike-shaped structures called stylets inside the
            octopus&apos; body that are a vestigial shell—meaning it really has
            no function.
          </li>
          <li>
            It is tempting to use “octopi” as the plural of “octopus”, but
            DON&apos;T DO IT. “Octopi” would be a proper Latin plural, but the
            word “octopus” has a Greek, rather than a Latin, root. The correct
            use is to use the word “octopus” to refer to one or several
            individuals of a single species; use the plural “octopuses” only
            when talking about multiple species.
          </li>
          <li>
            An octopus has three hearts, nine brains, and blue blood. Two hearts
            pump blood to the gills, while a third circulates it to the rest of
            the body. The nervous system includes a central brain and a large
            ganglion at the base of each arm which controls movement. Their
            blood contains the copper-rich protein hemocyanin, which is more
            efficient than hemoglobin for oxygen transport at very low
            temperatures and low oxygen concentrations.
          </li>
          <li>
            Unlike most fish, octopus have no swim bladders, so they are less
            likely to be injured by pressure changes when brought up from ocean
            depths.
          </li>
          <li>
            Octopus can survive out of water for brief periods. (there&apos;s
            one in Australia that moves between rock pools on land during low
            tide)
          </li>
          <li>No method exists for determining the age of octopus.</li>
          <li>
            A central brain controls the nervous system. In addition, there is a
            small brain in each of their eight arms — a cluster of nerve cells
            that biologists say controls movement. This allows the arms to work
            independently of each other, yet together toward the same goal.
          </li>
          <li>
            They’re able to change their color and texture to camouflage
            themselves in the blink of an eye, thanks to a complex system of
            specialized pigment sacs called chromatophores, nerves and muscles
          </li>
          <li>280 suction cups - can taste as well as grab</li>
          <li>Only live about 5 years</li>
          <li>Can grow to 30 feet long</li>
          <li>
            Eats loads of crabs, holds onto them until it gets back to it&apos;s
            den
          </li>
        </ol>
      </div>
      <hr />
      <h2>Research in Alaska</h2>
      <p>
        This{" "}
        <a
          href="https://www.fisheries.noaa.gov/alaska/science-data/octopus-research-alaska"
          target="_blank"
          rel="noreferrer"
        >
          NOAA Fisheries video
        </a>{" "}
        features spectacular underwater footage of octopus swimming and eggs
        hatching. NOAA researcher Liz Conners of the Alaska Fisheries Science
        Center points out the challenges of managing the Pacific octopus in
        Alaska and how researchers are working to develop new technology to
        better capture, tag, and study the octopus. The research study is a
        collaborative effort among the North Pacific Research Board, NOAA’s
        Alaska Fisheries Science Center, the University of Alaska Fairbanks, and
        the Alaska fishing community. Learn more about the Pacific Giant Octopus
        here.
      </p>
      <p>
        To set sustainable catch limits for octopus, managers need to know how
        many there are and how fast they grow and reproduce.
      </p>
      <p>We are inventing betters way to catch an octopus.</p>
      <p>
        One new method exploits an octopus&apos;s love of hiding places by
        putting out artificial dens clipped to a long fishing line. The octopus
        crawls into these buckets or boxes and stay in them as the boxes are
        pulled to the surface.
      </p>
      <p>
        Researchers in Alaska experimented with a variety of pot shapes and
        materials to see which capture the most octopus. Developing
        species-specific research gear will allow scientists to conduct further
        experiments and to monitor whether the octopus population changes over
        time.
      </p>
      <hr />
      <h2>Octopus emotional intelligence</h2>
      <p>
        Self regulation:{" "}
        <a href="https://youtu.be/dKWssIQplw8" target="_blank" rel="noreferrer">
          https://youtu.be/dKWssIQplw8
        </a>
      </p>
      <hr />
      <h2>References</h2>
      <ul>
        <li>
          <a
            href="https://octolab.tv/category/experiments"
            target="_blank"
            rel="noreferrer"
          >
            https://octolab.tv/category/experiments
          </a>
        </li>
        <li>
          <a
            href="https://youtu.be/dKWssIQplw8"
            target="_blank"
            rel="noreferrer"
          >
            https://youtu.be/dKWssIQplw8
          </a>
        </li>
        <li>https://octolab.tv/species/giant-pacific-octopus/</li>
        <li>https://www.apnews.com/ba6e3fa5bb804565b9d6d666b6d40a73</li>
        <li>
          https://www.fisheries.noaa.gov/alaska/science-data/octopus-research-alaska
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=IrdbENkylZM"
            target="_blank"
            rel="noreferrer"
          >
            https://www.youtube.com/watch?v=IrdbENkylZM
          </a>
        </li>
        <li>https://cdn2.webdamdb.com/1280_ove0emz6YWd3.jpg?1536093455</li>
        <li>https://cdn2.webdamdb.com/1280_YWCNm0iehiKC.jpg?1509390927</li>
        <li>https://cdn2.webdamdb.com/1280_1DWStNwYwLWG.jpg?1509392347</li>
        <li>https://www.spectator.co.uk/2010/07/are-octopuses-just-like-us/</li>
      </ul>
      Date created: 08/09/19
    </div>
  );
}
