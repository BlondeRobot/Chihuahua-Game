class Game {
   constructor() { 
    this.ctx = ctx
    this.chihuahua = new chihuahua
    this.obstacle = new obstacle
    this.bag = new bag
   }




} //close Game class

clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
  }

  printGameOver()

  printGameWon()