const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
var dropsArray= [];
var engine,world;

function setup(){
    engine = Engine.create();
    world = engine.world;
    createCanvas(400,800);
    man = new  Man(200,700,100);
}

function draw(){
    background("yellow");
    Engine.update(engine);
    if(frameCount % 3 === 0 ){
        dropsArray.push(new Drops(random(10,390),0,5));
    }
    for(i = 0; i<dropsArray.length; i++){
        dropsArray[i].display();
    }
    man.display();
}   

