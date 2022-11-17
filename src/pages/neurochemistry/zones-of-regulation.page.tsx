import React from 'react';
import { useWindowSize } from '../../hooks/use-window-size.hook';
import zones from '../../resources/zones.jpg';


export function ZonesOfRegulationPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 20;
  return (<div className="standard-page-margins standard-page-styling">
    <h1>Zones of Emotional Regulation</h1>
    <p>
      My sister introduced me to the&nbsp;
      <a href="https://d1uvxqwmcz8fl1.cloudfront.net/tes/resources/12068045/01f52aea-5663-46a1-8728-37740dc2363a/image?width=500&height=500&version=1567674337888">
        Zones of Regulation
      </a> a few years ago when she was teaching her school kids the topic <i>(Helen: you are a fantastic teacher)</i>.
    </p>
    <p>
      In that same conversation we shared our similar experiences of suffering which caused us to seek out coping mechanisms.
    </p>
    <p>
      As you can imagine, this chart is not just useful for children... it is for emotionally aware adults too.
    </p>
    <p>
      In July 2019, I added my own touch to the chart and I&apos;m sharing that with you here:
    </p>
    <img src={zones} width={width}/>
  </div>
  );
}
