window.onload = function() {
    document.getElementById("start-button").onclick = function() {
        document.getElementById("portada").setAttribute("class", "noVisible")
        document.getElementById("game").style.display = 'block'
        console.log(game)
        Game.initGame();
    }.bind(this);
}.bind(this);