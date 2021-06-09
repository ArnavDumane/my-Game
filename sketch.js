var backgroundImg,bg
var player,playerImg;


function preload(){
 backgroundImg=loadImage("Forest1.jpg");
 playerImg = loadAnimation("p1.png","p2.png","p3.png")
}

function setup() {
  createCanvas(800,400);
  bg = createSprite(400,100)
  bg.addImage(backgroundImg)
  bg.scale=0.8
  
  player= createSprite(75,300,80,80)
  player.addAnimation("running",playerImg)
  player.scale = 0.5
}

function draw() {
  background(0);
  bg.velocityX=-5
  if(bg.x===20 ){
    bg.x=750
  }

  drawSprites();
}