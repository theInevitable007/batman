class Drop {

    constructor(x,y,radius){
        var options = {
            friction : 0,
            isStatic : false,
            density : 1
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
                       
    }
    display(){
         push();
        strokeWeight(2.5);
        fill("blue");
        stroke("blue");

        translate(this.body.position.x,this.body.position.y);

        
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius)
        pop();
    }
}