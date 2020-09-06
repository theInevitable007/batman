const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boy, boy_img;


var thunder_img;

var umbrella;

var drop1,drop2,drop3,drop4,drop5,drop6,drop7,drop8,drop9,drop10,drop11,drop12,drop13,drop14,drop15,drop16,drop17,drop18,drop19,drop20;
var drop21,drop22,drop23,drop24,drop25,drop26,drop27,drop28,drop29,drop30,drop31,drop32,drop33,drop34,drop35,drop36,drop37,drop38,drop39,drop40;
var drop41,drop42,drop43,drop44,drop45,drop46,drop47,drop48,drop49,drop50,drop51,drop52,drop53,drop54,drop55,drop56,drop57,drop58,drop59,drop60;
var drop61,drop62,drop63,drop64,drop65,drop66,drop67,drop68,drop69,drop70,drop71,drop72,drop73,drop74,drop75,drop76,drop77,drop78,drop79,drop80;
var drop81,drop82,drop83,drop84,drop85,drop86,drop87,drop88,drop89,drop90,drop91,drop92,drop93,drop94,drop95,drop96,drop97,drop98,drop99,drop100;

function preload(){
    boy_img = loadImage('boy.png');
    thunder_img = loadImage('l.png')
}

function setup(){
    var canvas = createCanvas(1200,1200);
    engine = Engine.create();
    world = engine.world;

    drop1 = new Drop(random(0,1200),random(-5,-5), 15);
    drop2 = new Drop(random(0,1200),random(-5,-15), 15);
    drop3 = new Drop(random(0,1200),random(-5,-15), 15);
    drop4 = new Drop(random(0,1200),random(-5,-15), 15);
    drop5 = new Drop(random(0,1200),random(-5,-15), 15);
    drop6 = new Drop(random(0,1200),random(-5,-15), 15);
    drop7 = new Drop(random(0,1200),random(-5,-15), 15);
    drop8 = new Drop(random(0,1200),random(-5,-15), 15);
    drop9 = new Drop(random(0,1200),random(-5,-15), 15);
    drop10 = new Drop(random(0,1200),random(-5,-15), 15);
    drop11 = new Drop(random(0,1200),random(-5,-15), 15);
    drop12 = new Drop(random(0,1200),random(-5,-15), 15);
    drop13 = new Drop(random(0,1200),random(-5,-15), 15);
    drop14 = new Drop(random(0,1200),random(-5,-15), 15);
    drop15 = new Drop(random(0,1200),random(-5,-15), 15);
    drop16 = new Drop(random(0,1200),random(-5,-15), 15);
    drop17 = new Drop(random(0,1200),random(-5,-15), 15);
    drop18 = new Drop(random(0,1200),random(-5,-15), 15);
    drop19 = new Drop(random(0,1200),random(-5,-15), 15);
    drop20 = new Drop(random(0,1200),random(-5,-15), 15);

    drop21 = new Drop(random(0,1200),random(-5,-15), 15);
    drop22 = new Drop(random(0,1200),random(-5,-15), 15);
    drop23 = new Drop(random(0,1200),random(-5,-15), 15);
    drop24 = new Drop(random(0,1200),random(-5,-15), 15);
    drop25 = new Drop(random(0,1200),random(-5,-15), 15);
    drop26 = new Drop(random(0,1200),random(-5,-15), 15);
    drop27 = new Drop(random(0,1200),random(-5,-15), 15);
    drop28 = new Drop(random(0,1200),random(-5,-15), 15);
    drop29 = new Drop(random(0,1200),random(-5,-15), 15);
    drop30 = new Drop(random(0,1200),random(-5,-15), 15);
    drop31 = new Drop(random(0,1200),random(-5,-15), 15);
    drop32 = new Drop(random(0,1200),random(-5,-15), 15);
    drop33 = new Drop(random(0,1200),random(-5,-15), 15);
    drop34 = new Drop(random(0,1200),random(-5,-15), 15);
    drop35 = new Drop(random(0,1200),random(-5,-15), 15);
    drop36 = new Drop(random(0,1200),random(-5,-15), 15);
    drop37 = new Drop(random(0,1200),random(-5,-15), 15);
    drop38 = new Drop(random(0,1200),random(-5,-15), 15);
    drop39 = new Drop(random(0,1200),random(-5,-15), 15);
    drop40 = new Drop(random(0,1200),random(-5,-15), 15);

    drop41 = new Drop(random(0,1200),random(-5,-15), 15);
    drop42 = new Drop(random(0,1200),random(-5,-15), 15);
    drop43 = new Drop(random(0,1200),random(-5,-15), 15);
    drop44 = new Drop(random(0,1200),random(-5,-15), 15);
    drop45 = new Drop(random(0,1200),random(-5,-15), 15);
    drop46 = new Drop(random(0,1200),random(-5,-15), 15);
    drop47 = new Drop(random(0,1200),random(-5,-15), 15);
    drop48 = new Drop(random(0,1200),random(-5,-15), 15);
    drop49 = new Drop(random(0,1200),random(-5,-15), 15);
    drop50 = new Drop(random(0,1200),random(-5,-15), 15);
    drop51 = new Drop(random(0,1200),random(-5,-15), 15);
    drop52 = new Drop(random(0,1200),random(-5,-15), 15);
    drop53 = new Drop(random(0,1200),random(-5,-15), 15);
    drop54 = new Drop(random(0,1200),random(-5,-15), 15);
    drop55 = new Drop(random(0,1200),random(-5,-15), 15);
    drop56 = new Drop(random(0,1200),random(-5,-15), 15);
    drop57 = new Drop(random(0,1200),random(-5,-15), 15);
    drop58 = new Drop(random(0,1200),random(-5,-15), 15);
    drop59 = new Drop(random(0,1200),random(-5,-15), 15);
    drop60 = new Drop(random(0,1200),random(-5,-15), 15);

    drop61 = new Drop(random(0,1200),random(-5,-15), 15);
    drop62 = new Drop(random(0,1200),random(-5,-15), 15);
    drop63 = new Drop(random(0,1200),random(-5,-15), 15);
    drop64 = new Drop(random(0,1200),random(-5,-15), 15);
    drop65 = new Drop(random(0,1200),random(-5,-15), 15);
    drop66 = new Drop(random(0,1200),random(-5,-15), 15);
    drop67 = new Drop(random(0,1200),random(-5,-15), 15);
    drop68 = new Drop(random(0,1200),random(-5,-15), 15);
    drop69 = new Drop(random(0,1200),random(-5,-15), 15);
    drop70 = new Drop(random(0,1200),random(-5,-15), 15);
    drop71 = new Drop(random(0,1200),random(-5,-15), 15);
    drop72 = new Drop(random(0,1200),random(-5,-15), 15);
    drop73 = new Drop(random(0,1200),random(-5,-15), 15);
    drop74 = new Drop(random(0,1200),random(-5,-15), 15);
    drop75 = new Drop(random(0,1200),random(-5,-15), 15);
    drop76 = new Drop(random(0,1200),random(-5,-15), 15);
    drop77 = new Drop(random(0,1200),random(-5,-15), 15);
    drop78 = new Drop(random(0,1200),random(-5,-15), 15);
    drop79 = new Drop(random(0,1200),random(-5,-15), 15);
    drop80 = new Drop(random(0,1200),random(-5,-15), 15);

    drop81 = new Drop(random(0,1200),random(-5,-15), 15);
    drop82 = new Drop(random(0,1200),random(-5,-15), 15);
    drop83 = new Drop(random(0,1200),random(-5,-15), 15);
    drop84 = new Drop(random(0,1200),random(-5,-15), 15);
    drop85 = new Drop(random(0,1200),random(-5,-15), 15);
    drop86 = new Drop(random(0,1200),random(-5,-15), 15);
    drop87 = new Drop(random(0,1200),random(-5,-15), 15);
    drop88 = new Drop(random(0,1200),random(-5,-15), 15);
    drop89 = new Drop(random(0,1200),random(-5,-15), 15);
    drop90 = new Drop(random(0,1200),random(-5,-15), 15);
    drop91 = new Drop(random(0,1200),random(-5,-15), 15);
    drop92 = new Drop(random(0,1200),random(-5,-15), 15);
    drop93 = new Drop(random(0,1200),random(-5,-15), 15);
    drop94 = new Drop(random(0,1200),random(-5,-15), 15);
    drop95 = new Drop(random(0,1200),random(-5,-15), 15);
    drop96 = new Drop(random(0,1200),random(-5,-15), 15);
    drop97 = new Drop(random(0,1200),random(-5,-15), 15);
    drop98 = new Drop(random(0,1200),random(-5,-15), 15);
    drop99 = new Drop(random(0,1200),random(-5,-15), 15);
    drop100 = new Drop(random(0,1200),random(-5,-15), 15);

   
    
}

function draw(){
    background("black")
    Engine.update(engine);

    boy = createSprite(600,600);
    boy.addImage(boy_img); 
    boy.scale = 0.75;

    drop1.display();
    drop2.display();
    drop3.display();
    drop4.display();
    drop5.display();
    drop6.display();
    drop7.display();
    drop8.display();
    drop9.display();
    drop10.display();
    drop11.display();
    drop12.display();
    drop13.display();
    drop14.display();
    drop15.display();
    drop16.display();
    drop17.display();
    drop18.display();
    drop19.display();
    drop20.display();

    drop21.display();
    drop22.display();
    drop23.display();
    drop24.display();
    drop25.display();
    drop26.display();
    drop27.display();
    drop28.display();
    drop29.display();
    drop30.display();
    drop31.display();
    drop32.display();
    drop33.display();
    drop34.display();
    drop35.display();
    drop36.display();
    drop37.display();
    drop38.display();
    drop39.display();
    drop40.display();

    drop41.display();
    drop42.display();
    drop43.display();
    drop44.display();
    drop45.display();
    drop46.display();
    drop47.display();
    drop48.display();
    drop49.display();
    drop50.display();
    drop51.display();
    drop52.display();
    drop53.display();
    drop54.display();
    drop55.display();
    drop56.display();
    drop57.display();
    drop58.display();
    drop59.display();
    drop60.display();

    drop61.display();
    drop62.display();
    drop63.display();
    drop64.display();
    drop65.display();
    drop66.display();
    drop67.display();
    drop68.display();
    drop69.display();
    drop70.display();
    drop71.display();
    drop72.display();
    drop73.display();
    drop74.display();
    drop75.display();
    drop76.display();
    drop77.display();
    drop78.display();
    drop79.display();
    drop80.display();

    drop81.display();
    drop82.display();
    drop83.display();
    drop84.display();
    drop85.display();
    drop86.display();
    drop87.display();
    drop88.display();
    drop89.display();
    drop90.display();
    drop91.display();
    drop92.display();
    drop93.display();
    drop94.display();
    drop95.display();
    drop96.display();
    drop97.display();
    drop98.display();
    drop99.display();
    drop100.display();
    
    if(drop1.x > 15){

    }
    
    spawnThunder();
   drawSprites();
   
}   
function spawnThunder(){
 if(frameCount % 100 === 0){
    var rand = Math.round(random(1,2));
    var thunder = createSprite(random(400,600), random(100,150));
    switch(rand){
        case 1: thunder.addImage(thunder_img);
        thunder.scale = 0.1
        break;
        
        case 2: thunder.addImage(thunder_img);
        thunder.scale = 0.1
        break;

        default:
        break;
    }
thunder.lifetime = 20

    
 }
}