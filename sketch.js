

var wall,thickness;


var bullet, speed, weight; 


function setup() {
  createCanvas(1600, 400);


	speed=random(20,90)
	weight=random(30,52)

	thickness = random(22,83)

	bullet = createSprite(20,140,50,50);

	bullet.shapecolor = color("white");

	bullet.velocityX = speed;


  	wall=createSprite(1200,200,thickness, height/2)
  	wall.shapeColor=color(80,80,80)
}
function HasCollided(bullet,wall)
{
	bulletRightEdge=bullet.x+bullet.width;
	wallLeftEdge=wall.x;
	if(bulletRightEdge>+wallLeftEdge)
	{
		return true
	}
	return false;
}


function draw() {
  background(0);

  if(HasCollided(bullet,wall))

  {
  bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness*thickness*thickness);
	if(damage>0.5)
	{
		wall.shapeColor=color(255,0,0);
	}

	if(damage<0.5)
	{
		wall.shapeColor=color(0,255,0);
	}
  }  
  
  drawSprites();
 
}


