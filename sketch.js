const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

var bomb_image;
function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 300, 300, 180); 
//    First layer of pig
    pig1 = new Pig(800, 350);
    pig2 = new Pig(850 ,350);
    pig3 = new Pig(900, 350);
    pig4 = new Pig(950, 350);
    pig5 = new Pig(1000, 350);

    //    Second layer of pig
    pig6 = new Pig(825, 300);
    pig7 = new Pig(875 ,300);
    pig8 = new Pig(925, 300);
    pig9 = new Pig(975, 300);

     //    Third layer of pig
     pig10 = new Pig(850, 250);
     pig11 = new Pig(900 ,250);
     pig12 = new Pig(950, 250);

     //    Fourth layer of pig
     pig13 = new Pig(875, 200);
     pig14 = new Pig(925 ,200);

     //    Fifth layer of pig
     pig15 = new Pig(900, 150);
     bomb = new bomb(900, 100);
     
     
    bird = new Bird(200,50);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    
    ground.display();
    pig1.display();
    pig2.display();
    pig3.display();
    pig4.display();
    pig5.display();

    pig6.display();
    pig7.display();
    pig8.display();
    pig9.display();

    pig10.display();
    pig11.display();
    pig12.display();

    pig13.display();
    pig14.display();

    pig15.display();
    bomb.display();
    

    bird.display();

    platform.display();
    slingshot.display(); 
    text("CREATED BY : Kaushttav Karan",320,385);   
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}