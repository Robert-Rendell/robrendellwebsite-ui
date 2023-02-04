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
      <h2>Mahatma Gandhi</h2>
      <p>
        Mahatma Gandhi (1869-1948) was an Indian independence activist who was
        the leader of India&apos;s non-violent independence movement against
        British rule. He was known for his philosophy of nonviolent resistance,
        which he applied in his political activism and civil rights movements.
      </p>
      <p>
        Gandhi&apos;s belief in non-violence and civil disobedience inspired
        social justice and freedom movements around the world, including the
        American civil rights movement led by Martin Luther King Jr. He is
        widely regarded as one of the greatest leaders in modern history.
      </p>
      <ul>
        <li>
          &quot;The weak can never forgive. Forgiveness is the attribute of the
          strong.&quot;
        </li>
        <li>
          &quot;An eye for an eye will only make the whole world blind.&quot;
        </li>
        <li>
          &quot;Strength does not come from physical capacity. It comes from an
          indomitable will.&quot;
        </li>
        <li>
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </li>
        <li>
          &quot;Happiness is when what you think, what you say, and what you do
          are in harmony.&quot;
        </li>
        <li>
          &quot;You must be the change you wish to see in the world.&quot;
        </li>
        <li>
          &quot;The difference between what we do and what we are capable of
          doing would suffice to solve most of the worlds problems.&quot;
        </li>
        <li>&quot;In a gentle way, you can shake the world.&quot;</li>
        <li>
          &quot;Non-violence is a powerful and just weapon, which cuts without
          wounding and ennobles the man who wields it.&quot;
        </li>
        <li>&quot;The good man is the friend of all living things.&quot;</li>
      </ul>
      <hr />
      <h2>Martin Luther King Jr</h2>
      <p>
        Martin Luther King Jr. (1929-1968) was an American Baptist minister and
        activist who became the most visible spokesperson and leader in the
        civil rights movement from 1954 until his assassination in 1968. He is
        best known for his role in the advancement of civil rights using
        nonviolent civil disobedience based on his Christian beliefs.
      </p>
      <p>
        His campaigns and peaceful protests helped to end the legal segregation
        of African American citizens in the South and other areas of the United
        States. King&apos;s efforts and message of equality and justice had a
        profound impact on the Civil Rights Movement and continue to inspire
        social justice and human rights movements around the world.
      </p>
      <ul>
        <li>
          &quot;I have a dream that my four little children will one day live in
          a nation where they will not be judged by the color of their skin but
          by the content of their character.&quot;
        </li>
        <li>
          &quot;Darkness cannot drive out darkness; only light can do that. Hate
          cannot drive out hate; only love can do that.&quot;
        </li>
        <li>&quot;The time is always right to do what is right.&quot;</li>
        <li>
          &quot;Injustice anywhere is a threat to justice everywhere.&quot;
        </li>
        <li>
          &quot;Faith is taking the first step even when you don&apos;t see the
          whole staircase.&quot;
        </li>
        <li>
          &quot;Our lives begin to end the day we become silent about things
          that matter.&quot;
        </li>
        <li>
          &quot;I have decided to stick with love. Hate is too great a burden to
          bear.&quot;
        </li>
        <li>
          &quot;The ultimate measure of a man is not where he stands in moments
          of comfort and convenience, but where he stands at times of challenge
          and controversy.&quot;
        </li>
        <li>
          &quot;The nonviolent resister does not seek to humiliate or defeat the
          opponent but to win his friendship and understanding.&quot;
        </li>
        <li>
          &quot;The function of education is to teach one to think intensively
          and to think critically. Intelligence plus character - that is the
          goal of true education.&quot;
        </li>
      </ul>
      <hr/>
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
          &quot;Waste no more time arguing about what a good human should be. Be
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
      <hr />
      <h2>René Descartes</h2>
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
          &quot;The best friend is the human who in wishing me well wishes it
          for my sake.&quot;
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
        <li>&quot;The measure of a human is what he does with power.&quot;</li>
        <li>
          &quot;One of the penalties for refusing to participate in politics is
          that you end up being governed by your inferiors.&quot;
        </li>
        <li>&quot;We are twice armed if we fight with faith.&quot;</li>
      </ul>
      <hr />
    </div>
  );
}
