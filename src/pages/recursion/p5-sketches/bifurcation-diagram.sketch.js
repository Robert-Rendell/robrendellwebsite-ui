const bifurcationDiagramSketch = (p5) => {
  let bf;

  class Animated {
    constructor(interval) {
      this.interval = interval;
      this.lastTime = p5.millis();
      this.enabled = true;
    }

    hasTicked() {
      if (this.enabled && p5.millis() - this.lastTime > this.interval) {
        this.lastTime = p5.millis();
        return true;
      } else {
        return false;
      }
    }

    draw() {
      if (this.hasTicked()) {
        this.animate();
      }
    }

    animate() {
      //
    }
  }

  class Bifurcation extends Animated {
    constructor() {
      super(1000);
      this.ps = [];
      this.xLines = [];
      this.initialX = 0.1; // 0.1 default
      this.xIncrement = 100;
      this.stepSize = 0.001;
      this.iterationNum = 200;
      this.xOffset = 1500;
      this.xOffsetIncrement = 250;
      this.stepSizeIncrement = 0.005;
      this.currentX = 3000;
      this.previousX = 0.0;
      this.currentIndex = 0;
      this.totalAtCurrentX = 0;
      this.plot();
    }

    logistic(a, x) {
      return a * x * (1 - x);
    }

    incrementXoffset() {
      this.xOffset += this.xOffsetIncrement;
      this.plot();
    }

    decrementXoffset() {
      this.xOffset -= this.xOffsetIncrement;
      this.plot();
    }

    // incrementStepSize() {
    //   this.stepSize += this.stepSizeIncrement;
    //   // xIncrement = int(max(1, xIncrement * 0.2));
    //   p5.println("Step size: " + stepSize);
    //   // println("x axis increment: " + xIncrement);
    //   p5.plot();
    // }

    draw() {
      if (this.enabled) {
        super.draw();
        this.drawBifurcation();
      }
    }

    drawBifurcation() {
      p5.stroke(255);
      p5.fill(255);
      // let totalAtCurrentX = 0;
      for (let i = this.currentIndex; i < this.ps.length; i++) {
        const p = this.ps[i];
        if (p.x <= this.currentX) {
          p5.point(p.x, p.y);
        } else {
          break;
        }
      }
    }

    animate() {
      if (this.currentIndex >= p5.width) {
        this.enabled = false;
      }
      this.currentIndex += 100;
      this.currentX += this.xIncrement;
    }

    plotPoint(x, y) {
      this.ps.push(p5.createVector(x, y));
    }

    plot() {
      this.ps = [];
      this.currentX = 0;
      this.currentIndex = 0;
      p5.background(0);
      let i, j;
      let a = 0;
      let x;

      for (j = 0; j < 4.0 / this.stepSize; j++) {
        a += this.stepSize;
        x = this.initialX;

        for (i = 0; i < this.iterationNum; i++) {
          x = this.logistic(a, x);
          if (i > 100 && a > 2) {
            let px =
              -this.xOffset +
              (a * ((p5.width + this.xOffset) / 4) -
                (p5.width + this.xOffset) / 2) *
                2;
            let py = p5.height - x * p5.height;
            this.plotPoint(px, py);
          }
        }
      }
    }
  }

  p5.setup = () => {
    p5.background(0);
    p5.createCanvas(1200, 500);
    bf = new Bifurcation();
  };

  p5.draw = () => {
    bf.draw();
  };

  p5.mousePressed = () => {
    p5.setup();
  };

  // p5.mousePressed = () => {
  //   bf.increment();
  // }
};

export { bifurcationDiagramSketch };
