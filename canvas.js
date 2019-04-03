var Game = {

    intervalID: '',
    counter: 0,
    canvasDOMEl: undefined,
    ctx: undefined,
    player: undefined,
    h: 840,
    w: 600,
    fps: 60,
    obstacles: [],

    initGame: function() {
        this.canvasDOMEl = document.getElementById("game")
        this.ctx = this.canvasDOMEl.getContext("2d")
        this.player = new Player(this.ctx)
        this.background = new Background(this.w, this.h, this.ctx)
        this.reset()
        this.obstacles.push(new Obstacle(this.w, this.h, this.ctx))
        this.startGame()
    },
    startGame: function() {
        this.intervalID = setInterval(() => {
            this.clearScreen()
            this.drawAll()
            this.moveAll()
            this.filter()

            if (this.counter % 60 === 0) {
                this.generateObstacle()
            }

            this.counter++
        }, 1000 / 60)
    },

    randomIntFromInterval: function(min, max) // min and max included
        {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },

    generateObstacle: function() {
        this.obstacles.push(
            new Obstacle(this.w, this.h, this.ctx)
        );
    },

    clearScreen: function() {
        this.ctx.clearRect(0, 0, this.w, this.h);
    },
    drawAll: function() {
        this.background.draw()
        this.player.draw()
        this.obstacles.forEach((obstacle) => {
            obstacle.draw();
        });
    },


    moveAll: function() {
        this.background.increment()
        this.background.move()
        this.player.move()
            // console.log(this.obstacles)
        this.obstacles.forEach((obstacle) => {
            obstacle.increment()
            obstacle.move();
        });

    },

    // clear obstacles
    filter: function() {
        this.obstacles = this.obstacles.filter((obstacle) => {
            return obstacle.y > 0;
        })
    },
    reset: function() {
        // this.background = new Background(this.canvasDOMEl.width, this.canvasDOMEl.height, this.ctx);
        // this.player = new Player(this.canvasDOMEl.width, this.canvasDOMEl.height, this.ctx, this.keys);
        this.obstacles = [];
    },
}







// canvasDOMEl.setAttribute("height", window.innerHeight)
// canvasDOMEl.setAttribute("width", window.innerWidth)

// canvasW = canvasDOMEl.innerWidth
// canvasH = canvasDOMEl.innerHeight




// function background() {
//     var fondo = new Image();
//     fondo.src = "./fondo.png";
//     fondo.onload = function() {
// pintamos la imagen de fondo del canvas (fondo,w2 es al medio,70 es altura de top hacia abajo, 76x141 es el tamaño de la imagen)
//     ctx.drawImage(fondo, w2 - 230, 0, 400, 700)
// };

// }

// function paintPlayer() {
//     var skyPlayer = new Image();
//     skyPlayer.src = "./skyplayer.png";
//     skyPlayer.onload = function() {
// pintamos la imagen (skyplayer,w2 es al medio,60 es altura de top hacia abajo, 56x121 es el tamaño de la imagen)
//         ctx.drawImage(skyPlayer, w2 - 76, 60, 56, 121)
//     };

// }



// function draw() {

//     background();

// setInterval(() => {
//     paintPlayer();
// }, 10);

// }

// draw();