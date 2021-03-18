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
    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  moveUp() {
    this.y = this.y - this.speedY;
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

  collisionWithBag(bag) {
    return (
      this.x < bag.x + bag.width &&
      this.x + this.width > bag.x &&
      this.y < bag.y + bag.height &&
      this.y + this.height > bag.y
    );
  }
  // collisionWithObstacle(obstacle) {
  //   return (
  //     this.x < obstacle.x + obstacle.width &&
  //     this.x + this.width > obstacle.x &&
  //     this.y < obstacle.y + obstacle.height &&
  //     this.y + this.height > obstacle.y
  //   );
  // }
}
