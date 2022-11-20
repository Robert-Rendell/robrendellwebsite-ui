import { P5Instance } from "react-p5-wrapper";

export const goldenSpiralAuthor = "https://editor.p5js.org/ktorn/sketches";
export const fibonacciSketch = (p5: P5Instance) => {
  let size: number;
  let selected = 8;

  p5.setup = () => {
    p5.createCanvas(275, 200);
    size = 150;
  };

  p5.mouseClicked = () => {
    if (
      0 <= p5.mouseX &&
      p5.mouseX < p5.width &&
      0 <= p5.mouseY &&
      p5.mouseY < p5.height
    ) {
      selected = selected - 1;
      if (selected < 0) {
        selected = 10;
      }
    }
  };

  p5.draw = () => {
    p5.background(220);

    p5.fill(255);

    const startX = 10;
    const startY = 10;

    p5.translate(startX, startY);

    let strokeW = 2;

    for (let i = 0; i < 10; i++) {
      strokeW += 2;
      p5.strokeWeight(strokeW);
      if (selected === i) {
        p5.fill(255, 0, 0);
      }
      drawSquare(size);

      p5.rotate(p5.HALF_PI);
      p5.scale(0.618);
      p5.translate(0, -2.618 * size);
    }
  };

  function drawSquare(size: number) {
    p5.push();
    p5.push();
    p5.rect(0, 0, size, size);
    p5.pop();
    p5.noFill();

    p5.arc(size, size, 2 * size, 2 * size, p5.PI, p5.PI + p5.HALF_PI);
    p5.pop();
  }
};
