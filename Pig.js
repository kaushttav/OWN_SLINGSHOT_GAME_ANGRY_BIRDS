class Pig extends BaseClass {
  constructor(x, y){
    
    var options = {
      isStatic: true
  }
    super(x,y,50,50,options);
    this.image = loadImage("sprites/enemy.png");
  }

};