var wall,thickness;
var bullet,speed,weight;
var damage;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(200, 200, 60, 30);
  wall = createSprite(1200,200,50,height/2)
  thickness = random(22,83)
  speed = random(223,321)
  weight = random(30,52)
  bullet.velocityX = speed
  bullet.shapeColor = "white"
  wall.shapeColor = "gray"
}

function draw() {
  background("black"); 
  
  if(wall.x-bullet.x <= bullet.width/2+wall.width/2){
    bullet.velocityX = 0
    damage = 0.50*weight*speed*speed/(thickness*thickness*thickness)  
  }

  if(damage<10){
    wall.shapeColor = "red"
  }else{
    wall.shapeColor = "green"
  }
  
  
  drawSprites();
}