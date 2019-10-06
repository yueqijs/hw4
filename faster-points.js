function setup() {
  createCanvas(400, 400);
  colorMode(HSB, width, height, 100);
}

function draw() {
  var x = random(width);
  var y = random(height);
  fill(x, y, 100);
   noStroke()
 ellipse(x, y, 100);
}

