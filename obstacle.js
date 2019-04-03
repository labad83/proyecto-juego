class Obstacle {
    constructor(w, h, ctx, dx) {
        this.ctx = ctx
        this.w = w
        this.h = h
        this.x = Math.floor(Math.random() * (580 - 20) + 20)
        this.y = h + 50
        this.obsW = 21
        this.obsH = 46
        this.dx = dx
        this.img = new Image();
        this.img.src = "./img/bverde.png";

    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.obsW, this.obsH)

    }

    increment() {
        this.dx *= 1.001
    }

    move() {
        this.y -= this.dx;
        if (this.y < -this.h) this.y = 0;
    }
}