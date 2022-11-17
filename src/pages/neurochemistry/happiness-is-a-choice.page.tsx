import React from 'react';
import { useWindowSize } from '../../hooks/use-window-size.hook';


export function HappinessIsAChoicePage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 20;
  return (<div className="standard-page-margins standard-page-styling">
    <h1>Happiness is a Choice</h1>
    <h1><i>For those with food, water, shelter and their health</i></h1>
    <p className="centred">
        Why are you depressed?
    </p>
    <p>
        You don&apos;t have any medical conditions affecting your neurochemistry.
    </p>
    <p>
        Then the reason is within your mind.
    </p>
    <hr/>
    <p>
        You can control your neurochemistry, just by using your imagination.
    </p>
    <p>
        For example, think of a time that you were very scared, or a time you did a skydive or even just when you started high school.
    </p>
    <p>
        Replaying that memory in your mind makes your heart rate increase, 
    </p>
  </div>
  );
}
