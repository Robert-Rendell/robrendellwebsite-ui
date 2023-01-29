import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { NewTabLink } from "../../components/new-tab-link.component";
import { usePageView } from "../../hooks/use-page-view.hook";

export function PhilosophyPage() {
  usePageView(SharedRoutes.Miscellaneous.Philosophy);

  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>{SharedText.Miscellaneous.Philosophy}</h1>
      <hr />
      <h2>Plato</h2>
      <p>
        Plato lived in ancient Greece in the 5th and 4th century BCE. He was a
        student of Socrates and a teacher of Aristotle, and is considered one of
        the founders of Western philosophy.
      </p>
      <ul>
        <li>&quot;At the touch of love everyone becomes a poet.&quot;</li>
        <li>&quot;Ignorance, the root and stem of all evil.&quot;</li>
        <li>&quot;Courage is knowing what not to fear.&quot;</li>
        <li>
          &quot;The heaviest penalty for declining to rule is to be ruled by
          someone inferior to yourself.&quot;
        </li>
        <li>
          &quot;At the height of laughter, the universe is flung into a
          kaleidoscope of new possibilities.&quot;
        </li>
        <li>
          &quot;We can easily forgive a child who is afraid of the dark; the
          real tragedy of life is when men are afraid of the light.&quot;
        </li>
        <li>
          &quot;Knowledge which is acquired under compulsion obtains no hold on
          the mind.&quot;
        </li>
        <li>&quot;The measure of a man is what he does with power.&quot;</li>
        <li>
          &quot;One of the penalties for refusing to participate in politics is
          that you end up being governed by your inferiors.&quot;
        </li>
        <li>&quot;We are twice armed if we fight with faith.&quot;</li>
      </ul>
      <hr />
      <h2>Aristotle</h2>
      <p>
        Aristotle was a Greek philosopher and polymath who lived from 384 BCE to
        322 BCE. He was a student of Plato and tutored Alexander the Great.
      </p>
      <p>
        Aristotle&apos;s works covered a wide range of topics, including logic,
        metaphysics, ethics, politics, biology, and aesthetics. He is considered
        one of the greatest thinkers in the history of Western philosophy, and
        his works have been extremely influential in the development of various
        disciplines such as science, theology, politics, and literary theory.
      </p>
      <p>
        He founded the Lyceum, a school of philosophy in Athens, and his pupils
        included some of the most important figures of ancient Greek thought,
        such as Theophrastus and Eudemus.
      </p>
      <ul>
        <li>
          &quot;Happiness is the meaning and the purpose of life, the whole aim
          and end of human existence.&quot;
        </li>
        <li>
          &quot;It is the mark of an educated mind to be able to entertain a
          thought without accepting it.&quot;
        </li>
        <li>&quot;The whole is greater than the sum of its parts.&quot;</li>
        <li>
          &quot;We are what we repeatedly do. Excellence, then, is not an act,
          but a habit.&quot;
        </li>
        <li>
          &quot;The best friend is the man who in wishing me well wishes it for
          my sake.&quot;
        </li>
        <li>
          &quot;The only true wisdom is in knowing you know nothing.&quot;
        </li>
        <li>
          &quot;The aim of art is to represent not the outward appearance of
          things, but their inward significance.&quot;
        </li>
        <li>
          &quot;Love is composed of a single soul inhabiting two bodies.&quot;
        </li>
        <li>&quot;Friendship is a single soul dwelling in two bodies.&quot;</li>
        <li>
          &quot;The roots of education are bitter, but the fruit is sweet.&quot;
        </li>
      </ul>
      <hr />
      <h2>Rene Descartes</h2>
      <p>
        René Descartes was a French philosopher, mathematician, and scientist
        who is considered a key figure in the development of the scientific
        method. His work in mathematics and physics had a significant impact on
        the development of modern science.
      </p>
      <ul>
        <li>&quot;I think, therefore I am.&quot;</li>
        <li>
          &quot;The first precept was never to accept a thing as true until I
          knew it as such.&quot;
        </li>
        <li>
          &quot;The greatest minds are capable of the greatest vices as well as
          of the greatest virtues.&quot;
        </li>
        <li>
          &quot;It is not enough to have a good mind; the main thing is to use
          it well.&quot;
        </li>
        <li>
          &quot;The reading of all good books is like a conversation with the
          finest minds of past centuries.&quot;
        </li>
        <li>&quot;Doubt is the origin of wisdom.&quot;</li>
        <li>
          &quot;It is not what we do, but also what we do not do, for which we
          are accountable.&quot;
        </li>
        <li>
          &quot;The senses deceive from time to time, and it is prudent never to
          trust wholly those who have deceived us even once.&quot;
        </li>
        <li>
          &quot;The mind is like a mirror; it only reflects what is placed
          before it.&quot;
        </li>
        <li>
          &quot;The greatest minds are capable of the greatest vices as well as
          of the greatest virtues.&quot;
        </li>
      </ul>
      <hr />
      <h2>Marcus Aurelius</h2>
      <p>
        Marcus Aurelius was a Roman emperor and philosopher who ruled from 161
        to 180 AD. He is best known for his philosophical writings, particularly
        his{" "}
        <NewTabLink href="https://www.amazon.co.uk/Meditations-Penguin-Classics-Marcus-Aurelius/dp/0140449337/ref=asc_df_0140449337/?tag=googshopuk-21&linkCode=df0&hvadid=310979557093&hvpos=&hvnetw=g&hvrand=7569480679117898609&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9046786&hvtargid=pla-448425242835&psc=1&th=1&psc=1">
          Meditations
        </NewTabLink>
        , which remain popular to this day.
      </p>
      <p>
        He was a Stoic philosopher and believed in living a virtuous life,
        maintaining self-control and accepting the things that he could not
        change. He is considered one of the Five Good Emperors of Rome, and his
        rule was marked by relative peace and prosperity.
      </p>
      <p>
        Marcus Aurelius was a strong believer in the concept of &quot;stoic
        joy&quot; which is the ability to find joy in life regardless of the
        external circumstances. He died in 180 AD, after a long illness.
      </p>
      <ul>
        <li>
          &quot;The best revenge is to be unlike him who performed the
          injury.&quot;
        </li>
        <li>
          &quot;You have power over your mind - not outside events. Realize
          this, and you will find strength.&quot;
        </li>
        <li>
          &quot;The universe is change; our life is what our thoughts make
          it.&quot;
        </li>
        <li>
          &quot;Waste no more time arguing about what a good man should be. Be
          one.&quot;
        </li>
        <li>
          &quot;The happiness of your life depends upon the quality of your
          thoughts.&quot;
        </li>
        <li>
          &quot;Accept the things to which fate binds you, and love the people
          with whom fate brings you together, but do so with all your
          heart.&quot;
        </li>
        <li>
          &quot;The universe is change; our life is what our thoughts make
          it.&quot;
        </li>
        <li>
          &quot;The soul becomes dyed with the color of its thoughts.&quot;
        </li>
        <li>
          &quot;The best revenge is to be unlike him who performed the
          injury.&quot;
        </li>
        <li>
          &quot;If you are distressed by anything external, the pain is not due
          to the thing itself, but to your estimate of it; and this you have the
          power to revoke at any moment.&quot;
        </li>
      </ul>
    </div>
  );
}
