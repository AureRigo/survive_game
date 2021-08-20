let socket

let posX =40;
let posY =40;



let a = 50;

let lost = false;
let viruses = [];

function setup(){
    createCanvas(640,640);
    multiplication();
    socket = socket.io.connect('http://localhost:3000')
}

function draw(){
    if (!lost){
        game();
    } else {
        textSize(50);
        text("T'es mort", 200, 200)
    }
}

function game(){
    background('rgba(0,255,0, 0.25)');
    updatePositionCercle();
    testOutOfScreen();
    fill("white");
    circle(posX, posY, a);
    fill("white");
    line(0,0, 640,0);
    line(0,640, 640,640);
    line(0,0, 0,640);
    line(640,0, 640,640);
    viruses.forEach(deases => {deases.afficher()});
    viruses.forEach(deases => {deases.move()});
    viruses.forEach(deases => {deases.collisionTest()});
    // deases.afficher();
    // deases.move();
    // deases.collisionTest();
    time();
}

function updatePositionCercle(){
    if (keyIsDown(LEFT_ARROW)) {
        posX -= 5;
    }
    
    if (keyIsDown(RIGHT_ARROW)) {
    posX += 5;
    }

    if (keyIsDown(UP_ARROW)) {
    posY -= 5;
    }

    if (keyIsDown(DOWN_ARROW)) {
    posY += 5;
    }
}

function testOutOfScreen(){
    if (posX < 0){
        posX =640;
    }
    if (posX > 640){
        posX = 0;
    }

    if (posY < 0){
        posY =640;
    }
    if (posY > 640){
        posY = 0;
    }
}

class virus{
    constructor(){
        // Utilisé pour calculer le bruit de Perlin
        this.xStep = random(0, 1000);
        this.yStep = random(0, 1000);
        
        // Positions
        this.posObstacleX = noise(this.xStep);
        this.posObstacleY = noise(this.yStep);

        this.b = 20;
    }

    afficher(){
        fill("red");
        ellipse(this.posObstacleX, this.posObstacleY, this.b, this.b);
        fill("red");
    }

    move(){
        this.xStep += 0.01;
        this.yStep += 0.005;
        this.posObstacleX = noise(this.xStep) * width;
        this.posObstacleY = noise(this.yStep) * height;
    }

    collisionTest(){ 
        this.d = dist(posX, posY, this.posObstacleX, this.posObstacleY) 
        if(this.d<= (a/2)+(this.b/2)){
            lost = true;
        }
    }
}
function multiplication(){
    viruses = [];
    for(let i=0; i<1000; i++){
        let posX_initiale = random(20, 620);
        let posY_initiale = random(20, 620);
        let deases = new virus(posX_initiale, posY_initiale);
        viruses.push(deases);
    }
}
function time(){
    let millisecond = millis();
    let t = round(millisecond/1000);
    text('Secondes \nrunning: \n' + t, 5, 40);
}
