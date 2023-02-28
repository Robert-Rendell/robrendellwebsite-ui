import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { PageComponent } from "../../components/page.component";
import { ArtworkComponent } from "./components/artwork.component";

export function PaintingsAndArtPage() {
  return (
    <PageComponent
      route={SharedRoutes.Miscellaneous.PaintingsAndArt}
      title={SharedText.Miscellaneous.PaintingsAndArt}
    >
      <ArtworkComponent
        title="Liberty Leading the People"
        author="Eugène Delacroix"
        year={1830}
        imageUrl={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg/1280px-Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg"
        }
        era="Expressionism"
        medium="Oil on canvas"
        orientation="landscape"
      >
        Liberty Leading the People commemorates the July Revolution of 1830,
        which toppled King Charles X. A woman of the people with a Phrygian cap
        personifying the concept of Liberty leads a varied group of people
        forward over a barricade and the bodies of the fallen, holding the flag
        of the French Revolution - the tricolour, which again became
        France&apos;s national flag after these events - in one hand and
        brandishing a bayonetted musket with the other.
      </ArtworkComponent>
      <hr />
      <ArtworkComponent
        title="The Scream"
        author="Edvard Munch"
        year={1893}
        imageUrl={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/800px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg"
        }
        era="Expressionism"
        medium="Oil, tempera, pastel and crayon on cardboard"
        orientation="portrait"
      >
        The Scream is a composition created by Norwegian artist Edvard Munch in
        1893. The Norwegian name of the piece is Skrik (Shriek), and the German
        title under which it was first exhibited is Der Schrei der Natur (The
        Scream of Nature)
      </ArtworkComponent>
      <hr />
      <ArtworkComponent
        title="The Starry Night"
        author="Vincent van Gogh"
        year={1889}
        imageUrl={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
        }
        era="Impressionist"
        medium="Oil on canvas"
        orientation="landscape"
      >
        The Starry Night (Dutch: De sterrennacht) is an oil-on-canvas painting
        by the Dutch Post-Impressionist painter Vincent van Gogh. Painted in
        June 1889, it depicts the view from the east-facing window of his asylum
        room at Saint-Rémy-de-P Oil on canvasrovence, just before sunrise, with
        the addition of an imaginary village.
      </ArtworkComponent>
    </PageComponent>
  );
}
