class Obstacle {
    constructor(w, h, ctx) {
        this.ctx = ctx
        this.w = w
        this.h = h
        this.x = 50
        this.y = h + 50
        this.obsW = 42
        this.obsH = 42
        this.dx = 5
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