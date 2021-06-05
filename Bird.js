class Bird extends BaseClass{
  constructor(x,y){
    super(x,y,90,90);
    this.image = loadImage("sprites/download1.jpg");
   //this.image.scale=2
  }
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }
}