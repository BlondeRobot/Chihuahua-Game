class bag {
  constructor(ctx) {
    this.ctx = ctx;

    this.x = 900;
    this.y = 275;
    this.width = 300;
    this.height = 250;
  }
  drawBag() {
    // this.ctx.fillStyle = "brown";
    // this.ctx.fillRect(this.x, this.y, this.width, this.height);
      const bagImg = new Image();
      bagImg.src = "images/bag cutout.png";
      this.ctx.drawImage(bagImg, this.x, this.y, this.width, this.height);
  }
}

class obstacle {
  constructor(ctx, x, y, width, height) {
    this.ctx = ctx;
    this.x = this.randomX();
    this.y = 0;
    this.width = 150;
    this.height = 220;

    this.speedX = 0;
    this.speedY = this.randomSpeed();
    this.interval = undefined;
  }
  drawObstacle() {
    // this.ctx.fillStyle = "black";
    // this.ctx.fillRect(this.x, this.y, this.width, this.height);
    const obstacleImg = new Image();
    obstacleImg.src = "images/rotweiller cutout.png";
    this.ctx.drawImage(obstacleImg, this.x, this.y, this.width, this.height);
  }

  move() {
    this.y = this.y + this.speedY;
    if (this.y > 800) {
      this.y = this.y % 800;
    } else if (this.y < 0) {
      this.y = (this.y + 800) % 800;
    }
  }

  startObstacleMove() {
    this.interval  = setInterval(this.move.bind(this));
  }

  stopObstacle() {
    if (this.interval) {
      clearInterval(this.interval)

    }
  }


  randomX() {
    return Math.random() * 900;
  }

  randomSpeed() {
    return 1 + Math.random() * (-1 - 1);
  }
  collisionWithChihuahua(chihuahua) {
    return (
      this.x < chihuahua.x + chihuahua.width &&
      this.x + this.width > chihuahua.x &&
      this.y < chihuahua.y + chihuahua.height &&
      this.y + this.height > chihuahua.y
    );
  }
}
