
var a,b;

function setup() {
  createCanvas(800,400);
  b=createSprite(400, 200, 50, 50);
  a=createSprite(200,200,50,50);
  b.shapeColor = "green";
  a.shapeColor = "green";
}

function draw() {
  background(255,255,255);
b.x = World.mouseX;
b.y = World.mouseY;


a.velocityX = 2;
b.velocityX = 2;

bounceOff(a,b);

  
  drawSprites();
}
