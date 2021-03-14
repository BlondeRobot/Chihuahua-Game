class bag {
    constructor(ctx) {
        this.ctx = ctx

        this.x = 900;
        this.y = 300;
        this.w = 300;
        this.h = 200;

        
        

    }
}

class obstacle {
    constructor(ctx, x, y, w, h) {
      this.ctx = ctx
      this.x = x
      this.y = y
      this.w = w
      this.h = h

      this.speedX = 0
      this.speedY = 1
    }
}

    drawObstacle() {
      this.ctx.fillStyle = 'black';  
      this.ctx.fillRect(
        this.x,
        this.y,
        this.w,
        this.h
      )
    }

    drawBag() {
        this.ctx.fillStyle = 'brown';
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    obstacleRandomFall() {
        this.x = this.randomX()
        this.y = 0
        this.x += this.speedX
        this.y += this.speedY
    }

    randomX() {
        return Math.random()*700
    }