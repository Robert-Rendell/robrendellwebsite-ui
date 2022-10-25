import { P5CanvasInstance } from "react-p5-wrapper";

const doubleHelixSketch = (p5: P5CanvasInstance) => {
  let CircleNum: number;
  let Diameter = 10
  
  p5.setup = () => { 
    p5.createCanvas(480, 360);
    CircleNum = 100;
  
  } 
  
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
      
    }
  }
}

export { doubleHelixSketch }
