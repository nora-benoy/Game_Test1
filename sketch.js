var player,player_img;
var carrot,carrot_img;
var maze1,maze2,maze3;
var up,down,right,left;
var uparrow,downarrow,rightarrow,leftarrow;

function preload(){
player_img = loadAnimation("bunny1.png","bunny2.png","bunny3.png","bunny4.png","bunny5.png","bunny6.png","bunny7.png");
carrot_img = loadImage("carrot.png");
maze1 = loadImage("maze1.jpg");
maze2 = loadImage("maze2.jpg");
maze3 = loadImage("maze3.jpg");
up = loadImage("up_arrow.jpg");
down = loadImage("down_arrow.jpg");
right = loadImage("right_arrow.jpg");
left = loadImage("left_arrow.jpg");
}

function setup(){
createCanvas(displayWidth-200,displayHeight-200)

uparrow = createSprite(700,500,10,10);
uparrow.addImage("Up",up);
uparrow.scale = 0.25;

rightarrow = createSprite(800,500,10,10);
rightarrow.addImage("Right",right);
rightarrow.scale = 0.25;

leftarrow = createSprite(900,500,10,10);
leftarrow.addImage("Left",left);
leftarrow.scale = 0.25;

downarrow = createSprite(1000,500,10,10);
downarrow.addImage("Down",down);
downarrow.scale = 0.25;

player=createSprite(displayHeight-700,displayHeight-250);
player.addAnimation("Bunny",player_img);

carrot=createSprite(85,850,0.5,0.5);
carrot.addImage("Carrot",carrot_img);

player.scale = 0.25;
carrot.scale = 0.08;
}

function draw(){
background(maze2)

if(keyDown(UP_ARROW)){
player.velocityY=-4
}

if(keyDown(DOWN_ARROW)){
player.velocityY=4
}

if(keyDown(RIGHT_ARROW)){
player.velocityX=4
}

if(keyDown(LEFT_ARROW)){
player.velocityX=-4
}

edges=createEdgeSprites();

player.bounceOff(edges[0]);
player.bounceOff(edges[1]);
player.bounceOff(edges[2]);
player.bounceOff(edges[3]);
if(touches.length>0|| keyDown("space")){
    touches=[];
    player.velocityY = 4;
}
drawSprites();
}

