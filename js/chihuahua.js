class chihuahua {
  constructor(ctx) {
        this.ctx = ctx;
        this.x = 0;
        this.y = 325;
        this.width = 200;
        this.height = 150;
        this.speedX = 50;
        this.speedY = 50;
    }

  drawChihuahua() {
    this.ctx.fillStyle = 'blue';
    this.ctx.fillRect(this.x, this.y, this.width, this.height)
  }

  

  moveUp() {
    this.y =  this.y - this.speedY;
  }

  moveDown() {
    this.y = this.y + this.speedY;
  }

  moveLeft() {
    this.x = this.x - this.speedX;
  }

  moveRight() {
    this.x = this.x + this.speedX;
  }

  // collisionWithBag() {
  //   if (this.x < this.bag.x + this.bag.width &&
  //       this.x + this.width > this.bag.x &&
  //       this.y < this.bag.y + this.bag.height &&
  //       this.y + this.height > this.bag.y) {
  //         console.log('collision detected')
  //       }

//printGameWon()
//} 

//   collisionWithBag() {
//     if (this.chihuahua.x < this.bag.x + this.bag.width &&
//         this.chihuahua.x + this.chihuahua.width > this.bag.x &&
//         this.chihuahua.y < this.bag.y + this.bag.height &&
//         this.chihuahua.y + this.chihuahua.height > this.bag.y) {
//           console.log('collision detected')
//         }

// //printGameWon()
// } 

}







// collisionWithBag() {
//     if (this.chihuahua.x < this.bag.x + this.bag.width &&
//         this.chihuahua.x + this.chihuahua.width > this.bag.x &&
//         this.chihuahua.y < this.bag.y + this.bag.height &&
//         this.chihuahua.y + this.chihuahua.height > this.bag.y)

// printGameWon()
// } 

// collisionWithObstacle() {
//     if (this.chihuahua.x < this.obstacle.x + this.obstacle.width &&
//         this.chihuahua.x + this.chihuahua.width > this.obstacle.x &&
//         this.chihuahua.y < this.obstacle.y + this.obstacle.height &&
//         this.chihuahua.y + this.chihuahua.height > this.obstacle.y)

// printGameOver()
// } add as method to constructor