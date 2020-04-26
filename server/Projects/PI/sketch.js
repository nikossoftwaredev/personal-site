let a = 500;
let correct = 0.0;
let total = 0.0;

function setup() {
    createCanvas(a+2, a+(a/10));
    background('gray');
    push();
    stroke(0);
    translate(a/2,a/2)
    rectMode(CENTER)
    fill(0,0,100)    
    rect(0,0,a,a);
    fill(0,100,100)
    ellipse(0,0,a);
    pop();
}

function draw() {
    
    for(let i =0 ;i <100 ; i ++){
        //stroke(0,0,255);    
        x = random(-a/2,a/2);
        y = random(-a/2,a/2);
        let d = x*x + y*y;
        total++;

        if(d < (a/2)*(a/2)){ //inside cirlce
            correct ++;
            stroke(0,255,0);
            
        }else{
            stroke(255,0,0);
        }
        push();
        translate(a/2,a/2)
        point(x,y);
        pop();
     

    }
        

    stroke(0);
    fill(0);
    rect(0,a,a,a+100)
    fill(255);        
    let pi = 4* (correct/total);
	textSize(a/10);
    text("PI = " + pi ,0,a +(a/11));
}