var canvas;
let model1;

function preload() {
    model1 = loadModel('model.obj');
    img = loadImage('texture.jpg');
    graphics = createGraphics(200, 200);
    graphics.background(10);
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.style('z-index', '-1');
}

function draw() {
    background(0);
    ambientLight(200);
    noStroke();
    let dirX = (mouseX / width - 0.5) * 2;
    let dirY = (mouseY / height - 0.5) * 2;
    directionalLight(80, 80, 80, -dirX, -dirY, -1);
    //pointLight(80, 80, 80, mouseX, mouseY, 1);
    orbitControl();
    //texture(graphics);
    specularMaterial(20);
    //normalMaterial();
    //color(0);
    scale(10);
    model(model1);
}