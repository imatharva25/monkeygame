
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;
  
ground=createSprite(400,350,900,10);  
ground.velocityX=-4;
ground.x=ground.width/2;
console.log(ground.x);  
}

function draw() {
background("white");
createEdgeSprites();
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
          
    }
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  var survivalTime=0;
  stroke("black");
  textSize=20;
  fill("black");
  
   stroke("black");
  textSize=20;
  fill("black");
survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,100,50);
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
 
  
  monkey.collide(ground);
  
  
  
  spawnObstacles();
  spawnBananas();
drawSprites();  
}


function spawnObstacles(){
if(World.frameCount%60===0){
  var obstacle=createSprite(350,330);
obstacle.addImage(obstacleImage);
obstacle.scale=0.1;  
 obstacle.velocityX=-12; 
    
   }
 
  
  
}

function spawnBananas(){
if(World.frameCount%60===0){
  var banana=createSprite(350,200);
banana.addImage(bananaImage);
banana.scale=0.1;  
banana.velocityX=-12; 
    
   }



}