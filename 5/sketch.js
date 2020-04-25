function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight, WEBGL);
    canvas.parent('canvas');
    background(255);
    noStroke();
    colorMode(HSB, 100);
    fill(random(0, 100), random(50, 100), random(50, 100));
}

function draw() {
    let angle = 0;
    angle = angle + 0.07;
    rectMode(CENTER);
    rotateY(angle);
    rect(0, 0, 150, 150);
}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}