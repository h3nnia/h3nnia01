var spot = {
  x: 100,
  y: 50
}

var col = {
  r: 0,
  g: 0,
  b: 0,
}


function setup() {
  createCanvas(1000, 1000);
  background(0);
  var bgcolor = map(mouseX,0,0,0,0)
  var sw = map(mouseY, 0, 0, 5, 20)
  var color = map(mouseX, 255,255)
  background(bgcolor);
 
}

function draw() {
  color.r = random (255,255);
  color.g = 0;
  color.b = random(255,255)
  spot.x = random(0,width);
  spot.y = random(0, height)
  noStroke();
  fill (col.r, col.g, col.b,200);
  ellipse(spot.x, spot.y, 20,20);
  
}

function mousePressed() {
    background(255,255,255);
  


function setup() {
  createCanvas(400, 200);
  textFont(Baskerville); 
  textSize(32);
  fill(0);
  text('Hello, custom font!', 50, 100);
}
  
}
  