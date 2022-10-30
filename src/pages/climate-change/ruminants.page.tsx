import React from 'react';
import { useWindowSize } from '../../hooks/use-window-size.hook';
import '../page.css';
import { ClimateChangeBackButton } from './components/back-button.component';

export function RuminantsPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>
        <ClimateChangeBackButton/>
        Ruminants: Cut down on Milk and Beef!
      </h1>
      <p>
        We have a lot of cows in the world. 
      </p>
      <p>
        Basically, cut down on the amount of beef / steaks are you eating. Also, you can reduce the amount of cow&apos;s milk you drink.
      </p>
      <p>
        All the science is here; greenhouse gases (namely <u>carbon dioxide</u> and <u>methane</u>) are produced by huge amounts of ruminating cattle, being bred to provide milk and beef for humans.
      </p>
      <p>
        <a 
          href="https://en.wikipedia.org/wiki/Ruminant#Rumen_microbiology" 
          target="_blank"  
          rel="noreferrer">
            Rumen Microbiology (Wikipedia)
        </a>
      </p>
            
      <p>
        <img src="https://www.mun.ca/biology/scarr/142097_ruminant_digestion.jpg" width={width} height={width/2} />
      </p>
      
    </div>
  );
}
