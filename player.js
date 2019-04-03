class Player {
    constructor(ctx) {
        this.w = 95
        this.h = 196
        this.x = 230
        this.y = 0
        this.ctx = ctx
        this.img1 = new Image();
        this.img1.src = "./img/skiplayer1.png";
        this.img2 = new Image();
        this.img2.src = "./img/skiplayer2.png";
        this.keys = {
            left: false,
            right: false,
        };
        this.img = this.img1; //default image: 1
        // this.frame = 0

    }


    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h) 

    }

    move() {
        document.onkeydown = (e) => {

            if (e.keyCode == '37') {
                this.img = this.img1;
                this.keys.left = true;

            } else if (e.keyCode == 39) {
                this.img = this.img2;
                this.keys.right = true;

            }
        }
        document.onkeyup = (e) => {
            if (e.keyCode == '37') {
                this.keys.left = false;

            } else if (e.keyCode == 39) {
                this.keys.right = false;
            }
        }

        if (this.keys.left) {
            this.x -= 5;
        }

        if (this.keys.right) {
            this.x += 5;
        }



        // this.x++
    }


}