 const gravity = 0.6
 class Sprite {
    constructor( {position, dimensions} ){
      this.position = position;
      this.width = dimensions.width;
      this.height = dimensions.height; 
    }
    draw (){
      context.fillStyle = 'white';
      context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    update(){
      
    }
 }
 const bonequinha = new Sprite({
    position: {
      x: 100, 
      y: 100
    },
    dimensions: {
      width: 50,
      height: 150
    }
})