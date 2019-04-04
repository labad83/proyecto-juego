class Meta {
    constructor(w, h, ctx, dx) {
        this.ctx = ctx
        this.w = w
        this.h = h
        this.x = 200
        this.y = h
        this.metaW = 180
        this.metaH = 64
        this.dx = dx
        this.img = new Image();
        this.img.src = "./img/meta.png";

    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.metaW, this.metaH)

    }

    increment() {
        this.dx *= 1.001
    }

    move() {

        this.y -= this.dx;
        // if (this.y < -this.h) this.y = 0;
    }
}