class Iron{
    constructor(x,y,width,height)
        {
        var options={
            restitution : 0.8,
            friction : 3,
            density : 30
        }
        this.body = Bodies.rectangle(x, y,55,55, options);
        this.width = 200;
        this.height = 50;
        World.add(world, this.body);
        }
        display()
        {
            var pos = this.body.position;
            var angle = this.body.angle;
            push()
                translate(pos.x, pos.y);
                rotate(angle);
                rectMode(CENTER)
                rect(0, 0, this.width, this.height);
                strokeWeight(4);
                stroke("purple");
                fill("pink");
                pop()
        }
    
    }