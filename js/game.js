class Game {
  constructor(ctx, printGameOver, printGameWon) {
    this.ctx = ctx;
    this.chihuahua = new chihuahua(ctx);
    this.randomObstacles = [
      new obstacle(ctx),
      new obstacle(ctx),
      new obstacle(ctx),
    ];
    this.bag = new bag(ctx);
    this.printGameOver = printGameOver;
    this.printGameWon = printGameWon;
  }

  start() {
    this.assignControlToKeys();
    this.randomObstacles.forEach((obstacle) => {
      obstacle.startObstacleMove();
    });
    window.requestAnimationFrame(this.update.bind(this));
  }
  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  drawAllObstacles() {
    this.randomObstacles.forEach((obstacle) => {
      obstacle.drawObstacle();
    });
  }

  // stopAllObstacles() {
  //   this.randomObstacles.forEach((obstacle) => {
  //     obstacle.stopObstacle();
  //   });
  // }

  // reset() {
  //   const ctx = canvas.getContext("2d");
  //   const newGame = new Game(ctx);
  //   newGame.start();
  // }

  update() {
    this.clear();
    this.chihuahua.drawChihuahua();
    this.bag.drawBag();
    this.drawAllObstacles();

    if (this.chihuahua.collisionWithBag(this.bag)) {
      console.log("collision with bag");
      //this.clear();
      this.printGameWon();
    }

    this.randomObstacles.forEach((obstacle) => {
      if (obstacle.collisionWithChihuahua(this.chihuahua)) {
        console.log("collision with obstacle");
        //obstacle.stopObstacle(obstacle.startObstacleMove());
        this.printGameOver();
      }
    });

    window.requestAnimationFrame(this.update.bind(this));
  }

  assignControlToKeys() {
    document.addEventListener("keydown", (event) => {
      switch (event.code) {
        case "ArrowUp":
          console.log("testUp");
          this.chihuahua.moveUp();
          break;
        case "ArrowDown":
          console.log("testDown");
          this.chihuahua.moveDown();
          break;
        case "ArrowLeft":
          console.log("testLeft");
          this.chihuahua.moveLeft();
          break;
        case "ArrowRight":
          console.log("testRight");
          this.chihuahua.moveRight();
          break;
      }
    });
  }
} //close Game class
