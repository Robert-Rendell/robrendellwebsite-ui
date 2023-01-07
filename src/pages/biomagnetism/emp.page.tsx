import React from "react";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { QuoteComponent } from "../../components/quote.component";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import "../page.css";

export function ElectromagneticPulsesPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>
        <RobBackButton /> {SharedText.Biomagnetism.ElectromagneticPulses}
      </h1>
      <MusicScrollDownMessage youtubeVideoEmbedId="rpUD9coQFII">
        <QuoteComponent year={2018} author="Nikita Stenko, Software Engineer">
          Certain types of EMP can actually kill you, effectively disabling your
          brain. Lightning strike is one example of EMP. Nuclear weapon EMP will
          also damage humans. The brain functions differently from a electrical
          device, we do not have any wires that electrons flow through, so there
          is nothing to be disrupted by most EMPs. The electrical pulse in brain
          that we have is between neurons. But the signal actually travels
          chemically from one neuron to another. And since neurons are very
          short and not at all conductive, they do not pick up currents from
          EMPs. However, a strong, localized magnetic field can disrupt normal
          functioning of regions of the brain. For instance it can be used on
          the visual cortex to cause temporary blindness (actually, can cause a
          condition called{" "}
          <NewTabLink href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2234142/)">
            blindsight
          </NewTabLink>
          ).
        </QuoteComponent>
        <hr />
        <QuoteComponent year={2018} author="Nathan Whitmore, Neuroscientist">
          We are affected by EMPs. Brain researchers frequently use a technique
          called{" "}
          <NewTabLink href="https://en.wikipedia.org/wiki/Transcranial_magnetic_stimulation">
            Transcranial magnetic stimulation
          </NewTabLink>{" "}
          which literally generates an EMP directed at a particular brain region
          in order to temporarily disrupt its function. By looking at the
          impairments created by this kind of stimulation we can investigate the
          role of different brain regions. However, an EMP will only cause a
          temporary disruption of our brain function while it will permanently
          damage a lot of electronics. The reason for this is that excessive
          current and voltage tend to damage the resistor and semiconductor
          elements in electric circuits, causing the system to short circuit.
          The equivalent elements in the brain (cell membranes and ion channels)
          are a lot more robust.
        </QuoteComponent>
      </MusicScrollDownMessage>
    </div>
  );
}
