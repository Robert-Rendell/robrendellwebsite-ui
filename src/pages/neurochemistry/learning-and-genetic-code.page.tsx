import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { QuoteComponent } from "../../components/quote.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import { QuestionComponent } from "./components/question.component";

export function LearningAndGeneticCodePage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  usePageView(SharedRoutes.Neurochemistry.LearningAndGeneticCode);
  return (
    <div className="standard-page-margins standard-page-styling black-bg-auto black-bg">
      <h1>
        <RobBackButton /> {SharedText.Neurochemistry.LearningAndGeneticCode}
      </h1>
      <MusicScrollDownMessage youtubeVideoUrl="https://www.youtube.com/embed/F3xa8BVFF4k">
        <QuestionComponent
          questionText="Training your frontal brain, subconscious and finally, altering your
        genetic code."
          hrOff
        />
        <hr />
        <p>
          To begin, it&apos;s worth noting I have no scientific knowledge of
          genetics.
        </p>
        <p>
          The point I want to get across from this page is this: that when you
          learn something so well, eventually, right down at the back of your
          skull in your brainstem, that learning turns into alterations in your
          genetic code.
        </p>
        <p>
          In order to describe this idea, you need to understand another
          conclusion I have come to...
          <u></u>
        </p>
        <QuestionComponent questionText="There isn't just one brain, there are three." />
        <p>
          There is a lovely pattern that I see emerge in human culture and
          especially in our religious belief systems.
        </p>
        <p>
          In Christianity, that pattern is the{" "}
          <NewTabLink href="https://en.wikipedia.org/wiki/Trinity">
            Holy Trinity
          </NewTabLink>
          , or in Hinduism it is the{" "}
          <NewTabLink href="https://en.wikipedia.org/wiki/Trimurti">
            Trimurti
          </NewTabLink>
          .
        </p>
        <p>
          In my eyes, it makes sense to me that the father, son and holy ghost
          of (the Holy Trinity) is a perfect shape to represent the human
          brain.&nbsp; (
          <NewTabLink href="https://en.wikipedia.org/wiki/Bismillah">
            Bismillah
          </NewTabLink>
          !)
        </p>
        <hr />
        <p>
          The three separate brains, in my opinion, are the Cerebrum (up brain),
          the Cerebellum (down brain) and finally the Brainstem.
        </p>
        <p>
          Mapping these to the Holy Trinity (in the context of learning) we
          have:
          <ol>
            <li>
              Cerebrum = Father = Conscious mind = Development environment =
              Prototype code = Slow
            </li>
            <li>
              Cerebellum = Son = Subconscious mind = Staging environment =
              Refactored code = Fast{" "}
            </li>
            <li>
              Brainstem = Holy Ghost = Instinctual mind = Production environment
              = Live code = Lightning fast nervous system reflexes
            </li>
          </ol>
        </p>
        <hr />
        <p>
          The reason this mapping works so well, in my mind, is because of the
          paternal/maternal instinct in all of us.
        </p>
        <p>
          The father (cerebrum) has to be the adult who creates order and logic
          for the other two. Learning begins here in your conscious mind.
        </p>
        <p>
          The son (cerebellum) is your inner child, who is listening to all
          sensory inputs in disorder. An unordered, raw, powerful, tried and
          tested, reptillian platform on which our primate platform evolved.
        </p>
        <p>
          The holy ghost (brainstem) is where it all began and it connects your
          thinking muscles to the rest of the muscles in your body.
        </p>
        <div className="centred">
          <img
            width={width / 2}
            src="https://www.hopkinsmedicine.org/-/media/images/health/1_-conditions/brain/brain-main-parts.ashx"
          />
        </div>
        <hr />
        <p>Some practical examples:</p>
        <ul>
          <li>
            Serena Williams - Tennis - she actively decides during a match, when
            to use brainstem, cerebellum and cerebrum thinking;
          </li>
          <li>
            Teaching myself new folk tunes on the fiddle/violin. 1) Learning 2)
            Habit 3) Reflex;
          </li>
          <li>
            Getting taught Judo I have witnessed the speed of which some of
            those well trained can execute the moves;
          </li>
          <li>
            Watching the speed at which racing car drivers have to mentally
            perform.
          </li>
        </ul>
        <QuestionComponent questionText="What can I take away from this?" />
        <p>
          Well... I believe what this means is, we have control over our own
          programming and thus by logic: humans are self-programming!
        </p>
        <p>
          The abstract thinking muscle that is used for art, music, maths and
          philosophy is a trait that can be passed on to your children.
        </p>
        <p>
          I believe you can{" "}
          <NewTabLink href="https://genome.gov/genetics-glossary/Mutation#:~:text=Mutations%20can%20result%20from%20errors,cells)%20are%20not%20passed%20on">
            actively influence
          </NewTabLink>{" "}
          your genetic programming (on a daily basis) and have a say in what
          traits, those inheriting from you, receive.
        </p>
        <p>
          The other big takeaway is confirmation of something you&apos;ve heard
          a hundred times before, but with my slant included:
        </p>
        <QuoteComponent year={2023}>
          Practice makes perfect; practice also makes learning available to your
          subconscious mind (firstly cerebellar, then instinctual).
        </QuoteComponent>
        <QuestionComponent>
          Rob... Isn&apos;t a huge part of what you call &quot;inheriting
          traits&quot;, actually just the socio-economic factor?
        </QuestionComponent>
        <p>
          It&apos;s undoubtedly true that within a single generation (or
          iteration) of humans, your DNA surely cannot mutate enough to the
          point where we can detect it in complex human behaviours (or talents)
          - and a step further, attribute it all to inherited DNA.
        </p>
        <p>
          However, over thousands of generations, repeated training of the same muscles (in your
          brain, for example) surely would eventually result in visible inherited traits.
        </p>
        <p>
          However, in that same space, over a single generation there are so
          many socio-economic factors that also play a fundamental role in the
          muscles you use: influence; without naming all other factors.
        </p>
      </MusicScrollDownMessage>
    </div>
  );
}
