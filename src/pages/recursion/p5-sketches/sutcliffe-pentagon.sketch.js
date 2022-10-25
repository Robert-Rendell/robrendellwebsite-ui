// https://github.com/tex2e/p5js-pentagon/blob/master/js/main.js

const sutcliffePentagonSketch = (p5) => {
  const Settings = {
    branchColor: '#000000',
    nest: 5,
    radius: 350,
    strutFactor: 0.25,
    strutTarget: 3,
    subStrutTarget: 3,
    numSides: 5,
  };
  
  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }
  
  class FractalRoot {
    constructor() {
      this.points = [];
      var centerX = p5.width / 2;
      var centerY = p5.height / 2;
      var angleStep = 360 / Settings.numSides;
      var count = 0;
      for (var i = -90; i < 270; i += angleStep) {
        this.points[count] = new Point(
          centerX + (Settings.radius * p5.cos(p5.radians(i))),
          centerY + (Settings.radius * p5.sin(p5.radians(i))),
        )
        count++;
      }
      this.rootBranch = new Branch(0, 0, this.points);
    }
  
    drawShape() {
      this.rootBranch.draw();
    }
  }
  
  class Branch {
    constructor(level, num, points) {
      this.level = level;
      this.num = num;
      this.outerPoints = points;
      this.midPoints = this.calcMidPoints();
      this.strutFactor = Settings.strutFactor;
      this.projPoints = this.calcStrutPoints();
      this.maxLevel = Settings.nest;
  
      if (level + 1 < this.maxLevel) {
        var childBranch = new Branch(level + 1, 0, this.projPoints);
        childBranch.draw();
        //
        for (var k = 0; k < this.outerPoints.length; k++) {
          var kNext = (k - 1 + this.outerPoints.length) % this.outerPoints.length;
          var newPoints = [
            this.projPoints[k], this.midPoints[k], this.outerPoints[k],
            this.midPoints[kNext], this.projPoints[kNext],
          ];
          var subChildBranch = new Branch(level + 1, k + 1, newPoints);
          subChildBranch.draw();
        }
      }
    }
  
    draw() {
      var weight = (this.level < 5) ? 5 - this.level : 0.5;
      p5.stroke(0,255,0)
      p5.strokeWeight(weight);
      // draw outer shape
      for (var i = 0; i < this.outerPoints.length; i++) {
        var iNext = (i + 1) % this.outerPoints.length;
        p5.line(this.outerPoints[i].x, this.outerPoints[i].y,
             this.outerPoints[iNext].x, this.outerPoints[iNext].y);
      }
    }
  
    calcMidPoints() {
      var midPoints = [];
      for (var i = 0; i < this.outerPoints.length; i++) {
        var iNext = (i + 1) % this.outerPoints.length;
        midPoints[i] = this.calcMidPoint(this.outerPoints[i], this.outerPoints[iNext]);
      }
      return midPoints;
    }
  
    calcMidPoint(end1, end2) {
      var mx = (end1.x > end2.x) ? end2.x + ((end1.x - end2.x) / 2)
                                 : end1.x + ((end2.x - end1.x) / 2);
      var my = (end1.y > end2.y) ? end2.y + ((end1.y - end2.y) / 2)
                                 : end1.y + ((end2.y - end1.y) / 2);
      return new Point(mx, my);
    }
  
    calcStrutPoints() {
      var strutPoints = [];
      for (var i = 0; i < this.midPoints.length; i++) {
        var skipNum = (this.num == 0) ? Settings.strutTarget : Settings.subStrutTarget;
        var iNext = (i + skipNum) % this.outerPoints.length;
        strutPoints[i] = this.calcStrutPoint(this.midPoints[i], this.outerPoints[iNext]);
      }
      return strutPoints;
    }
  
    calcStrutPoint(mp, op) {
      var opp = p5.abs(op.x - mp.x);
      var adj = p5.abs(op.y - mp.y);
      var px  = (op.x > mp.x) ? mp.x + (opp * this.strutFactor)
                              : mp.x - (opp * this.strutFactor);
      var py  = (op.y > mp.y) ? mp.y + (adj * this.strutFactor)
                              : mp.y - (adj * this.strutFactor);
      return new Point(px, py);
    }
  }
  
  p5.setup = () => {
    p5.createCanvas(800, 800);
    p5.drawFractal();
  }
  
  p5.drawFractal = () => {
    p5.clear();
    p5.stroke(Settings.branchColor);
    p5.background('rgba(255,255,255,0)');
    var fractalRoot = new FractalRoot();
    fractalRoot.drawShape();
  }
  
  p5.mouseClicked = () => {
    if (0 <= p5.mouseX && p5.mouseX < p5.width &&
        0 <= p5.mouseY && p5.mouseY < p5.height) {
      p5.drawFractal();
    }
  }
}

export { sutcliffePentagonSketch }
