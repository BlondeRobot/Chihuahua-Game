class chihuahua {
    constructor(ctx) {
        this.ctx = ctx

        this.x = 0;
        this.y = 325;
        this.w = 200;
        this.h = 150;

        this.speedX = 1;
        this.speedY = 0;
        
       

        //this.direction = "right";

    }
    drawChihuahua() {
            this.ctx.fillStyle = 'blue';
            this.ctx.fillRect(this.x, this.y, this.w, this.h)
        }
}

// function drawChihuahua() {
//     this.ctx.fillStyle = 'blue';
//     this.ctx.fillRect(this.x, this.y, this.w, this.h)
// }

// moveChihuahua() {
//  this.x += this.speedX
// }

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
// }