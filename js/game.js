class Game {
   constructor(ctx) { 
    this.ctx = ctx
    this.chihuahua = new chihuahua(ctx)
    this.obstacle = new obstacle(ctx)
    this.bag = new bag(ctx)
   }

   start() {
      this.chihuahua.drawChihuahua();
      this.bag.drawBag();
      this.obstacle.drawObstacle();
      this.chihuahua.moveChihuahua();
      this.assignControlToKeys
   }
   clear() {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }

   update() {
      this.clear();
      this.chihuahua.drawChihuahua();
      this.bag.drawBag();
      this.obstacle.drawObstacle();
   }
   assignControlToKeys() {
      document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowUp': 
          this.chihuahua.speedY -= 1;
          break;
        case 'ArrowDown': 
          this.chihuahua.speedY += 1;
          break;
        case 'ArrowLeft': 
          this.chihuahua.speedX -= 1;
          break;
        case 'ArrowRight': 
          this.chihuahua.speedX += 1;
          break;
      }
    });
    document.addEventListener('keyup', (event) => {
      this.chihuahua.speedX = 0;
      this.chihuahua.speedY = 0;
    });
   }
} //close Game class




