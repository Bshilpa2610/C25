class paper
{
    constructor(x,y,r)
    {
        var options = {
            isStatic:false,
            //either modify friction/density or apply force parameters in sketch.js
            restitution:0.4,
            friction:0.5,
            density:0.9
        }
        this.x=x;
		this.y=y;
		this.r=70;
		this.body=Bodies.circle(this.x, this.y, this.r/3, options)
        this.image = loadImage("Crumpledpaper.png");
		World.add(world, this.body);

    }

    display()
    {
        var pos=this.body.position;		

			push()
			translate(pos.x, pos.y);
			imageMode(CENTER)
			strokeWeight(4);
			fill(255,0,155)
			image(this.image,0,0,this.r, this.r);
			pop()
    }
}