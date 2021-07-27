let posX =40;
let posY =40;



let a = 50;

let lost = false;

let deases

function setup(){
    createCanvas(640,640);
    deases = new virus();

}

function draw(){
    if (!lost){
        game();
    } else {
        textSize(50);
        text("T'es mort", 200, 200)
    }
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
        this.xStep = 0;
        this.yStep = 0;
        this.x =100;
        this.y =0;
        this.b = 20;
        this.viruses = []
        
    }

    afficher(){
        fill("red");
        ellipse(this.x, this.y, this.b, this.b);
        fill("red");
    }

    move(){

        this.posObstacleX = noise(this.xStep);
        this.posObstacleY = noise(this.yStep);
        this.xStep += 0.01;
        this.yStep += 0.005
        
        this.x = map(this.posObstacleX, 0, 1, 0, width);
        this.y = map(this.posObstacleY, 0, 1, 0, width);
        if (this.posObstacleX <0){
            this.posObstacleX = 0;
        }
        if(this.posObstacleY >640){
            this.posObstacleY = 640;
        }dist(posX, posY, this.posObstacleX, this.posObstacleY)
        if (this.posObstacleY <0){
            this.posObstacleY = 0;
        }
    }

    collisionTest(){ 
        this.d = dist(posX, posY, this.x, this.y) 
        if(this.d<= (a/2)+(this.b/2)){
            lost = true;
        }
    }
}

function time(){
    let millisecond = millis();
    let t = round(millisecond/1000);
    text('Secondes \nrunning: \n' + t, 5, 40);
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
    deases.afficher();
    deases.move();
    deases.collisionTest();
    time();
}