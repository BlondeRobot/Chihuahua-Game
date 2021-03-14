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
}

drawChihuahua() {
    this.ctx.fillStyle = 'fuchsia';
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
}

moveChihuahua() {
 this.x += this.speedX
}

