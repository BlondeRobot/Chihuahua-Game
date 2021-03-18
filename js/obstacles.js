class bag {
  constructor(ctx) {
    this.ctx = ctx;

    this.x = 900;
    this.y = 300;
    this.width = 300;
    this.height = 200;
  }
  drawBag() {
    this.ctx.fillStyle = "brown";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

class obstacle {
  constructor(ctx, x, y, width, height) {
    this.ctx = ctx;
    this.x = this.randomX();
    this.y = 0;
    this.width = 150;
    this.height = 200;

    this.speedX = 0;
    //this.speedY = 1
    this.speedY = this.randomSpeed();
  }
  drawObstacle() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  move() {
    this.y = this.y + this.speedY;
    if (this.y > 800) {
      this.y = this.y % 800;
    } else if (this.y < 0) {
      this.y = (this.y + 800) % 800;
    }
  }

  startMove() {
    setInterval(this.move.bind(this));
  }

  obstacleRandomFall() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

 

  randomX() {
    return Math.random() * 900;
  }

  randomSpeed() {
    return 1 + Math.random() * (-1 - 1);
  }
  createRandomObstacles() {
    //let temporaryObstacle = new obstacle(ctx, x, y, width, height)
    //RandomObstacles.push(temporaryObstacle)
    //RandomObstacles.push(new obstacle(ctx, x, y, width, height));
    //     this.game.RandomObstacles.push(temporaryObstacle)
    // this.game.RandomObstacles.push(new obstacle(ctx, x, y, width, height));
    //     this.game.RandomObstacles.push(new obstacle(ctx, this.randomX, 0, this.width, this.height)); //falling obstacle
    //     this.game.RandomObstacles.push(new obstacle(ctx, this.randomX, this.canvas.height, this.width, this.height)); // rising obstacle
  }
}
