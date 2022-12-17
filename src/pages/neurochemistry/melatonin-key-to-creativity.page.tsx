import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { Emphasised } from "../../components/emphasised.component";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import { QuestionComponent } from "./components/question.component";

export function MelatoninIsTheKeyToCreativeInsight() {
  usePageView(SharedRoutes.Neurochemistry.MelatoninIsTheKeyToCreativity);
  return (
    <div className="standard-page-margins standard-page-styling black-bg">
      <h1>
        <RobBackButton />{" "}
        {SharedText.Neurochemistry.MelatoninIsTheKeyToCreativity}
      </h1>
      <MusicScrollDownMessage youtubeVideoUrl="https://www.youtube.com/embed/NAEppFUWLfc">
        <p>Humans have been around for a long, long time.</p>
        <p>
          Humans have been around for such a long time, that for most of our
          history - we haven&apos;t had street lights or cities.
        </p>
        <p>Instead, humans had torchlight and fire to pierce the darkness.</p>
        <p>
          A town under a clear starry sky, even lit by torchlight, would be lit
          up by the moonlight.
        </p>
        <hr />
        <p>
          Our sense of wonder and fascination has always been at its strongest
          when we gazed up into the starry skies.
        </p>
        <p>
          When darkness enters our eyes, I believe, <u>melatonin</u> is
          affected.
        </p>
        <QuestionComponent>
          So why then, does it have anything to do with creativity?
        </QuestionComponent>
        <p>
          We live in a tiny flat in Newcastle upon Tyne and in that tiny flat we
          have a mouldy as fuck bathroom.
        </p>
        <p>
          In that mouldy, hazardous for health, bathroom, we have no windows.
        </p>
        <hr />
        <p>
          Occasionally when I&apos;m feeling down, I like to put the music up
          full in the, mouldy as fuck (landlord SORT IT OUT you lazy fucker),
          bathroom and <u>close my eyes</u>.
        </p>
        <p className="centred">I call this:</p>
        <QuestionComponent>DISCO SHOWERS!!!</QuestionComponent>
        <p>
          All of my (fantastic... [oh yeah buddy]) ideas, have come to me in the
          darkness of my eyelids. Many an epiphany has been had dancing like a
          crazy person in that bathtub.
        </p>
        <hr />
        <p>
          The other thing I like to do is lie, on our shitty bed that the
          landlord gave us, in the darkness (and silence) and do some
          &quot;mindfulness meditation&quot;. In my opinion, this is where you
          just allow thoughts to enter your mind and you get a chance to write
          them down.
        </p>
        <p>
          All that mental background noise and mental chatter is calmed because
          I (Rob) get a chance to speak to my inner child (my cerebellum) and
          find out what he (Roberto) has been up to.
        </p>
        <p>
          Again, it&apos;s melatonin! Some of my best ideas come from sitting in
          the dark and silence.
        </p>
        <p>
          You should try to shed any fear of the dark (be honest with yourself,
          would you walk alone in the dark woods without a torch- No? I would).
        </p>
        <Emphasised>Fear is holding you back.</Emphasised>
        <hr />
        <p>
          So for the last part of this lesson today, I just want you to close
          your eyes and fully focus on the lyrics in this, very famous, song by
          Simon and Garfunkel.
        </p>
        <p>
          In my opinion, these two (genius) guys are suggesting that you can
          reach into your dreams, the subconscious mind, through melatonin...
          enjoy!
        </p>
      </MusicScrollDownMessage>
    </div>
  );
}
