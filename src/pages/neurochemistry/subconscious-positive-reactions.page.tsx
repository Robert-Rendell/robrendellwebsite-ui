import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { usePageView } from "../../hooks/use-page-view.hook";

export function SubconsciousPositiveReactionsPage() {
  usePageView(SharedRoutes.Neurochemistry.SubconsciousPositiveReactions);
  return (
    <div className="standard-page-margins standard-page-styling black-bg-auto black-bg">
      <h1>
        <RobBackButton closeWindow /> {SharedText.Neurochemistry.SubconsciousPositiveReactions}
      </h1>
      <hr />
      <h2 className="centred">
        <i>Heaven and hell... are they places of the afterlife?</i>
      </h2>
      <hr />
      <p className="centred">
        <b>No</b> -- they are places on earth.
      </p>
      <p>
        I have experienced both, in life, and I believe it is a result of your{" "}
        <u>current state of mind</u>, your <u>interpretation of reality</u> and
        your <u>reaction to events</u>.
      </p>
      <hr />
      <h2 className="centred">
        <i>What does &apos;State of Mind&apos; actually mean?</i>
      </h2>
      <hr />
      <p>
        State of mind, in my opinion, is the current (metaphorical) shape of
        your unconscious mind (subconscious).
      </p>
      <p>
        Our brains are programs that are constantly being reworked by
        experience.
      </p>
      <p>
        Inputs arrive from the outside and the current state of the program
        (your mind) determines the output.
      </p>
      <p>The outputs, of your mind, are reactions to situations and events.</p>
      <hr />
      <p>
        Crucially, I believe when the world feels upside down, it is a direct
        result of your mind being conditioned with a negative outlook. I call
        this <u>&apos;Subconscious Negative Reactions&apos;</u>.
      </p>
      <hr />
      <h2 className="centred">
        <i>Practical ways to train your subconscious</i>
      </h2>
      <hr />
      <p>
        So now you know the basics, let us go through a few strategies for a
        more optimistic / positive outlook:
      </p>
      <ol>
        <li>Take control of your reactions;</li>
        <li>
          Actively and deliberately react positively to events, even if it is
          very difficult;
        </li>
        <li>
          <b>
            Repeat your behaviour so your subconscious learns them; meaning you
            can be positive even when tired.
          </b>
        </li>
      </ol>
      <p>Practical routes:</p>
      <ul>
        <li>
          &apos;Have a good day!&apos; - When you are finished in a dialog with
          another person, say &apos;Have a good day!&apos;;
        </li>
        <li>
          Remember to smile (your body&apos;s happy chemicals are connected to
          the muscles in your face);
        </li>
        <li>
          Write down anything that made you happy today (eg. my lunch was tasty,
          I enjoyed my tea, getting outside was nice);
        </li>
        <li>
          Spend 5 mins with your eyes closed in a quiet space just{" "}
          <NewTabLink
            href="https://shineyogauk.com/sun-meditation/"
          >
            imagining the sun
          </NewTabLink>{" "}
          on your face on a hot sunny holiday in Spain;
        </li>
        <li>
          Be grateful for: running clean water, shelter, for food, for your
          hands, for your legs;
        </li>
        <li>
          Think about your{" "}
          <NewTabLink
            href="https://www.youtube.com/watch?v=0IagRZBvLtw"
          >
            favourite things
          </NewTabLink>{" "}
          (eg. imagine cuddling dogs or cats);
        </li>
        <li>
          If there are lots of negative things going on in your life, approach
          them with patience;
        </li>
        <li>
          Be kind to yourself and do not allow your{" "}
          <NewTabLink
            href="https://en.wikipedia.org/wiki/Id,_ego_and_super-ego"
          >
            super-ego
          </NewTabLink>{" "}
          to torment you.
        </li>
        <li>
          When you hear other people laughing, think this thought &quot;I&apos;m
          glad they are happy!&quot;
        </li>
        <li>
          Do not{" "}
          <NewTabLink
            href="https://en.wikipedia.org/wiki/Bindi_(decoration)"
          >
            frown
          </NewTabLink>
          !
        </li>
        <li>
          Write physical notes for yourself reminding you to do the above
          things.
        </li>
      </ul>
      <hr />
      <p>
        Most importantly, you need to do these things regularly to build habits
        to train your subconscious.
      </p>
    </div>
  );
}
