function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight, WEBGL);
    canvas.parent('canvas');
    background(255);
    strokeWeight(1);
    for (let a = 0; a < width; a = a + 20) {
        for (let y = 0; y < height; y = y + 20) {
            for (let angle = 0; angle < 90; angle = angle + random(0, 90)) {
                rect(a, y, random(0, 20), random(0, 20));
                rotateX(angle);
            }
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