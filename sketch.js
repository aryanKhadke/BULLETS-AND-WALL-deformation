var bullet, wall,thickness, speed, weight;
var deformation;

function setup() {
createCanvas(1600,400);

speed = random(50,100)
weight = random(30, 52)
thickness = random(22,83)

bullet = createSprite(50, 200, 50, 20);
bullet.velocityX = speed;

wall = createSprite(1200, 200, thickness, height/2); 
wall.shapeColor = color(80, 80, 80);

deformation = (0.5*weight*speed*speed)/2250;
  
}

function draw() {
background('black'); 

if(hasCollided(bullet , wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
        wall.shapeColor = color("green");
    }
    if(damage<10){
        wall.shapeColor=color('red');
    }

}
  
  
drawSprites();
}
function hasCollided(lbullet, lwall){
    bulletRightEdge = lbullet.position.x + lbullet.width;
    wallLeftEdge = lwall.x;
    if( bulletRightEdge>=wallLeftEdge ){
        return true;
    }
        return false;


}
