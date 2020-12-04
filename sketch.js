var wall,car,speed,weight;
var thickness

function setup() {
  createCanvas(1600,400);
  thickness=Math.round(random(22,83));
  wall=createSprite(1200, 200, thickness, 200);

  wall.shapeColor=rgb(80,80,80);
 ;


  bullet=createSprite(50, 200, 50, 50);
  bullet.shapeColor="white";
  bullet.debug=true;



  speed=Math.round(random(223,321));
  bullet.velocityX=speed;
  weight=Math.round(random(30,52));

  
}

function draw() {

  background("yellow");  
  
  


  if(colliding(wall,bullet)){
    bullet.velocityX=0;
     

    var damage=(0.5* weight * speed * speed)/(thickness *thickness *thickness)

    if(damage>10){
      wall.shapeColor="red"
    }
    if(damage<=10){
      wall.shapeColor="green"
    }
  }



  drawSprites();
}

function colliding(a,b){
 if( a.x-b.x<a.width/2+b.width/2){
  return true}
  else{
    return false
  }
}


  