function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
    stroke(0);
    strokeWeight(2);
    for (let x = 0; x < width; x = x + 30) {
        for (let y = 0; y < height; y = y + 30) {
            rect(x, y, random(0, 30), random(0, 30));
            rect(x, y, random(0, 30), random(0, 30));
            rect(x, y, random(0, 30), random(0, 30));
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