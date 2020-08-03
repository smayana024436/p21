var bullet, wall;
var speed, weight,thickness;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(23,81);

  bullet = createSprite(50,200, 20,10);
  bullet.shapeColor = color(255);
  wall = createSprite(1200,200, thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background("black");  
  bullet.velocityX = speed;
  //bullet.x + (bullet.width)/2 === wall.x + (wall.width)/2
  if(wall.x - bullet.x < bullet.width/2 + wall.width/2 ){
    bullet.velocityX = 0;
  
   var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
   
   if(damage > 10){
    wall.shapeColor = color("red");
    }
   
   if(damage < 10){
    wall.shapeColor = color("green");
   }
  }

  drawSprites();
}