import React, { useState } from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { PageViewsComponent } from "../../components/page-views.component";
import { PageViewResponse, usePageView } from "../../hooks/use-page-view.hook";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import { QuestionComponent } from "../neurochemistry/components/question.component";
import "../page.css";

export function BiomagnetismInHumanEndocrineSystemPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  const [pageViews, setPageViews] = useState<PageViewResponse>();
  usePageView(SharedRoutes.Biomagnetism.MagnetismInTheHumanEndocrineSystem, setPageViews);
  return (
    <div
      id="human-endocrine-page"
      className="standard-page-margins standard-page-styling"
    >
      <h1>
        <RobBackButton />{" "}
        {SharedText.Biomagnetism.MagnetismInTheHumanEndocrineSystem}
      </h1>
      <MusicScrollDownMessage youtubeVideoEmbedId="HxK3zqZidqo">
        <PageViewsComponent pageViews={pageViews} caption="How many now know the truth ="/>
        <QuestionComponent hrOff>
          What connects the{" "}
          <NewTabLink href="https://en.wikipedia.org/wiki/Eye_of_Horus">
            Egyptian Eye of Horus hieroglyphic
          </NewTabLink>
          , the{" "}
          <NewTabLink href="https://en.wikipedia.org/wiki/Pineal_gland">
            pineal gland
          </NewTabLink>{" "}
          of the human endocrine system, an ancient Amazonian natural
          hallucinogen called{" "}
          <NewTabLink href="https://en.wikipedia.org/wiki/Ayahuasca">
            ayahuasca
          </NewTabLink>{" "}
          (Dimethyltryptamine a.k.a DMT) and{" "}
          <NewTabLink href="https://en.wikipedia.org/wiki/Electromagnetic_induction">
            electromagnetic induction
          </NewTabLink>
          ?
        </QuestionComponent>
        <hr />
        <p>
          Humans have evolved to recognise patterns because it is vital for our
          survival to adapt to changing environments.
        </p>
        <p>
          Many people see a pattern that has emerged from thousands of years of
          religion and ancient Egyptian hieroglyphs.
        </p>
        <p>
          There has been, however, a&nbsp;
          <NewTabLink href="https://www.researchgate.net/publication/320818682_NN_-dimethyltryptamine_and_the_pineal_gland_Separating_fact_from_myth">
            journal entry
          </NewTabLink>
          &nbsp;written to separate science from myth. I am citing this as to
          write in a balanced and grounded manner.
        </p>
        <QuestionComponent>
          When does the pattern first emerge?
        </QuestionComponent>
        <p>
          This journey of joining the dots begins with human&apos;s ability to
          imagine.
        </p>
        <p>
          When you imagine things in your mind, you are using your
          &quot;mind&apos;s eye&quot; to picture the subject internally.
        </p>
        <p>
          Your &quot;mind&apos;s eye&quot; is also known as the &apos;third
          eye&apos;, which is referred to by many religions and cultures over
          millennia.
        </p>
        <p>
          Hinduism has the concept of{" "}
          <NewTabLink href="https://en.wikipedia.org/wiki/Bindi_(decoration)">
            Bindi
          </NewTabLink>{" "}
          which is a decoration on the forehead between the eyebrows marking the
          third eye.
        </p>
        <p>
          The third eye chakra in Hinduism is 1 of 7 chakra symbols and it is
          called the{" "}
          <NewTabLink href="https://en.wikipedia.org/wiki/Ajna">
            Ajna
          </NewTabLink>{" "}
          chakra.
        </p>
        <div className="centred">
          <img
            width={width / 2}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Ajna_chakra.svg/1024px-Ajna_chakra.svg.png"
          />
          <img
            width={width / 2}
            src="https://super.abril.com.br/wp-content/uploads/2018/07/site_pinta_thumb.jpg?quality=90&strip=info&w=1000&resize=500,400"
          />
        </div>
        <QuestionComponent>
          How does this link to ancient Egyptian hieroglyphs?
        </QuestionComponent>
        <p>
          The internet, being the crazy place it is, came up with a wacky
          comparison between a cross section of the human brain and the Eye of
          Horus.
        </p>
        <p>
          There&apos;s also been a{" "}
          <NewTabLink href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6649877/#:~:text=The%20Eye%20of%20Horus%20has,to%20the%20Eye%20of%20Horus.">
            research journal entry
          </NewTabLink>
          &nbsp;reviewing the current theories.
        </p>
        <div>
          <img
            width={width / 2}
            src="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6649877/bin/cureus-0011-00000004731-i03.jpg"
          />
          <img
            width={width / 2}
            src="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6649877/bin/cureus-0011-00000004731-i04.jpg"
          />
        </div>
        <p>
          I imagine at this point you have no idea where I am going with this
          topic. It&apos;s important to view all these connections (no matter
          how bizarre) to get an idea of how different cultures through the ages
          have conveyed their insight on human introspection.
        </p>
        <QuestionComponent>What is the pineal gland?</QuestionComponent>
        <p>
          The pineal gland, conarium, or epiphysis cerebri, is a small endocrine
          gland in the brain of most vertebrates. The pineal gland produces
          melatonin, a serotonin-derived hormone which modulates sleep patterns
          in both circadian and seasonal cycles.
        </p>
        <p>
          The pineal gland is located in the{" "}
          <NewTabLink href="https://en.wikipedia.org/wiki/Epithalamus">
            epithalamus
          </NewTabLink>
          , near the center of the brain, between the two hemispheres, tucked in
          a groove where the two halves of the thalamus join.
        </p>
        <div style={{ width: "100%", background: "white" }} className="centred">
          <img
            width={width / 2}
            src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Pineal_gland.png"
          />
          <img
            width={width / 2}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Endocrine_English.svg/1024px-Endocrine_English.svg.png"
          ></img>
        </div>
        <p>
          René Descartes believed the human pineal gland to be the
          &quot;principal seat of the soul&quot;.
        </p>
        <QuestionComponent>What is melatonin?</QuestionComponent>
        <p>
          Melatonin was discovered in 1958 by Aaron Lerner. It is primarily
          known in animals as a hormone released by the pineal gland in the
          brain at night and has long been associated with control of the
          sleep–wake cycle.
        </p>
        <hr />
        <p>
          In vertebrates, melatonin is involved in synchronizing circadian
          rhythms, including sleep–wake timing and blood pressure regulation,
          and in control of seasonal rhythmicity including reproduction,
          fattening, moulting and hibernation.
        </p>
        <p>
          Many of its effects are through activation of the melatonin receptors,
          while others are due to its role as an antioxidant. In plants, it
          functions to defend against oxidative stress. It is also present in
          various foods.
        </p>
        <hr />
        <p>
          See my other work in this area:&nbsp;
          <NewTabLink
            href={SharedRoutes.Neurochemistry.MelatoninIsTheKeyToCreativity}
          >
            {SharedText.Neurochemistry.MelatoninIsTheKeyToCreativity}
          </NewTabLink>
        </p>
        <p>
          I personally believe the pineal gland is crucial in creative insight
          and I have experienced epiphany first hand on multiple occasions.
        </p>
        <p>
          I believe the epiphysis cerebri (pineal gland) plays a fundamental
          role in the mechanics of epiphany.
        </p>
        <p>
          When your eyes are exposed to darkness, I believe the melatonin
          secretion signals a significant boost in your mind&apos;s eye sight.
        </p>
        <p>
          Your visual inputs (your eyes) use a huge amount of energy but when
          you are in a pitch black room, your body can easily switch off this
          expensive sense which, in turn, allows more energy to be redirected to
          your imagination, your third eye and your inner projections.
        </p>
        <p>
          This effect could be dampened by inner injections of adrenaline since
          the adrenal glands are part of the same endocrine system as melatonin.
        </p>
        <p>
          I also consider the possibility that increased adrenaline in total
          darkness due to fear could heighten your imagination / creative
          insight but in an uncontrollable emotional way. The experience might
          not be as insightful because your emotions begin to override any
          imagination processes in the up brain.
        </p>
        <QuestionComponent>
          Fascinating... so what does this have to do with{" "}
          <NewTabLink href="https://en.wikipedia.org/wiki/Ayahuasca">
            ayahuasca
          </NewTabLink>{" "}
          (Dimethyltryptamine)?
        </QuestionComponent>
        <p>
          Dimethyltryptamine{" "}
          <NewTabLink href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6088236/">
            has been found
          </NewTabLink>{" "}
          to be secreted by the pineal gland too.
        </p>
        <div className="centred">
          <img
            width={300}
            src="https://m.media-amazon.com/images/I/5171wSAYylL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
          />
        </div>
        <p>
          In &apos;The Cosmic Serpent&apos; by <i>Jeremy Narby</i>, the
          following molecular chemicals are shown to fit into serotonin
          receptors because of their similar shape.
        </p>
        <p>
          The idea presented is that, each chemical fits into the serotonin
          receptors like different keys that can all unlock the serotonin
          receptor lock, however each lifts different &quot;tumblers&quot; when
          opening the lock.
        </p>
        <div style={{ width: "100%", background: "white" }}>
          <img
            width={width / 4}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Serotonin-2D-skeletal.svg/1280px-Serotonin-2D-skeletal.svg.png"
          />
          <img
            width={width / 4}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Melatonin.svg/1280px-Melatonin.svg.png"
          />
          <img
            width={width / 4}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/DMT.svg/1920px-DMT.svg.png"
          />
          <img
            width={width / 4}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Psilocybn.svg/1280px-Psilocybn.svg.png"
          />
        </div>
        <div id="neurotransmitter-table">
          <table width={width}>
            <tr>
              <td style={{ textAlign: "center" }}>Serotonin</td>
              <td>Melatonin</td>
              <td>Dimethyltryptamine (DMT)</td>
              <td>Psilocybin</td>
            </tr>
          </table>
        </div>
        <hr />
        <p>
          In &apos;The Cosmic Serpent&apos;, shaman rituals using ayahuasca
          (Dimethyltryptamine) usually involve sitting in absolute darkness in
          the rainforest; in my eyes this means a much greater melatonin
          secretion in the pineal gland compared to in daylight.
        </p>

        <p>
          Another crucial part of the ritual is for the shaman guide to sing a
          melody.
        </p>
        <p>
          It is fascinating that music plays a part in this story as well but I
          won&apos;t explore that idea today.
        </p>
        <QuestionComponent>
          How does this all link to magnetism?
        </QuestionComponent>
        <p>
          In the last 20 years,{" "}
          <NewTabLink href="https://www.researchgate.net/profile/Simon-Baconnier-2">
            researchers in Grenoble
          </NewTabLink>{" "}
          found{" "}
          <NewTabLink href="https://www.researchgate.net/publication/3340377_Calcite_microcrystals_in_the_pineal_gland_of_the_human_brain_Second_harmonic_generators_and_possible_piezoelectric_transducers">
            calcite microcrystals
          </NewTabLink>{" "}
          present in the pineal gland. These experiments took place at the{" "}
          <NewTabLink href="https://www.esrf.fr/">
            European Synchrotron Radiation Facility (ESRF)
          </NewTabLink>{" "}
          in Grenoble where researchers are also working on Nanotechnology.
          Nanotechnology is the next step in understanding the human brain as it
          will allow us to experience the brain from the bloodstream.
        </p>
        <p>
          There is a possibility that this type of crystalline material could be
          capable of&nbsp;
          <NewTabLink href="https://en.wikipedia.org/wiki/Piezoelectricity">
            Piezoelectricity
          </NewTabLink>
          .
        </p>
        <p>
          Crystals capable of piezoelectricity turn kinetic energy into
          electrical energy, meaning when they are squeezed they produce a
          current.
        </p>
        <hr />
        <p>
          Here is an excerpt from a{" "}
          <NewTabLink href="https://www.researchgate.net/publication/247112683_Piezoelectricity_in_the_human_pineal_gland">
            research paper
          </NewTabLink>
          , 1996{" "}
          <NewTabLink href="https://www.researchgate.net/profile/Sidney-Lang">
            Sidney Lang
          </NewTabLink>{" "}
          (of Israel), on the topic:
        </p>
        <p>
          <i>
            &quot; Melatonin secretion by the pineal gland has been reported to
            be affected by exposure to electromagnetic fields (EMFs). In an
            initial investigation to determine if calcifications commonly found
            in the pineal gland could respond to EMFs by a transducer mechanism,
            studies were conducted to ascertain if pineal tissues were
            piezoelectric. Second harmonic generation (SHG) measurements showed
            that pineal tissues contained noncentrosymmetric crystals, thus
            proving the presence of piezoelectricity. Both mulberry-like and
            faceted crystalline calcifications were observed by scanning
            electron microscopy (SEM). Some of the calcifications had
            compositions similar to that of hydroxyapatite; others contained a
            high concentration of aluminum.&quot;
          </i>
        </p>
        <QuestionComponent>
          What could humans possibly be using EMF (electromagnetic fields) for
          in the pineal gland?
        </QuestionComponent>
        <div className="centred">
          <img
            width={width / 2}
            src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Simon_ushakov_last_supper_1685.jpg"
          />
          <img
            width={width / 2}
            src="https://cdn-attachments.timesofmalta.com/a43f02717b96e58bd06774fcc18273275a1a82fe-1630825057-11e8efa5-960x640.jpg"
          />
        </div>
        <hr />
        <p>
          I believe religions and cultures through the ages have been trying to
          tell us about this bioelectromagnetism through{" "}
          <NewTabLink href="https://en.wikipedia.org/wiki/Halo_(religious_iconography)">
            halos
          </NewTabLink>
          .
        </p>
        <p>
          I see this pattern in stained glass of churches, on buddhist Tibetan
          art and in Hindu paintings of the trimurti.
        </p>
        <p>
          I have a few theories for{" "}
          <NewTabLink href="https://en.wikipedia.org/wiki/Halo_(religious_iconography)">
            halos
          </NewTabLink>{" "}
          and{" "}
          <NewTabLink href="https://www.researchgate.net/publication/3340377_Calcite_microcrystals_in_the_pineal_gland_of_the_human_brain_Second_harmonic_generators_and_possible_piezoelectric_transducers">
            bioelectromagnetism
          </NewTabLink>
          :
          <ul className="ol-extra-margins">
            <li>
              <b>epiphanies and creative insight through neurotransmitters</b>;
              melatonin and dimethyltryptamine molecule secretion. It is a
              simple idea that I can back up with experience. The connection
              with halos is probably just a symbol of enlightenment through
              wisdom, discipline and insight. It requires a human that is fully
              able to self regulate their neurochemistry (and emotions) through
              their imagination.
            </li>
            <li>
              <b>the pineal gland is the electrical source of thoughts</b>; we
              know our brain is a muscle and it uses electricity through neurons
              to produce an experience. If piezoelectricity is present in the
              pineal gland, then is this where the electric current begins? In
              this theory, I&apos;m not sure what halos would represent.
            </li>
            <li>
              <b>
                bioelectromagnetism induction through piezoelectric &quot;radio
                receivers&quot; in the pineal gland
              </b>
              ; there could be an <i>internal</i> ethereal plane that we cannot
              see with our 5 known senses that allows us to see into our genetic
              past and see the learnings of ancestors before us who have{" "}
              <NewTabLink
                href={SharedRoutes.Neurochemistry.LearningAndGeneticCode}
              >
                shaped our DNA
              </NewTabLink>
              . This ethereal plane might be visible with our eyes (not just
              third eye) when one is flooded with dimethyltryptamine, for
              instance in a Amazonian ayahuasca ritual. I might add that this
              ethereal plane would have to be a dimension within one&apos;s
              self. In simple terms, you wouldn&apos;t even have to close your
              eyes to see your imagination.
            </li>
            <li>
              <b>
                bioelectromagnetism induction: humans who have strong magnetic
                fields originating from their pineal glands could possibly
                interact with other human beings who have a similar biological
                mechanism
              </b>
              . Telepathy is known to be possible through similar mappings of
              neural networks for people that live together for long periods of
              time. The traditional telepathy isn&apos;t a form of radio waves
              like pop culture would suggest, it is only of slow synchonisation
              of grown neural networks between the two humans who agree on the
              same solution (or network) for the same problems. It is as simple
              as finishing sentences for one another, or not having to use words
              to understand. The telepathy I speak of in bioelectromagnetism
              could in fact be a step beyond traditional telepathy. I have often
              wondered how such fantastic ideas have arrived into my mind and it
              sometimes feels as if knowledge is floating through the air.
            </li>
          </ul>
        </p>
      </MusicScrollDownMessage>
    </div>
  );
}
