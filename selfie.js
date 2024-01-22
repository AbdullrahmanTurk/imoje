function setup() {
    createCanvas(500, 500);
  }
  
  function draw() {
    background(255);
    
    fill(255, 228, 196);
    ellipse(200, 200, 180, 200);
    
    noFill();
    stroke(129, 69, 19);
    strokeWeight(2);
    arc(200, 155, 120, 40, PI, TWO_PI);
    
    fill(0, 0, 0); 
    rect(155, 225, 90, 20);
    arc(200, 270, 130, 70, 0, PI);

    fill(255, 228, 196); 
    triangle(200, 190, 185, 220, 215, 220);
    
    fill(255, 255, 255);
    rect(180, 255, 40, 7);
    
    ellipse(180, 190, 30, 20);
    ellipse(220, 190, 30, 20);
    fill(0, 0, 0);
    ellipse(175, 190, 10, 10);
    ellipse(215, 190, 10, 10);
    
    fill(0); 
    rect(167, 160, 25, 5);
    rect(210, 175, 25, 5);
    
    fill(139, 69, 19);
    ellipse(140, 220, 5, 5);

  }
