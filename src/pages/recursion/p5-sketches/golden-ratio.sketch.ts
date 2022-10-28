import { P5Instance } from 'react-p5-wrapper';

/*
  Tutorial by me :)
    https://www.youtube.com/watch?v=RrSOv9FH6uo

  inspiration + explanation for golden ratio: 
    Numberphile - The Golden Ratio (why it is so irrational)
    https://www.youtube.com/watch?v=sj8Sg8qnjOg
*/
export const goldenRatioSketch = (p5: P5Instance) => {
  const minSeedCount = 200;
  const maxSeedCount = 1350;
  let seedCount = maxSeedCount;
  let dir = -5;
  const radius = Math.sqrt(0.5);
  const dotSize = 0.05;
  const PHI = (1 + Math.sqrt(5)) / 2;

  p5.setup = () => {
    const size = p5.min(p5.windowWidth/3, p5.windowHeight/3);
    p5.createCanvas(size, size);
    p5.colorMode(p5.RGB, 1);
    p5.noStroke();
  };

  p5.updateWithProps = (props) => {
    if (props.screenWidth) {
      p5.setup();
    }
  };

  p5.mouseClicked = () => {
    if (0 <= p5.mouseX && p5.mouseX < p5.width &&
        0 <= p5.mouseY && p5.mouseY < p5.height) {
      dir = -dir;
    }
  };
    
  p5.draw = () => {
    p5.scale(p5.width, p5.height);
    p5.background(0);
    p5.fill(255, 255, 0);
    if (p5.frameCount % 2 === 0) {
      seedCount = seedCount + dir;
      if (seedCount >= maxSeedCount) {
        dir = -dir;
      }
      if (seedCount <= minSeedCount) {
        dir = -dir;
      }
    }
    
    for (let i = 1; i < seedCount; i++) {
      const f = i / seedCount;
      const angle = i * PHI;
      const dist = f * radius;
    
      const x = 0.5 + p5.cos(angle * p5.TWO_PI) * dist;
      const y = 0.5 + p5.sin(angle * p5.TWO_PI) * dist;
    
      const r = f * dotSize;
    
      p5.circle(x, y, r);
    }
  };
};
