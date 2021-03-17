class bag {
    constructor(ctx) {
        this.ctx = ctx

        this.x = 900;
        this.y = 300;
        this.width = 300;
        this.height = 200;

 
    }
    drawBag() {
        this.ctx.fillStyle = 'brown';
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

class obstacle {
    constructor(ctx, x, y, width, height) {
      this.ctx = ctx
      this.x = this.randomX()
      this.y = 0
      this.width = 150
      this.height = 200

      this.speedX = 0
      this.speedY = 1
    }
    drawObstacle() {
        this.ctx.fillStyle = 'black';  
        this.ctx.fillRect(
          this.x,
          this.y,
          this.width,
          this.height
        )
      }
     obstacleRandomFall() {
    
        this.x += this.speedX
        this.y += this.speedY
    }

    //  obstacleRandomRaise() {
        
    //     this.y = 800
    //     this.x += this.speedX
    //     this.y -= this.speedY
    // }

    randomX() {
        return Math.random()*900
    }  

    createRandomObstacles() {
        
        this.game.RandomObstacles.push(new obstacle(ctx, this.randomX, 0, this.width, this.height));
        this.game.RandomObstacles.push(new obstacle(ctx, this.randomX, this.canvas.height, this.width, this.height));
    }
}

// constructor(x, y, size, ctx) {
//     super(x, y, size, ctx)
//     this.x = Math.floor(Math.random() * canvas.width); // ver medida del cerebro, puede que haga falta añadir this.width;
//     this.y = 0;
//     this.size = 100;
//     this.ctx = canvas.getContext("2d");
//   }  

    

    // obstacleRandomFall() {
    //     this.x = this.randomX()
    //     this.y = 0
    //     this.x += this.speedX
    //     this.y += this.speedY
    // }

    //   obstacleRandomRaise() {
    //     this.x = this.randomX()
    //     this.y = this.canvas.height
    //     this.x += this.speedX
    //     this.y -= this.speedY
    // }

    // randomX() {
    //     return Math.random()*700
    // }