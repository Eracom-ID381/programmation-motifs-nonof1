function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
}

function draw() {
    stroke(0);
    strokeWeight(5);

    for (let x = 0; x < width; x = x + 100) {
        for (let y = 0; y < height; y = y + 100) {
            ellipse(x, y, 30, 30);
            rect(x + 30, y, 30, 30);
            line(x + 40, y - 20, x + 10, y + 30);
            line(x + 40, y - 20, x + 70, y + 10);
            rect(x + 40, y + 10, 10, 10);
        }
    }

}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}