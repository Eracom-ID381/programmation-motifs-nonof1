function setup() {
  let navWidth = document.getElementById("nav").offsetWidth;
  let canvas = createCanvas(windowWidth - navWidth, windowHeight, WEBGL);
  canvas.parent('canvas');
  background(255);
  //  noStroke();
  colorMode(HSB, 100);
  // fill(random(0, 100), random(50, 100), random(50, 100));
}

function draw() {
  rectMode(CENTER);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  for (let x = 0; x < width; x = x + 50) {
    for (let y = 0; y < height; y = y + 50) {
      translate(x, y);
      box(noise(x, y) * 100);


    }

  }
}

function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}