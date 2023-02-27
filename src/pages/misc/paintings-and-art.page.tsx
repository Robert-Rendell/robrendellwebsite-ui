import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { PageComponent } from "../../components/page.component";
import { useWindowSize } from "../../hooks/use-window-size.hook";

export function PaintingAndArt() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  return (
    <PageComponent
      route={SharedRoutes.Miscellaneous.PaintingsAndArt}
      title={SharedText.Miscellaneous.PaintingsAndArt}
    >
      <h2>
        The Scream,<i>Edvard Munch (1893)</i>
      </h2>
      <img
        width={width}
        src="https://en.wikipedia.org/wiki/The_Scream#/media/File:Edvard_Munch,_1893,_The_Scream,_oil,_tempera_and_pastel_on_cardboard,_91_x_73_cm,_National_Gallery_of_Norway.jpg"
      />
      <p>
        The Scream is a composition created by Norwegian artist Edvard Munch in
        1893. The Norwegian name of the piece is Skrik (Shriek), and the German
        title under which it was first exhibited is Der Schrei der Natur (The
        Scream of Nature)
      </p>
      <p>Expressionism</p>
      <p>Oil, tempera, pastel and crayon on cardboard</p>
      <hr />
      <h2>
        The Starry Night,<i>Vincent van Gogh (1889)</i>
      </h2>
      <img
        width={width}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
      />
      <p>
        The Starry Night (Dutch: De sterrennacht) is an oil-on-canvas painting
        by the Dutch Post-Impressionist painter Vincent van Gogh. Painted in
        June 1889, it depicts the view from the east-facing window of his asylum
        room at Saint-Rémy-de-P Oil on canvasrovence, just before sunrise, with
        the addition of an imaginary village.
      </p>
      <p>Impressionist</p>
      <p>Oil on canvas</p>
    </PageComponent>
  );
}
