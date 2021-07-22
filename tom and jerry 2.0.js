var bgImg;
var cat, mouse;
var catImg1, catImg2, mouseImg1, mouseImg2;
function preload() {
    bgImg = loadImage("garden.png");
    catImg1 = loadAnimation("cat1.png");
    mouseImg1 = loadAnimation("mouse1.png");
    catImg2 = loadAnimation("cat2.png", "cat3.png", "cat4.png");
    mouseImg2 = loadAnimation("mouse2.png", "mouse3.png", "mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    
    cat = createSprite(20,20);
    cat.addAnimation(catImg1, catImg2);
    mouse = createSprite(20,20);
    mouse.addAnimation(mouseImg1, mouseImg2);

}

function draw() {

    background(bgImg);
    if(cat.x - mouse.x <(cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("catRunning", catImg2);
        cat.changeAnimation("catRunning");
    }

    drawSprites();
}


function keyPressed(){
  
   if(keyCode === LEFT_ARROW){
       mouse.addAnimation("mouseTeasing", mouseImg2);
       mouse.changeAnimation("mouseTeasing");
       mouse.frameDelay = 25;
   }


}
