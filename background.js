class Background {
    constructor(w, h, ctx) {
        this.w = w,
            this.h = h,
            this.x = 0,
            this.y = 0,
            this.ctx = ctx,
            this.img = new Image();
        this.img.src = "./img/fondocanvas2.png";

        this.dx = 5;
    }

    increment() {
        this.dx *= 1.001
    }

    draw() {
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.w,
            this.h
        );
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y + this.h,
            this.w,
            this.h
        );
    }

    move() {
        this.y -= this.dx;

        if (this.y < -this.h) this.y = 0;
    }



}