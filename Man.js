class Man{
    constructor(x,y,radius){
        var options={
            isStatic:true
        }
        this.radius = radius;
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world, this.body);
        this.image = loadImage("man.png");
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius*2);
    }
}