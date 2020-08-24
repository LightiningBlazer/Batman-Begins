class Drops {
    constructor(x,y,radius){
        this.radius = radius;
        this.body = Bodies.circle(x,y,radius);
        World.add(world, this.body);
        this.image = loadImage("raindrop.png");
    }
    display(){
        fill("blue");
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.radius*2,this.radius*2);
    }
}