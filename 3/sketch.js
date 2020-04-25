function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
    colorMode(HSB, 100);
    stroke(random(0, 100), random(50, 100), random(50, 100));
    for (let x = 0; x < width; x = x + random(0, 30)) {
        for (let y = 0; y < height; y = y + random(0, 20)) {
            ellipse(x, y, random(0, 20), random(0, 20));
        }
    }
}

function draw() {

}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}