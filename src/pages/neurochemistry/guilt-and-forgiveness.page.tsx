import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import { QuestionComponent } from "./components/question.component";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";

export function GuiltAndForgiveness() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  usePageView(SharedRoutes.Neurochemistry.LetItBe);
  return (
    <div className="standard-page-margins standard-page-styling black-bg">
      <h1>
        <RobBackButton /> {SharedText.Neurochemistry.GuiltAndForgiveness}
      </h1>
      <MusicScrollDownMessage youtubeVideoUrl="https://www.youtube.com/embed/FwkrrU2WYKg">
        <p>First of all, be kind to yourself and others.</p>
        <p>
        The law is there for a reason and it demonstrates society&apos;s current
        morale standards.
        </p>
        <p>
        The law is always changing, keep an eye on it. Most of us don&apos;t get
        a say in what changes are made.
        </p>
        <p>
        Ensure you actively and openly disagree, with changes in the UK Law,
        when you see changes being made that you disagree with.
        </p>
        <p>
        Many, many people have fought wars to make sure we could have democracy.
        </p>
        <p>Be bold; use your vote and your voice.</p>
        <hr />
        <p>
        Educate yourself and learn about UK Law in this rich book of knowledge:
          <br />
          <li>
            <NewTabLink href="https://www.amazon.co.uk/Secret-Barrister-Stories-Law-Broken/dp/1509841148/ref=sr_1_2_sspa?crid=3AF3HOA53J2A7&keywords=the+secret+barrister&qid=1669727462&sprefix=the+secret+barriste%2Caps%2C77&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1">
            The Secret Barrister
            </NewTabLink>
          </li>
        </p>
        <QuestionComponent>What is the super-ego?</QuestionComponent>
        <div className="centred">
          <img
            src="https://m.media-amazon.com/images/I/511AC30M93L._SX291_BO1,204,203,200_.jpg"
            width={width / 3}
          ></img>
        </div>
        <p>
        As far as I know, the super-ego is a construct that your parents imprint
        on you as you are growing up as a child.
        </p>
        <p>
        You may have heard of the <u>inner policeman</u>, who is your voice
        telling you inside what you think is right and wrong.
        </p>
        <p>
        The inner policeman, usually, stops you from doing bad things and
        hurting people.
        </p>
        <p>
        Unfortunately though, we don&apos;t all deserve to bear children because
        we haven&apos; truly become an adult ourselves.
        </p>
        <QuestionComponent>
        What does &quot;adulthood&quot; actually mean?
        </QuestionComponent>
        <p>
        Adulthood, in my opinion, is when you have the skills to train your
        child to be a kind person.
        </p>
        <p>
        I believe true adulthood requires self-actualisation be achieved by one
        or both parents.
        </p>
        <p>
        Sam Fender has written a fantastic song about people having kids when
        they aren&apos;t responsible enough to look after other human beings.
        </p>
        <iframe
          width={width}
          height="315"
          src="https://www.youtube.com/embed/8HsCNzk-TAY&autoplay=1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <QuestionComponent>What about forgiveness?</QuestionComponent>
        <p>
        Well if you&apos; have read&nbsp;
          <NewTabLink href="happiness">my sob story</NewTabLink>
        &nbsp;about being bullied, then you will know I have had to forgive that
        terrible man who inflicted it upon me.
        </p>
        <p>
        I struggled to understand why I was being treated the way I was but I
        believe my manager in Edinburgh was also suffering.
        </p>
        <p>
        He had little to no managerial experience and also a dangerous
        deficiency in emotional intelligence (should be required for managers).
        Though there was one huge mental blocker he simply could not overcome:
        </p>
        <QuestionComponent>Mental Blocker: Survival Instinct</QuestionComponent>
        <p>
        I believe this man was threatened by me (without me being threatening to
        him and actually, it was in fact him that verbally threatened me!).
        </p>
        <p>
        Forgiveness is so important because everyone makes mistakes and everyone
        deserves second changes.
        </p>
        <p>
        I have forgiven my Edinburgh manager and the passage of time may have
        changed him anyway. However, I do worry sometimes, if he doesn&apos;t
        get some training in emotional intelligence, he will inflict further
        suffering on people as their manager.
        </p>
        <hr />
        <p>
        Make room in your life for forgiveness, we are all human and we all make
        mistakes.
        </p>
        <p>
        After all, how are we to learn if we can&apos;t be allowed to make a
        mistake in the first place?
        </p>
      </MusicScrollDownMessage>
    </div>
  );
}
