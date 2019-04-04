var ScoreBoard = {
    ctx: undefined,
    init: function(ctx) {
        ctx.font = "30px Comfortaa, cursive";
        this.ctx = ctx;
    },
    update: function(score) {
        this.ctx.fillStyle = "#0e2537";
        this.ctx.fillText(Math.floor(score), 530, 50);
    }
};