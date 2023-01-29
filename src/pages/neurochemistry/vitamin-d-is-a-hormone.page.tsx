import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import { QuestionComponent } from "./components/question.component";

export function VitaminDIsAHormonePage() {
  usePageView(SharedRoutes.Neurochemistry.VitaminD);
  return (
    <div className="standard-page-margins standard-page-styling black-bg">
      <h1>
        <RobBackButton /> {SharedText.Neurochemistry.VitaminD}
      </h1>
      <MusicScrollDownMessage youtubeVideoEmbedId="QAPJBHC9gqU">
        <QuestionComponent hrOff>What is Vitamin D?</QuestionComponent>
        <hr />
        <p>
          The most common form of vitamin D is synthesized in the skin (called
          &quot;activation&quot;) after exposure to rays of ultraviolet B
          radiation (the sun). Vitamin D is thought of as more of a
          multifunctional hormone or{" "}
          <NewTabLink href="https://en.wikipedia.org/wiki/Prohormone">
            prohormone
          </NewTabLink>
          . This is because vitamin D contributes to many processes in the body.
        </p>
        <p>
          <ul>
            <li>
              In the UK, we only have sufficient exposure to sunlight in the
              months from March to October;
            </li>
            <li>
              In countries closer to the equator, people will get enough vitamin
              D year round;
            </li>
            <li>
              In the UK from October to March - we need to get vitamin D in a
              tablet form as the sunlight isn&apos;t sufficient;
            </li>
            <li>
              Those with darker skin have a reduced ability to synthesise
              vitamin D;
            </li>
            <li>Those who are housebound have little exposure to the sun;</li>
            <li>
              Vitamin D deficiency presents as rickets in children (think bow
              legged) and as osteomalacia in adults (reduced bone density which
              can lead to bone fractures);
            </li>
            <li>
              A single tablet of vitamin D is 10&micro;mg, which in clinical
              terms is 400 units. Some people who are vitamin D deficient are
              prescribed a weekly dose of 20,000 or even 80,000 units;
            </li>
            <li>
              Vitamin D is stored in the body and is not water soluble, that is
              why we don&apos;t excrete vitamin D in our urine (and also why we
              can be prescribed large single dosages).
            </li>
          </ul>
        </p>
        <QuestionComponent>
          What is Seasonal Affective Disorder?
        </QuestionComponent>
        <p>
          <NewTabLink href="https://www.mind.org.uk/information-support/types-of-mental-health-problems/seasonal-affective-disorder-sad/about-sad/">
            Seasonal Affective Disorder (SAD)
          </NewTabLink>
          &nbsp;is a type of depression that you experience during particular
          seasons or times of year.
        </p>
        <p>
          Taking vitamin D supplements in the UK is part of tackling S.A.D, but
          it is not the whole story.
        </p>
        <QuestionComponent>
          Seasonal Affective Disorder: Why is Keeping Warm Important?
        </QuestionComponent>
        <p>
          In my opinion, part of Seasonal Affective Disorder is actually keeping
          your body temperature at a stable level when winter comes around.
        </p>
        <p>
          Keeping warm when your living / working environment is cold requires a
          lot of energy from your body&apos;s supplies.
        </p>
        <p>
          In the current economic climate (2023), electric blankets are a
          fantastic way to keep warm because they don&apos;t draw a lot of
          electricity in comparison to heating your entire home.
        </p>
        <p>Having baths is a great way to keep warm in winter.</p>
        <p>
          Drinking lots of cups of hot squash or tea and eating hot soup
          immediately warms you up.
        </p>
        <p>
          Martin Lewis, money saving expert, says &quot;Heat the human, not the
          home!&quot; and this means even in a warm home/work, you may still be
          cold; so the best way to keep warm is to keep moving regularly... or
          even better, exercise!
        </p>
        <QuestionComponent>What can I take away from this?</QuestionComponent>
        <p>
          <ul>
            <li>
              Vitamin D is an extremely important prohormone, meaning it is a
              precursor to many hormones in the body, which undoubtedly have an
              impact on your emotional being.
            </li>
            <li>Take vitamin D supplements from October to March in the UK!</li>
            <li>Prioritise keeping warm in winter!</li>
          </ul>
        </p>
      </MusicScrollDownMessage>
    </div>
  );
}
