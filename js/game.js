class Game {
  constructor(ctx, printGameOver, printGameWon, playAgainLost, playAgainWon) {
    this.ctx = ctx;
    this.chihuahua = new chihuahua(ctx);
    this.randomObstacles = [
      new obstacle(ctx),
      new obstacle(ctx),
      new obstacle(ctx),
      new obstacle(ctx),
    ];
    this.bag = new bag(ctx);
    this.printGameOver = printGameOver;
    this.printGameWon = printGameWon;
    this.playAgainLost = playAgainLost;
    this.playAgainWon = playAgainWon;
    this.flag = false    
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


  update() {  
    this.clear();
    this.chihuahua.drawChihuahua();
    this.bag.drawBag();
    this.drawAllObstacles();

    if (this.chihuahua.collisionWithBag(this.bag)) {
      this.printGameWon();
      this.playAgainWon();
      this.randomObstacles.forEach((obstacle) => {
        obstacle.stopObstacle();
       });
       this.clear();
       return;
    }

    this.randomObstacles.forEach((obstacle) => {
      if (obstacle.collisionWithChihuahua(this.chihuahua)) {
        let collisionSound = document.getElementById("bark");
        collisionSound.play();
        this.printGameOver();
        this.playAgainLost();
        this.randomObstacles.forEach((obstacle) => { 
          obstacle.stopObstacle();
        });
        this.clear();
        this.flag = true
      }
    });
    if (this.flag === true) {
      return; 
    }
    window.requestAnimationFrame(this.update.bind(this));
  }

  assignControlToKeys() {
    document.addEventListener("keydown", (event) => {
      switch (event.code) {
        case "ArrowUp":
          this.chihuahua.moveUp();
          break;
        case "ArrowDown":
          this.chihuahua.moveDown();
          break;
        case "ArrowLeft":
          this.chihuahua.moveLeft();
          break;
        case "ArrowRight":
          this.chihuahua.moveRight();
          break;
      }
    });
  }
} 
