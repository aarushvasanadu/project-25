class Ball{
    constructor(x,y,width,height){
        var options = {
            restitution:0.8,
            friction:0.5,
            density:0.5
        }
        this.image = loadImage('paper.png')
this.body = Bodies.rectangle(x,y,width,height,options)
this.width = width
this.height = height
this.x = x
this.y = y
World.add(world,this.body)
    }
    display(){
    imageMode (CENTER)
    image(this.image , this.body.position.x , this.body.position.y  , this.width , this.height)
    
}}
    
