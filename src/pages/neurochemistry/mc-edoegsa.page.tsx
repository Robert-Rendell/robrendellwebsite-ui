import React from "react";
import Table from "react-bootstrap/Table";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import { useWindowSize } from "../../hooks/use-window-size.hook";

export function MCEDOEGSAPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  usePageView(SharedRoutes.Neurochemistry.McEdoegsa);
  return (
    <div
      id="mc-edoegsa-page"
      className="standard-page-margins standard-page-styling black-bg-auto black-bg"
    >
      <h1>
        <RobBackButton /> {SharedText.Neurochemistry.McEdoegsa}
      </h1>
      <MusicScrollDownMessage youtubeVideoUrl="https://www.youtube.com/embed/NZwYNrHL-rw">
        <i>
          Adapted from Christopher Bergland&apos;s:{" "}
          <NewTabLink href="https://www.psychologytoday.com/gb/blog/the-athletes-way/201211/the-neurochemicals-happiness">
            The Neurochemicals of Happiness
          </NewTabLink>
        </i>
        <hr />
        <p className="centred">
          Sometimes in life, all you need is the right question.
        </p>
        <hr />
        <p>
          The year is 2018 and I had a sudden epiphany after being bullied,
          daily, by my line manager (and his other managees) over a period of 11
          months in my Edinburgh software job.
        </p>
        <p>
          I was so depressed with the job and just wanted to feel some
          happiness, so I thought about how I felt when I got my uni results.
        </p>
        <p>
          Getting my uni results was a moment like no other; the rapture I felt
          was so strong it seemed like those around me shared my emotional
          experience.
        </p>
        <p>
          The question that came to mind was:{" "}
          <i>
            Do humans secrete chemicals from their skin when they are elated
            with happiness?
          </i>
        </p>
        <p>
          This is how I found Christopher Bergland&apos;s work on{" "}
          <NewTabLink href="https://www.amazon.co.uk/Athletes-Way-Sweat-Biology-Bliss/dp/0312355866">
            The Athlete&apos;s Way
          </NewTabLink>
          . In my eyes, a bible for emotional self regulation via exercise.
        </p>
        <hr />
        <h2 className="centred">As promised... here is my mnemonic:</h2>

        <br />
        <h1 className="centred">MC - EDOEGSA</h1>
        <br />
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
              <td>Melatonin</td>
              <td>Regulates sleep / wake cycle</td>
              <td>
                Make sure light gets in your eyes, make sure darkness gets in
                your eyes.
              </td>
            </tr>
            <tr>
              <td>C</td>
              <td>Cortisol</td>
              <td>Stress hormone</td>
              <td>Avoid getting stressed and take your time, be patient.</td>
            </tr>
            <tr>
              <td>E</td>
              <td>
                {width < 600 ? (
                  <>
                    Endo-
                    <br />
                    canna-
                    <br />
                    binoids
                  </>
                ) : (
                  "Endocannabinoids"
                )}
              </td>
              <td>Relaxation / Anti-Anxiety</td>
              <td>Sustained, regular exercise.</td>
            </tr>
            <tr>
              <td>D</td>
              <td>Dopamine</td>
              <td>Reward hit system (similar in dogs to assist learning)</td>
              <td>
                To do list, achievable bullet points that you enjoy ticking off
                when done
              </td>
            </tr>
            <tr>
              <td>O</td>
              <td>Oxytocin</td>
              <td>Love</td>
              <td>
                Find a partner in life, or a dog friend who you can take on
                walkies and get cuddles
              </td>
            </tr>
            <tr>
              <td>E</td>
              <td>Endorphins</td>
              <td>Self produced painkillers</td>
              <td>
                HIIT class, high intensity exercise (BPM high), jumping jacks
              </td>
            </tr>
            <tr>
              <td>G</td>
              <td>GABA</td>
              <td>Relaxation / Anti-Anxiety</td>
              <td>
                Stretching, Concentration Meditation, Sunlight Meditation, Yoga
              </td>
            </tr>
            <tr>
              <td>S</td>
              <td>Serotonin</td>
              <td>Good Mood / Confidence</td>
              <td>
                The &quot;I did it!&quot; feeling, gained from genuine self
                defined success
              </td>
            </tr>
            <tr>
              <td>A</td>
              <td>Adrenaline</td>
              <td>Fight or Flight mechanism</td>
              <td>Do things that scare you (in a safe situation).</td>
            </tr>
          </tbody>
        </Table>
      </MusicScrollDownMessage>
    </div>
  );
}
