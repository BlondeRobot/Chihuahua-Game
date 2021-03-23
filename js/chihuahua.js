class chihuahua {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 0;
    this.y = 340;
    this.width = 150;
    this.height = 105;
    this.speedX = 50;
    this.speedY = 50;
  }

  drawChihuahua() {
    const chihuahuaImg = new Image();
    chihuahuaImg.src = "images/main chihuahua w150h105.png";
    this.ctx.drawImage(chihuahuaImg, this.x, this.y, this.width, this.height);
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
 
}
