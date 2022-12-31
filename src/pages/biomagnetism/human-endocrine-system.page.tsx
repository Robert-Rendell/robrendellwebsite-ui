import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import { QuestionComponent } from "../neurochemistry/components/question.component";
import "../page.css";

export function BiomagnetismInHumanEndocrineSystemPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  return (
    <div id="human-endocrine-page" className="standard-page-margins standard-page-styling">
      <h1>
        <RobBackButton />{" "}
        {SharedText.Biomagnetism.MagnetismInTheHumanEndocrineSystem}
      </h1>
      <MusicScrollDownMessage youtubeVideoEmbedId="BSy6b-mg7vQ">
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
          religion and ancient egyptian hieroglyphs.
        </p>
        <p>
          There has been, however, a&nbsp;
          <NewTabLink href="https://www.researchgate.net/publication/320818682_NN_-dimethyltryptamine_and_the_pineal_gland_Separating_fact_from_myth">
            journal entry
          </NewTabLink>
          &nbsp;written to separate science from myth. I am citing this as to
          write in a balanced manner.
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
          The pineal gland is located in the epithalamus, near the center of the
          brain, between the two hemispheres, tucked in a groove where the two
          halves of the thalamus join.
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
          Melatonin was discovered in 1958. It is primarily known in animals as
          a hormone released by the pineal gland in the brain at night and has
          long been associated with control of the sleep–wake cycle.
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
          Dimethyltryptamine has been found to be secreted by the pineal gland
          too.
        </p>
        <div className="centred">
          <img
            width={width / 3}
            src="https://m.media-amazon.com/images/I/5171wSAYylL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
          />
        </div>
        <p>
          In this book, the following molecular chemicals are shown to fit into serotonin receptors because of their similar shape.
        </p>
        <p>
          The idea presented is that, each chemical fits into the serotonin receptors like different keys that can all unlock the
          serotonin receptor lock, however each lifts different &quot;tumblers&quot; when opening the lock.
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
        <p></p>
        <QuestionComponent>
          And how does this all link to magnetism?
        </QuestionComponent>
        <p>
          In the last 20 years, researchers in Grenoble have found calcite
          microcrystals present in the pineal gland.
        </p>
        <p>
          There is a possibility that this type of material could be capable
          of&nbsp;
          <NewTabLink href="https://en.wikipedia.org/wiki/Piezoelectricity">
            Piezoelectricity
          </NewTabLink>
          .
        </p>
        <p></p>
        <p>https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6088236/ -dmt</p>
        <p>
          https://revibeenergy.com/piezoelectric-electromagnetic-harvesting/
        </p>
        <p>https://pubmed.ncbi.nlm.nih.gov/12224052/ 2002</p>
        <p>https://pubmed.ncbi.nlm.nih.gov/21894451/ 2012</p>
        <p>https://pubmed.ncbi.nlm.nih.gov/21544842/ 2011</p>
        <p>https://pubmed.ncbi.nlm.nih.gov/36403265/ 2022 October</p>
        <p>https://en.wikipedia.org/wiki/Ferroelectricity</p>
        <p>
          https://www.sciencelearn.org.nz/resources/1010-does-blood-have-magnetic-properties#:~:text=The%20iron%20part%20of%20haeme,or%20paramagnetic%20than%20oxygenated%20blood.
          In the 1930s, it was found that haemoglobin has magnetic properties
          that are different depending on whether it is carrying oxygen or not.
          When the haemoglobin is not carrying oxygen it is more sensitive or
          paramagnetic than oxygenated blood. The earth also has a magnetic
          field, which is caused by electrical currents within the earth. The
          strength of a magnetic field is measured in teslas (T). The Earth’s
          magnetic field is about 50µT in New Zealand. Find out more about this
          in our article, fossil compass. Much higher magnetic fields are used
          in other magnets.
        </p>
        <p>
          https://www.amazon.co.uk/Piezoelectricity-Springer-Materials-Science-Heywang/dp/3540686800/ref=sr_1_1?keywords=Piezoelectricity%3A+Evolution+and+Future+of+a+Technology&qid=1672409630&sr=8-1
        </p>
        <p>https://www.bems.org/</p>
        <p>https://onlinelibrary.wiley.com/doi/epdf/10.1002/bem.10053</p>
      </MusicScrollDownMessage>
    </div>
  );
}
