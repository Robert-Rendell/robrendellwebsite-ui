// https://github.com/tex2e/p5js-pentagon/blob/master/js/main.js

import { P5CanvasInstance } from "react-p5-wrapper";

type Props = {
  onReady?: () => void;
  screenWidth: number;
};

const sutcliffePentagonSketch = (p5: P5CanvasInstance<Props>) => {
  const maxWidth = 500;
  let width = maxWidth;
  const Settings = {
    color: p5.color(0, 255, 0),
    branchColor: "#000000",
    nest: 5,
    radius: maxWidth * 0.4,
    strutFactor: 0.25,
    strutTarget: 3,
    subStrutTarget: 3,
    numSides: 5,
  };

  class Point {
    constructor(public x: number, public y: number) {
      this.x = x;
      this.y = y;
    }
  }

  class FractalRoot {
    private points: Point[];
    private rootBranch: Branch;

    constructor() {
      this.points = [];
      const centerX = p5.width / 2;
      const centerY = p5.height / 2;
      const angleStep = 360 / Settings.numSides;
      let count = 0;
      for (let i = -90; i < 270; i += angleStep) {
        this.points[count] = new Point(
          centerX + Settings.radius * p5.cos(p5.radians(i)),
          centerY + Settings.radius * p5.sin(p5.radians(i))
        );
        count++;
      }
      this.rootBranch = new Branch(0, 0, this.points);
    }

    drawShape() {
      this.rootBranch.draw();
    }
  }

  class Branch {
    private outerPoints: Point[];
    private midPoints: Point[];
    private strutFactor: number;
    private projPoints: Point[];
    private maxLevel: number;
    constructor(
      private level: number,
      private num: number,
      private points: Point[]
    ) {
      this.level = level;
      this.num = num;
      this.outerPoints = points;
      this.midPoints = this.calcMidPoints();
      this.strutFactor = Settings.strutFactor;
      this.projPoints = this.calcStrutPoints();
      this.maxLevel = Settings.nest;

      if (level + 1 < this.maxLevel) {
        const childBranch = new Branch(level + 1, 0, this.projPoints);
        childBranch.draw();
        //
        for (let k = 0; k < this.outerPoints.length; k++) {
          const kNext =
            (k - 1 + this.outerPoints.length) % this.outerPoints.length;
          const newPoints = [
            this.projPoints[k],
            this.midPoints[k],
            this.outerPoints[k],
            this.midPoints[kNext],
            this.projPoints[kNext],
          ];
          const subChildBranch = new Branch(level + 1, k + 1, newPoints);
          subChildBranch.draw();
        }
      }
    }

    draw() {
      Settings.color = p5.color(100, p5.random(200) + 55, 0);
      const weight = this.level < 5 ? 5 - this.level : 0.5;
      p5.stroke(Settings.color);
      p5.strokeWeight(weight);
      // draw outer shape
      for (let i = 0; i < this.outerPoints.length; i++) {
        const iNext = (i + 1) % this.outerPoints.length;
        p5.line(
          this.outerPoints[i].x,
          this.outerPoints[i].y,
          this.outerPoints[iNext].x,
          this.outerPoints[iNext].y
        );
      }
    }

    calcMidPoints() {
      const midPoints = [];
      for (let i = 0; i < this.outerPoints.length; i++) {
        const iNext = (i + 1) % this.outerPoints.length;
        midPoints[i] = this.calcMidPoint(
          this.outerPoints[i],
          this.outerPoints[iNext]
        );
      }
      return midPoints;
    }

    calcMidPoint(end1: Point, end2: Point) {
      const mx =
        end1.x > end2.x
          ? end2.x + (end1.x - end2.x) / 2
          : end1.x + (end2.x - end1.x) / 2;
      const my =
        end1.y > end2.y
          ? end2.y + (end1.y - end2.y) / 2
          : end1.y + (end2.y - end1.y) / 2;
      return new Point(mx, my);
    }

    calcStrutPoints(): Point[] {
      const strutPoints = [];
      for (let i = 0; i < this.midPoints.length; i++) {
        const skipNum =
          this.num == 0 ? Settings.strutTarget : Settings.subStrutTarget;
        const iNext = (i + skipNum) % this.outerPoints.length;
        strutPoints[i] = this.calcStrutPoint(
          this.midPoints[i],
          this.outerPoints[iNext]
        );
      }
      return strutPoints;
    }

    calcStrutPoint(mp: Point, op: Point) {
      const opp = p5.abs(op.x - mp.x);
      const adj = p5.abs(op.y - mp.y);
      const px =
        op.x > mp.x
          ? mp.x + opp * this.strutFactor
          : mp.x - opp * this.strutFactor;
      const py =
        op.y > mp.y
          ? mp.y + adj * this.strutFactor
          : mp.y - adj * this.strutFactor;
      return new Point(px, py);
    }
  }

  p5.setup = () => {
    p5.createCanvas(width, width);
    drawFractal();
  };

  p5.updateWithProps = (props: any) => {
    if (props.onReady) {
      props.onReady();
      delete props.onReady;
    }
    if (props.screenWidth) {
      width = Math.min(props.screenWidth, 480);
      Settings.radius = width * 0.4;
    }
  };

  const drawFractal = () => {
    p5.clear(0, 0, 0, 0);
    p5.stroke(Settings.branchColor);
    p5.background("rgba(255,255,255,0)");
    const fractalRoot = new FractalRoot();
    fractalRoot.drawShape();
  };

  p5.mouseClicked = () => {
    if (
      0 <= p5.mouseX &&
      p5.mouseX < p5.width &&
      0 <= p5.mouseY &&
      p5.mouseY < p5.height
    ) {
      drawFractal();
      if (Settings.nest === 5) {
        Settings.nest = 1;
      }
      Settings.nest = Settings.nest + 1;
    }
  };
};

export { sutcliffePentagonSketch };
