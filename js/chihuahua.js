class chihuahua {
    constructor(ctx) {
        this.ctx = ctx

        this.x = 0;
        this.y = 325;
        this.w = 200;
        this.h = 150;

        this.speedX = 0;
        this.speedY = 0;
        this.ctx.fillStyle = 'fuchsia';
        this.ctx.fillRect(this.x, this.y, this.w, this.h);

        //this.direction = "right";

    }
}