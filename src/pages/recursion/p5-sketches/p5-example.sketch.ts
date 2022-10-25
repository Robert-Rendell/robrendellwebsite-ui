const exampleSketch = (p5: any) => {
  let rotation = 0;

  p5.setup = () => p5.createCanvas(600, 400, p5.WEBGL);

  p5.updateWithProps = (props: any) => {
    if (props.rotation) {
      rotation = (props.rotation * Math.PI) / 180;
    }
  };

  p5.draw = () => {
    p5.background(100);
    p5.normalMaterial();
    p5.noStroke();
    p5.push();
    p5.rotateY(rotation);
    p5.box(100);
    p5.pop();
  };
}

export { exampleSketch }