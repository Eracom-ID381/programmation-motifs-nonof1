function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
}

function draw() {
    stroke(0);
    strokeWeight(6);

    for (let x = 0; x < windowWidth; x = x + 100;) {
        for (let y = 0; y < windowHeight; y = y + 100) {

        }

    }

}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}