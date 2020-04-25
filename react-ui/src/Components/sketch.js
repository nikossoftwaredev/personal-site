export default function sketch(p){
    let r = 100;

    p.setup = () => {
      p.createCanvas(400, 400);
      p.background('gray');
      p.translate(200,200);
      p.stroke(0);
      p.fill(255,0,0)
      p.rect(0,0,r,r);
      p.rectMode(p.CENTER);
      p.ellipse(0,0,r,r)
      
      
    }

    p.draw = () => {
      p.point(p.Random(0,400));
     
    }

    
}