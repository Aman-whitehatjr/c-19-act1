var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

doorsGroup=new Group()
climbersGroup= new Group()
invisibleBlockGroup= new Group()




ghost = createSprite(200,200);
ghost.addImage("ghost",ghostImg);
ghost.scale=0.4
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }

if (keyDown("left_arrow")){

ghost.x=ghost.x-3

}

if (keyDown("right_arrow")){

  ghost.x=ghost.x+3
  
  }
  
  if (keyDown("space")){

    ghost.velocityY=-5
    
    }

     ghost.velocityY=ghost.velocityY+0.8

if (climbersGroup.isTouching(ghost) ) {

ghost.velocityY=0



}

if (invisibleBlockGroup.isTouching(ghost)|| ghost.y >600  ){

ghost.destroy()


}














spawnDoors();

    drawSprites()
}

function spawnDoors(){
if (frameCount%240===0){

var door
door = createSprite(200,-50)
door.addImage(doorImg);
door.x=Math.Round(random(120,400))
door.velocityY=1
door.lifeTime=750
doorsGroup.add(door)
ghost.depth=door.depth;
ghost.depth+1

invisibleBlock = createSprite(200,15)
invisibleBlock.width=climber.width
invisibleBlock.height=2
invisibleBlock.x=door.x
invisibleBlock.lifeTime=750
invisibleBlock.debug=true
invisibleBlockGroup.add(invisibleBlock)
invisibleBlock.velocityY=1;

var climber
climber = createSprite(200,10)
climber.addImage(climberImg);
climber.x=door.x   
climber.velocityY=1
climber.lifeTime=750
climbersGroup.add(climber)










}







}








