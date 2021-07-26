let posX =40;
let posY =40;

function setup(){
    createCanvas(640,640);
}

function draw(){
    background('rgba(0,255,0, 0.25)');
    updatePositionCercle();
    testOutOfScreen();
    circle(posX, posY, 50);
    line(0,0, 640,0);
    line(0,640, 640,640);
    line(0,0, 0,640);
    line(640,0, 640,640)
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