import { P5Instance } from "react-p5-wrapper";

type Props = {
  screenWidth: number;
  onReady: (() => void) | undefined;
}

const doubleHelixSketch = (p5: P5Instance<Props>) => {
  let CircleNum: number;
  let Diameter = 10
  let width = 480;
  let firstDraw = true;
  
  p5.setup = () => { 
    p5.createCanvas(width, width*0.75);
    CircleNum = 100;
  } 

  p5.updateWithProps = (props) => {
    if (!firstDraw && props.onReady) {
      props.onReady();
      delete props.onReady;
    }
    if (props.screenWidth) {
      width = Math.min(props.screenWidth, 480);
      p5.createCanvas(width, 360);
    }
  };
  
  p5.draw = () => {
    p5.background(15,15,30);
    
    for (let i = 0; i < CircleNum; i++) {
      var g = p5.map(p5.mouseX, 0, 640,100, 255);
      var b = p5.map(p5.mouseX, 0, 640, 255, 0);
      var x = i*(p5.width)/(CircleNum);
      p5.fill(p5.random(0,255),g,b,200);
      p5.noStroke();
      p5.ellipse(x,p5.height/2+30*p5.sin(50*i+p5.frameCount/100),Diameter,Diameter);
      
      var x2 = i*(p5.width)/(CircleNum);
      p5.fill(p5.random (0,255),g,b,200);
      p5.noStroke();
      p5.ellipse(x2,p5.height/2+30*p5.cos(p5.PI*(3/4)+50*i+p5.frameCount/100),Diameter,Diameter);
      
      p5.strokeWeight(0.1);
      p5.stroke(255);
      p5.line(x,p5.height/2+30*p5.sin(50*i+p5.frameCount/100),
        x2,p5.height/2+30*p5.cos(p5.PI*(3/4)+50*i+p5.frameCount/100))
        
      var x3 = i*(p5.width)/(CircleNum);
      p5.fill(p5.random (0,255),g,b,20);
      p5.noStroke();
      p5.ellipse(x3,p5.height/2+30*p5.tan(50*i+p5.frameCount/100),Diameter,Diameter);
      firstDraw = false;
    }
  }
}

export { doubleHelixSketch }
