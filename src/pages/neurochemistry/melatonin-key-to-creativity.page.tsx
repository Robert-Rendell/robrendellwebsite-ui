import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import { QuestionComponent } from "./components/question.component";

export function LetItGoPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  const height = windowSize[1] - 200;
  usePageView(SharedRoutes.Neurochemistry.MelatoninIsTheKeyToCreativity);
  return (
    <div className="standard-page-margins standard-page-styling black-bg">
      <h1>
        <RobBackButton closeWindow />{" "}
        {SharedText.Neurochemistry.MelatoninIsTheKeyToCreativity} ...
      </h1>
      <p>Humans have been around for a long, long time.</p>
      <p>
        Humans have been around for such a long time, that for most of our
        history - we haven&apos;t had street lights or cities.
      </p>
      <p>Instead, humans had torchlight and fire to pierce the darkness.</p>
      <p>
        A town under a clear starry night, even lit by torchlight, would be lit
        up by the moonlight.
      </p>
      <hr />
      <p>
        Our sense of wonder and fascination has always been at its strongest
        when we gazed up into the starry skies.
      </p>
      <p>
        When darkness enters our eyes, I believe, <u>melatonin</u> is affected.
      </p>
      <QuestionComponent>
        So why then, does it have anything to do with creativity?
      </QuestionComponent>
      <p>
        All of my (fantastic... oh yeah buddy) ideas, have come to me in the
        darkness.
      </p>
      <p>
        We live in a tiny flat in Newcastle upon Tyne and in that tiny flat we
        have a mouldy as fuck bathroom.
      </p>
      <p>In that mouldy, hazardous for health, bathroom, we have no windows.</p>
      <hr />
      <p>
        Occasionally when I&apos;m feeling down, I like to put the music up full
        in the, mouldy as fuck (landlord SORT IT OUT), bathroom and{" "}
        <u>switch off the lights</u>.
      </p>
      <p>I call this:</p>
      <QuestionComponent>DISCO SHOWERS!!!</QuestionComponent>
      <p>
        The other thing I like to do is lie, on our shitty bed that the landlord
        gave us, in the darkness (and silence) and do some &quot;mindfulness
        meditation&quot;. In my opinion, this is where you just allow thoughts
        to enter your mind and you get a chance to write them down.
      </p>
      <p>
        All that mental background noise and mental chatter is calmed because I
        (Rob) get a chance to speak to my inner child (my cerebellum) and find
        out what he (Roberto) has been up to.
      </p>
      <p>
        Again, it&apos;s melatonin! Some of my best ideas come from sitting in
        the dark and silence.
      </p>
      <hr />
      <p>
        So for the last part of this lesson today, I just want you to close your
        eyes and fully focus on the lyrics in this, very famous, song by Simon
        and Garfunkel.
      </p>
      <p>
        In my opinion, these guys are suggesting that you can reach into your
        dreams (subconscious mind) through melatonin... enjoy!
      </p>
      <iframe
        width={width}
        height="315"
        src="https://www.youtube.com/embed/NAEppFUWLfc?autoplay=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
