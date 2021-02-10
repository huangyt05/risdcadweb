var canvas;
let model1;

function preload() {
    model1 = loadModel('assets/model.obj');
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.style('z-index', '-1');
}

function draw() {
    let dirX = (mouseX / width - 0.5) * 2;
    let dirY = (mouseY / height - 0.5) * 2;
    background(0);
    orbitControl();
    push();
    ambientLight(100);
    noStroke();
    scale(9);
    directionalLight(80, 80, 80, -dirX, -dirY, 1);
    pointLight(50, 50, 50, mouseX, mouseY, 2);
    specularMaterial(20);
    shininess(8);
    model(model1);
}