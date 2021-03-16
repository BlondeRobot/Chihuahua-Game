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
   }


} //close Game class

// function clear() {
//     this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
//   }

// function start() {
//    this.chihuahua.drawChihuahua();
//    this.bag.drawBag();
//    this.obstacle.drawObstacle();
// }
