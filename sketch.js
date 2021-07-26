let posX =40;
let posY =40;

let x =100;
let y =0;

let xStep = 0;
let yStep = 0; 

let vivant = true

function setup(){
    createCanvas(640,640);
}

function draw(){
    background('rgba(0,255,0, 0.25)');
    updatePositionCercle();
    testOutOfScreen();
    fill("white");
    circle(posX, posY, 50);
    fill("white");
    line(0,0, 640,0);
    line(0,640, 640,640);
    line(0,0, 0,640);
    line(640,0, 640,640);
    virus();
    collisionTest();
    time();
    stop();
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

function virus(){
    let posObstacleX = noise(xStep);
    let posObstacleY = noise(yStep);
    x = map(posObstacleX, 0, 1, 0, width);
    y = map(posObstacleY, 0, 1, 0, width);
    fill("red");
    ellipse(x, y, 20, 20);
    fill("red");
    xStep += 0.01;
    yStep += 0.005;

    // posObstacleY = posObstacleY + noise(-speedY, speedY);
    if (posObstacleX <0){
        posObstacleX = 0;
    }
    if(posObstacleY >640){
        posObstacleY = 640;
    }dist(posX, posY, posObstacleX, posObstacleY)
    if (posObstacleY <0){
        posObstacleY = 0;
    }
}

function collisionTest(){ 
    let d = dist(posX, posY, x, y) 
    if(d<= 15){
        fill("red");
        return true;
    }
}

function time(){
    let millisecond = millis();
    text('Milliseconds \nrunning: \n' + millisecond, 5, 40);
}

function stop(){
    round();
}