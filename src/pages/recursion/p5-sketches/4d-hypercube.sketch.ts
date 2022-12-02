import { P5Instance } from "react-p5-wrapper";
// Daniel Shiffman
// http://youtube.com/thecodingtrain
// http://codingtra.in
// JavaScript transcription: Chuck England

// Coding Challenge #113: 4D Hypercube
// https://youtu.be/XE3YDVdQSPo

// Matrix Multiplication
// https://youtu.be/tzsgS19RRc8

type Matrix = number[][];
type Props = {
  //
};

const TesseractHypercube4dSketch = (p5: P5Instance<Props>) => {
  type Vector = ReturnType<typeof p5.createVector>;
  class P4Vector {
    constructor(
      public x: number = 0,
      public y: number = 0,
      public z: number = 0,
      public w: number = 0
    ) {}

    mult(f: number) {
      this.x *= f;
      this.y *= f;
      this.z *= f;
      this.w *= f;
    }
  }

  // JavaScript transcription: Chuck England
  // Daniel Shiffman
  // http://youtube.com/thecodingtrain
  // http://codingtra.in

  // Coding Challenge #113: 4D Hypercube
  // https://youtu.be/XE3YDVdQSPo

  // Matrix Multiplication
  // https://youtu.be/tzsgS19RRc8

  function vecToMatrix(v: Vector): Matrix {
    const m: number[][] = [];
    for (let i = 0; i < 3; i++) {
      m[i] = [];
    }
    m[0][0] = v.x;
    m[1][0] = v.y;
    m[2][0] = v.z;
    return m;
  }

  function vec4ToMatrix(v: any) {
    const m = vecToMatrix(v);
    m[3] = [];
    m[3][0] = v.w;
    return m;
  }

  function matrixToVec(m: Matrix): any {
    return p5.createVector(m[0][0], m[1][0], m[2][0]);
  }

  function matrixToVec4(m: Matrix): any {
    const r = new P4Vector(m[0][0], m[1][0], m[2][0], 0);
    if (m.length > 3) {
      r.w = m[3][0];
    }
    return r;
  }

  function logMatrix(m: Matrix) {
    const cols = m[0].length;
    const rows = m.length;
    console.log(rows + "x" + cols);
    console.log("----------------");
    let s = "";
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        s += m[i][j] + " ";
      }
      console.log(s);
    }
    console.log();
  }

  function matmulvec(a: any, vec: Vector): any {
    const m = vecToMatrix(vec);
    const r = matmul(a, m);
    return matrixToVec(r);
  }

  function matmulvec4(a: any, vec: P4Vector): any {
    const m = vec4ToMatrix(vec);
    const r = matmul(a, m);
    return matrixToVec4(r);
  }

  function matmul(a: any, b: any) {
    if (b instanceof P4Vector) {
      return matmulvec4(a, b);
    }

    const colsA = a[0].length;
    const rowsA = a.length;
    const colsB = b[0].length;
    const rowsB = b.length;

    if (colsA !== rowsB) {
      console.error("Columns of A must match rows of B");
      return null;
    }

    const result: number[][] = [];
    for (let j = 0; j < rowsA; j++) {
      result[j] = [];
      for (let i = 0; i < colsB; i++) {
        let sum = 0;
        for (let n = 0; n < colsA; n++) {
          sum += a[j][n] * b[n][i];
        }
        result[j][i] = sum;
      }
    }
    return result;
  }

  let angle = 0;

  const points: P4Vector[] = [];

  p5.setup = () => {
    const size = p5.min(p5.windowWidth, p5.windowHeight);
    p5.createCanvas(size, size, p5.WEBGL);
    points[0] = new P4Vector(-1, -1, -1, 1);
    points[1] = new P4Vector(1, -1, -1, 1);
    points[2] = new P4Vector(1, 1, -1, 1);
    points[3] = new P4Vector(-1, 1, -1, 1);
    points[4] = new P4Vector(-1, -1, 1, 1);
    points[5] = new P4Vector(1, -1, 1, 1);
    points[6] = new P4Vector(1, 1, 1, 1);
    points[7] = new P4Vector(-1, 1, 1, 1);
    points[8] = new P4Vector(-1, -1, -1, -1);
    points[9] = new P4Vector(1, -1, -1, -1);
    points[10] = new P4Vector(1, 1, -1, -1);
    points[11] = new P4Vector(-1, 1, -1, -1);
    points[12] = new P4Vector(-1, -1, 1, -1);
    points[13] = new P4Vector(1, -1, 1, -1);
    points[14] = new P4Vector(1, 1, 1, -1);
    points[15] = new P4Vector(-1, 1, 1, -1);
  };

  p5.draw = () => {
    p5.background(0);
    p5.rotateX(-p5.PI / 2);
    const projected3d = [];

    for (let i = 0; i < points.length; i++) {
      const v = points[i];

      const rotationXY = [
        [p5.cos(angle), -p5.sin(angle), 0, 0],
        [p5.sin(angle), p5.cos(angle), 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
      ];

      const rotationZW = [
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, p5.cos(angle), -p5.sin(angle)],
        [0, 0, p5.sin(angle), p5.cos(angle)],
      ];

      let rotated = matmul(rotationXY, v);
      rotated = matmul(rotationZW, rotated);

      const distance = 2;
      const w = 1 / (distance - rotated.w);

      const projection = [
        [w, 0, 0, 0],
        [0, w, 0, 0],
        [0, 0, w, 0],
      ];

      const projected = matmul(projection, rotated);
      projected.mult(p5.width / 8);
      projected3d[i] = projected;

      p5.stroke(255, 200);
      p5.strokeWeight(32);
      p5.noFill();

      p5.point(projected.x, projected.y, projected.z);
    }

    // Connecting
    for (let i = 0; i < 4; i++) {
      connect(0, i, (i + 1) % 4, projected3d);
      connect(0, i + 4, ((i + 1) % 4) + 4, projected3d);
      connect(0, i, i + 4, projected3d);
    }

    for (let i = 0; i < 4; i++) {
      connect(8, i, (i + 1) % 4, projected3d);
      connect(8, i + 4, ((i + 1) % 4) + 4, projected3d);
      connect(8, i, i + 4, projected3d);
    }

    for (let i = 0; i < 8; i++) {
      connect(0, i, i + 8, projected3d);
    }

    //angle = map(mouseX, 0, width, 0, TWO_PI);
    angle += 0.02;
  };

  function connect(offset: number, i: number, j: number, points: P4Vector[]) {
    p5.strokeWeight(4);
    p5.stroke(255);
    const a = points[i + offset];
    const b = points[j + offset];
    p5.line(a.x, a.y, a.z, b.x, b.y, b.z);
  }
};
