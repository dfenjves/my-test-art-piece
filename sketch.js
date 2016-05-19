
// The setup function runs once
function setup() {
  
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
  background(0);
}

//The draw function runs many times per second. The default rate is 60 frames per second!
function draw() {
  fill(255,0,0);
  ellipse(mouseX,mouseY,100,100);
  fill(0,0,255);
  stroke(34,255,100);
  ellipse(200,110,100,20);
  ellipse(100,300,10,100);

  var randomRed = random(0,255);
  var randomGreen = random(0,255);
  var randomBlue = random(0,255);

  var newColor = color(randomRed,randomGreen,randomBlue);
  fill(newColor);
  rect(random(0,width),random(0,height), 100,200);
  ellipse(random(0,width),random(0,height), random(0,300),random(0,300));
  fill(255);
  stroke(255)
  line(0,5, mouseX, mouseY)
}
