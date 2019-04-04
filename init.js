window.onload = function() {
    document.getElementById("start-button").onclick = function() {
        document.getElementById("portada").style.display = 'none'
        document.getElementById("game").style.display = 'block'
        Game.initGame();
    }.bind(this);
}.bind(this);