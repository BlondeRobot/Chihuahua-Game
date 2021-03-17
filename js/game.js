class Game {
   constructor(ctx) { 
    this.ctx = ctx
    this.chihuahua = new chihuahua(ctx)
    this.obstacle = new obstacle(ctx)
    this.randomObstacles = []
    this.bag = new bag(ctx)
   }

   start() {
      
      this.assignControlToKeys()
      
      window.requestAnimationFrame(this.update.bind(this))
   }
   clear() {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }

   update() {
      this.clear();
      this.chihuahua.drawChihuahua();
      this.bag.drawBag();
      this.obstacle.drawObstacle();
      this.obstacle.obstacleRandomFall();
      //this.obstacle.createRandomObstacles();
      //this.obstacle.obstacleRandomRaise();
      //this.chihuahua.collisionWithBag();
      window.requestAnimationFrame(this.update.bind(this))

   }

   assignControlToKeys() {
      document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowUp': 
          console.log('testUp');
          this.chihuahua.moveUp()
          break;
        case 'ArrowDown':
          console.log('testDown'); 
          this.chihuahua.moveDown()
          break;
        case 'ArrowLeft':
          console.log('testLeft'); 
          this.chihuahua.moveLeft()
          break;
        case 'ArrowRight':
          console.log('testRight'); 
          this.chihuahua.moveRight()
          break;
      }
    });

   }
} //close Game class




