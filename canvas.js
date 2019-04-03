var Game = {

    flagcounter: 0,
    intervalID: '',
    counter: 0,
    canvasDOMEl: undefined,
    ctx: undefined,
    player: undefined,
    scoreBoard: undefined,
    meta: undefined,
    h: 840,
    w: 600,
    fps: 60,
    obstacles: [],
    obstaclesState: true,

    initGame: function() {
        this.canvasDOMEl = document.getElementById("game")
        this.ctx = this.canvasDOMEl.getContext("2d")
        ScoreBoard.init(this.ctx);
        this.scoreBoard = ScoreBoard;
        this.player = new Player(this.ctx)
        this.background = new Background(this.w, this.h, this.ctx)
        this.reset();
        this.obstacles.push(new Obstacle(this.w, this.h, this.ctx, this.background.dx))
        this.startGame();
    },

    startGame: function() {
        this.intervalID = setInterval(() => {
            this.clearScreen();
            this.counter++;
            this.filter();
            if (this.counter % 100 === 0) {
                this.generateObstacle();
            }

            //this.score += 0.01;

            this.drawAll();
            this.moveAll();

        }, 1000 / this.fps)
    },

    // esta función es para que aparezca la meta cada 3 debido al contador de banderas.
    showMeta: function() {
        if (this.flagcounter >= 20) {
            this.obstaclesState = false;
            this.meta = new Meta(this.w, this.h, this.ctx, this.background.dx)
        }
    },

    generateObstacle: function() {
        if (this.obstaclesState) {

            this.obstacles.push(
                new Obstacle(this.w, this.h, this.ctx, this.background.dx)
            );
            this.flagcounter++;
            //console.log(this.obstacles[0].x);
        }
    },

    // limpieza de la pantalla
    clearScreen: function() {
        this.ctx.clearRect(0, 0, this.w, this.h);
    },


    collision: function(player, obstacle) {
        // if (
        //     b.x < a.x + a.w &&
        //     a.x < b.x + b.w &&
        //     b.y < a.y + a.h &&
        //     a.y < b.y + b.h
        // ) return true;
        // else return false;

        if ((obstacle.x > (player.x + player.w)) ||
            ((obstacle.x + obstacle.w) < player.x) ||
            (obstacle.y > (player.y + player.h)) ||
            ((obstacle.y + obstacle.h) < player.y)) return false;
        return true;

    },
    // comprueba si colisiona a y b
    checkFlagCollision: function(player) {
        for (var i = 0; i < this.obstacles.length; i++) {
            if (this.collision(player, this.obstacles[i])) {
                this.obstacles.splice(i, 1)
                this.score += 10;
            }

        }

    },


    //funcion pintar todo
    drawAll: function() {
        this.background.draw()
        this.player.draw()
        this.obstacles.forEach((obstacle) => {
            obstacle.draw();
        });
        this.drawScore()

        // utilizo el estado de obstacles en true
        if (this.obstaclesState) {
            this.showMeta()
        }
        if (this.meta !== undefined) {
            this.meta.draw()
            this.meta.increment();
        }

        this.checkFlagCollision(this.player);
    },

    // mueve todo
    moveAll: function() {
        this.background.increment()
        this.background.move()
        this.player.move()
        this.obstacles.forEach((obstacle) => {
            obstacle.increment()
            obstacle.move();
        });
        if (this.meta !== undefined) {
            this.meta.move()
        }
    },

    // clear obstacles
    filter: function() {
        this.obstacles = this.obstacles.filter((obstacle) => {
            return obstacle.y > 0;
        })
    },

    //pinta el marcador
    drawScore: function() {
        this.scoreBoard.update(this.score);
    },

    reset: function() {
        // this.background = new Background(this.canvasDOMEl.width, this.canvasDOMEl.height, this.ctx);
        // this.player = new Player(this.canvasDOMEl.width, this.canvasDOMEl.height, this.ctx);
        this.obstacles = [];
        this.counter = 0;
        this.score = 0;
        this.flagcounter = 0;
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