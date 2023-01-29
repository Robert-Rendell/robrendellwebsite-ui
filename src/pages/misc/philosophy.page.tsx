import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { usePageView } from "../../hooks/use-page-view.hook";
import { useWindowSize } from "../../hooks/use-window-size.hook";

export function PhilosophyPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
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
    </div>
  );
}
