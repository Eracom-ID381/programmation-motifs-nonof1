function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight, WEBGL);
    canvas.parent('canvas');
    background(255);
    colorMode(HSB, 100);
    fill(random(0, 100), random(50, 100), random(50, 100));
    noStroke();


    for (let x = 0; x < width; x = x + 20) {
        for (let y = 0; y < height; y = y + 20) {
            rect(x, y, random(0, 15), random(0, 15));
            rect(x, y, random(0, 15), random(0, 15));
            ellipse(x, y, 20, 20);

            let angle = 0;
            angle = angle + 0.07;
            rotateX(angle);
            rotateY(random(0, 60));
        }
    }
}

function draw() {}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}