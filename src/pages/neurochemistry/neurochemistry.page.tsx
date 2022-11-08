import React from 'react';
import Table from 'react-bootstrap/Table';

export function NeurochemistryPage() {
  return (<div className="standard-page-margins standard-page-styling">
    <h1>Rob&apos;s Mnemonic for Happiness</h1>
    <i>Adapted from Christopher Bergland&apos;s: <a href="https://www.psychologytoday.com/gb/blog/the-athletes-way/201211/the-neurochemicals-happiness">The Neurochemicals of Happiness</a></i>
    <hr/>
    <p className='centred'>
        Sometimes in life, all you need is the right question.
    </p>
    <hr/>
    <p>The year is 2018 and I had a sudden epiphany after being bullied, daily, by my line manager (and his other managees) over a period of 11 months in my Edinburgh software job.</p>
    <p>I was so depressed with the job and just wanted to feel some happiness, so I thought about how I felt when I got my uni results.</p>
    <p>Getting my uni results was a moment like no other; the rapture I felt was so strong it seemed like those around me shared my emotional experience.</p>
    <p>
        The question that came to mind was: <b>Do humans secrete chemicals from their skin when they are elated with happiness?</b>
    </p>
    <p>This is how I found Christopher Bergland&apos;s work on The Athlete&apos;s Way. In my eyes a bible for emotional self regulation via exercise.</p>
    <hr/>
    <h2 className='centred'>As promised... Here is my Mnemonic</h2>
  
    <h1 className='centred'>MC - EDOEGSA</h1>
    <Table variant="dark" hover>
      <thead>
        <tr>
          <th></th>
          <th>Hormone</th>
          <th>Role</th>
          <th>Tips</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>M</td>
          <td>Melotonin</td>
          <td>Regulates sleep / wake cycle</td>
          <td>Make sure light gets in your eyes, make sure darkness gets in your eyes.</td>
        </tr>
        <tr>
          <td>C</td>
          <td>Cortisol</td>
          <td>Stress hormone</td>
          <td>Avoid getting stressed and take your time, be patient.</td>
        </tr>
        <tr>
          <td>E</td>
          <td>Endocannabinoids</td>
          <td>Relaxation / Anti-Anxiety</td>
          <td>Sustained, regular exercise.</td>
        </tr>
        <tr>
          <td>D</td>
          <td>Dopamine</td>
          <td>Reward hit system (similar in dogs to assist learning)</td>
          <td>To do list, achievable bullet points that you enjoy ticking off when done</td>
        </tr>
        <tr>
          <td>O</td>
          <td>Oxytocin</td>
          <td>Love</td>
          <td>Find a partner in life, or a dog friend who you can take on walkies and get cuddles</td>
        </tr>
        <tr>
          <td>E</td>
          <td>Endorphins</td>
          <td>Self produced painkillers</td>
          <td>HIT class, high intensity exercise (BPM high), jumping jacks</td>
        </tr>
        <tr>
          <td>G</td>
          <td>GABA</td>
          <td>Relaxation / Anti-Anxiety</td>
          <td>Stretching, Concentration Meditation, Sunlight Meditation, Yoga</td>
        </tr>
        <tr>
          <td>S</td>
          <td>Serotonin</td>
          <td>Good Mood / Confidence</td>
          <td>The &quot;I did it!&quot; feeling, gained from genuine self defined success</td>
        </tr>
        <tr>
          <td>A</td>
          <td>Adrenaline</td>
          <td>Fight or Flight mechanism</td>
          <td>Do things that scare you (in a safe situation).</td>
        </tr>
      </tbody>
    </Table>
  </div>);
}