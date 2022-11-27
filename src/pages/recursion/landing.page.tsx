import React from "react";
import { MusicScrollDownMesssage } from "../../components/music-scroll-down.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { ScrollToTopLink } from "../../components/scroll-to-top-link.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import "../page.css";

export function RecursionLandingPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;

  usePageView("/recursion");

  return (
    <div className="standard-page-margins standard-page-styling black-bg-auto black-bg">
      <h1>Neurochemistry Project: Emotional Intelligence</h1>
      <MusicScrollDownMesssage />
      <h2>Topics</h2>
      <ol>
        <li>
          <NewTabLink href="/neurochemistry/happiness">
            Rob&apos;s Mnemonic for Happiness: MC-EDOEGSA
          </NewTabLink>
        </li>
        <li>
          <NewTabLink href="/neurochemistry/zones-of-regulation">
            The Emotional Zones Of Regulation
          </NewTabLink>
        </li>
        <li>
          <NewTabLink href="/neurochemistry/self-love-not-narcissism">
            Self-love! (... And not Narcissism)
          </NewTabLink>
        </li>
        <li>
          <NewTabLink href="/neurochemistry/the-relaxation-response">
            The Relaxation Response
          </NewTabLink>
        </li>
        <li>
          <NewTabLink href="/neurochemistry/subconscious-positive-reactions">
            Subconscious Positive Reactions
          </NewTabLink>
        </li>
        <li>
          <NewTabLink href="/neurochemistry/self-actualisation-peak-experiences">
            Self-actualisation & Peak Experiences
          </NewTabLink>
        </li>
        <li>
          <NewTabLink href="/neurochemistry/learning-and-genetic-code">
            Learning and Genetic Code
          </NewTabLink>
        </li>
        <li>
          <NewTabLink href="/neurochemistry/let-it-go">
            Let it Go / Let it Be
          </NewTabLink>
        </li>
        <li>
          <NewTabLink href="/neurochemistry/advice-from-the-beatles">
            Advice from The Beatles
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
      <iframe
        width={width}
        height="315"
        src="https://www.youtube.com/embed/mbcVm8iepQE?start=120&autoplay=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <ScrollToTopLink />
    </div>
  );
}
