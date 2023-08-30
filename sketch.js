var sea;
var seaImg;
var ship;
var shipImg1;

function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png", "ship-2.png");
}

function setup(){
  createCanvas(400,400);
 //crear sprite de Ship
 sea = createSprite(200,200);
sea.addImage("ground",seaImg);

 
  ship = createSprite(100,280,10,25);
  ship.addAnimation("running", shipImg1);
  ship.scale = 0.2;
  
  sea.x = sea.width /2;
sea.velocityX = -4;
  


  
}

function draw() {
  background("blue");
  
 
  drawSprites();
}