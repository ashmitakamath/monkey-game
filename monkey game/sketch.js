
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var survivalTime=0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
  monkey=createSprite(100,300)
  monkey.addAnimation("monkey",monkey_running)
  monkey.scale=0.15
  ground=createSprite(100,350,1000,20)
  foodGroup=createGroup()
 obstacleGroup=createGroup()
  
}


function draw() {
background(220)
  food()
  spawnobstacle()
  if(keyDown("space")){
    monkey.velocityY=-12
  }
  monkey.velocityY+=0.8
  monkey.collide(ground)
  if(obstacleGroup.isTouching(monkey)){
    monkey.velocityY=0
    obstacleGroup.setVelocityXEach(0)
    foodGroup.setVelocityXEach(0)
    foodGroup.setLifetimeEach(-1)
  
  }
  if(foodGroup.isTouching(monkey)){
    foodGroup.destroyEach()
  }
  survivalTime=Math.ceil(frameCount/frameRate())
  textSize(20)
  stroke("black")
  fill(0)
  text("survivalTime:"+survivalTime,100,50)
   drawSprites()
}

function food(){
  if(frameCount%200==0){
    banana=createSprite(600,150)
    banana.addImage(bananaImage)
    banana.velocityX=-4
    banana.scale=0.08
    foodGroup.add(banana)
    banana.lifetime=300
  }
}
function spawnobstacle(){
  if(frameCount%250===0){
    obstacle=createSprite(600,300)
    obstacle.addImage(obstacleImage)
    obstacle.velocityX=-4
    obstacle.scale=0.2
    obstacle.lifetime=300
    obstacleGroup.add(obstacle)
  }
  
}




