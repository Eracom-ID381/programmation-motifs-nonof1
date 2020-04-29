function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight, WEBGL);
    canvas.parent('canvas');
    background(255);
    colorMode(RGB, 100);
    stroke(1);
    fill(51, 204, 255);
}

function draw() {
    rotateX(frameCount * 0.03);
    rotateY(frameCount * 0.03);
    for (let x = 0; x < width; x = x + 60) {
        for (let y = 0; y < height; y = y + 20) {
            for (let z = 0; z < 100; z = z + 20) {
                sphere(15);
                translate(x, y, z);
            }
        }
    }
}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}