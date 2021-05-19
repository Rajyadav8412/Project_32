class Box  {
    constructor(x, y, width, height) {
        var options = {
            'restitution':1.1,
            'friction':0.03,
           // 'density':1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        this.Visibility=255;
       
        World.add(world, this.body);
      }
      display(){
       

        if((this.body.speed)<3){
       var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("blue");
        rect( 0, 0, this.width, this.height);
        pop();
    }
    else{
      World.remove(world,this.body);
      push();
      this.Visibility=this.Visibility-1;
      tint(255,this.Visibility);
      
      pop();
    }
      }
  };
  