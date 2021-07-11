class ComputerBase{

constructor(x,y,width,height){

var options = {
isStatic: true
}

this.body = Bodies.rectangle(x,y,this.width,this.height,options);
this.image = loadImage("assets/base2.png")
this.width = width;
this.height = height;
World.add(world, this.body);



}


display(){

    var pos = this.body.position;
    var angle = this.body.angle;

push();
translate(pos.x, pos.y);
rotate(angle);
imageMode(CENTER);
image(this.image,0,0,100,100);

pop();
}
}