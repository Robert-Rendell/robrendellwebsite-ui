import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { QuoteComponent } from "../../components/quote.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import { useWindowSize } from "../../hooks/use-window-size.hook";

export function SelfLoveNotNarcissismPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  usePageView(SharedRoutes.Neurochemistry.SelfLove);
  return (
    <div className="standard-page-margins standard-page-styling black-bg-auto black-bg">
      <h1>
        <RobBackButton /> {SharedText.Neurochemistry.SelfLove}
      </h1>
      <MusicScrollDownMessage youtubeVideoEmbedId="M8iLdUinHl4">
        <h2 className="centred">
          <i>What is narcissism?</i>
        </h2>
        <hr />
        <p>
          Narcissistic personality disorder is a mental health condition in
          which people have an unreasonably high sense of their own importance.
        </p>
        <hr />
        <h2 className="centred">
          <i>What is self-love?</i>
        </h2>
        <hr />
        <p>Self-love is truly accepting your honest self.</p>
        <p>
          You first need to find your honest self by removing mental barriers
          that are holding you back:
          <ul>
            <li>
              <u>Survival instinct</u>: by means of living life to the fullest;
            </li>
            <li>
              <u>Ignorance</u>: by means of education;
            </li>
            <li>
              <u>Greed</u>: by accepting economy is an illusion to create
              balance;
            </li>
            <li>
              <u>Pride</u>: the world does not revolve around you (it revolves
              around the sun haha);
            </li>
            <li>
              <u>Sexuality</u>: know your sexuality intimately and don&apos;t
              allow your sexuality to be labelled;
            </li>
            <li>
              <u>Gender</u>: this is a physical and chemical reality -
              don&apos;t let it be a static category;
            </li>
            <li>
              <u>Attachment / ownership</u>: by means of sharing what you can;
            </li>
            <li>
              <u>Materialism</u>: by means of only buying what you really need;
            </li>
            <li>
              <u>Consumerism</u>: if you aren&apos;t Christian, why are you
              celebrating Christ-mas?;
            </li>
            <li>
              <u>Vanity</u>: your cranial muscles are the only ones worth
              training in this day and age;
            </li>
            <li>
              <u>Retribution / revenge</u>: anger is wasted energy because it
              makes you less rational / less logical.
            </li>
            <li>
              <u>Instinctual fears</u>: spiders, heights, wasps, you name it -
              face your fears and treat animals kindly!
            </li>
          </ul>
        </p>
        <hr />
        <h2 className="centred">
          <i>Why is self-love important?</i>
        </h2>
        <hr />
        <p>
          If people spent more time understanding their own emotions, there
          would be a lot more love and kindness in the world.
        </p>
        <p className="centred">Be kind to yourself</p>
        <p className="centred">Be kind to others</p>
        <hr />
        <QuoteComponent year={2022}>
          Smile, and the world smiles back. (... And if it doesn&apos;t... that
          smile is for you!)
        </QuoteComponent>
        <img
          src={`https://jmlkanewischer.files.wordpress.com/2020/04/matrix-know-thyself.jpg?w=${width}`}
          width={width}
        />
      </MusicScrollDownMessage>
    </div>
  );
}
