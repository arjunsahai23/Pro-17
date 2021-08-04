var PLAY=1

var END=0

var gameState=1

var sword,swordImage

var fruit1,fruit2,fruit3,fruit4,fruitGroup

var alien,alienGroup

var gameover,gameoverIage

var score=0

function preload(){
  swordImage=loadImage("sword.png")
  
  fruit1=loadImage("fruit1.png")
  fruit2=loadImage("fruit2.png")
  fruit3=loadImage("fruit3.png")
  fruit4=loadImage("fruit4.png")
  
  alien=loadImage("alien2.png")
  
  
  gameoverImage=loadImage("gameover.png")
  
  cut=loadSound( "knifeSwooshSound.mp3")
  
  restart=loadSound("gameover.mp3")

}

function setup(){
   createCanvas(600, 600);
  
  sword=createSprite(300,300,20,20);
  sword.addImage(swordImage)
  sword.scale=0.5
   sword.setCollider("circle",0,0,70)
  //sword.debug=true
  
  fruitGroup=createGroup()
  alienGroup=createGroup()
  
 
  
  score=0
  
  
  
}


function draw(){
background("lightblue")
  
 text("score="+   score,290,50) 
  
  if(gameState===1){
    
    sword.x=mouseX
   sword.y=mouseY
    
    
    
    fruits()
    
    monster()
    
    if(fruitGroup.isTouching(sword)){
  
      fruitGroup.destroyEach();
      score=score+2
      cut.play()
    }
    
    if(alienGroup.isTouching(sword)){
      alienGroup.destroyEach()
      gameState=0
      restart.play();
    }
  }
  
  
  if(gameState===0){
    
    
    sword.addImage(gameoverImage)
    sword.scale=1
    sword.x=300
   sword.y=300
  }
  
  
  
  drawSprites();
  
}


function fruits(){
  
  if(World.frameCount%100===0){
    var position=Math.round(random(1,2))
    var fruit=createSprite(500,300,20,20)
    fruit.scale=0.2
    
    if(position===1){
      
      fruit.x=50
      fruit.velocityX=8+(score/4)
    }
    else 
     { 
      if(position===2){
        
        fruit.x=550
        fruit.velocityX=-(8+(score/4))
      }
     }
    
    var fru=Math.round(random(1,4))
    switch(fru){
        
      case 1:fruit.addImage(fruit1) 
             break;
        case 2:fruit.addImage(fruit2)
             break;
        case 3:fruit.addImage(fruit3)
             break;
        case 4:fruit.addImage(fruit4)
            break;
            default:break;
    }
    
    
    fruit.lifetime=60
    fruit.y=Math.round(random(100,500))
    //fruit.debug=true
    fruit.setCollider("circle",0,0,100)
    
    fruitGroup.add(fruit)
  }
}

function monster(){
  if(World.frameCount%250===0){
    
    var i=Math.round(random(1,2));
    var enemy=createSprite(500,300,20,20)
    enemy.scale=0.9
    enemy.addImage(alien)
    
    if(i===1){
      
      enemy.x=50
      enemy.velocityX=8+(score/6)
    }
    else
      {
        if(i===2){
          
          enemy.x=550
          enemy.velocityX=-(8+(score/6))
        }
      }
    enemy.y=Math.round(random(100,500))
    
    enemy.lifetime=50
    enemy.setCollider("circle",0,0,20)
    //enemy.debug=true
    
   
    alienGroup.add(enemy)
  }
  
  
  
  
  
  
  
  
  
}


