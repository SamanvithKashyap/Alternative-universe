var sun, startx, sprite;

function preload(){

  sunImage = loadImage("download.png");
}
function setup() {
  createCanvas(400,400);
  sun=createSprite(200, 200, 50, 50);
startx=200, starty=200, angle=0, increment=10, radius=150;
sprite = createSprite(startx, starty);


sun.addImage(sunImage);

}

function draw() {
  background(0,0,0);  
  if(World.frameCount%10===0){
    sun.scale=sun.scale+0.01;
  }
  
  angle=angle+increment;
  sprite.x=startx+radius*Math.cos(angle * Math.PI/180);
  sprite.y=starty+radius*Math.sin(angle * Math.PI/180);
  sprite.rotation=1-angle;
  sprite.scale = 0.2;
  sprite.shapeColor = "blue";
  
  if(sprite.isTouching(sun)){
    sprite.destroy();
  }
  drawSprites();
}