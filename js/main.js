document.addEventListener("DOMContentLoaded", () => {
  function generateSplashScreen(callback) {
    const intro = document.getElementById("intro");
    const playButton = document.querySelector("#play");
    playButton.addEventListener("click", () => {
      intro.classList.add("hide");
      const game = document.getElementById("game");
      game.classList.remove("hide");

      startGame();
    });
  }

  function startGame() {
    const startButton = document.querySelector("#start");
    startButton.addEventListener("click", () => {
      let canvas = document.querySelector("#chihuahuagame");
      const ctx = canvas.getContext("2d");
      const chihuahuaGame = new Game(ctx, printGameOver, printGameWon, playAgainLost, playAgainWon);
      chihuahuaGame.start();
    });
  }

  generateSplashScreen(startGame);

  function playAgainWon() {
    let gameWon = document.getElementById("gamewon");
    const playAgainWonButton = document.querySelector('#playagainwon');
    playAgainWonButton.addEventListener('click', () => {
    gameWon.classList.add('hide');
    const game = document.getElementById('game');
    game.classList.remove('hide');
   });
  }
 

  function playAgainLost() {
    let gameOver = document.getElementById("gameover");
    const playAgainLostButton = document.querySelector("#playagainlost");
    playAgainLostButton.addEventListener("click", () => {
      gameOver.classList.add("hide");
      const game = document.getElementById("game");
      game.classList.remove("hide");
    });
  }

  function printGameOver() {
    let gameOver = document.getElementById("gameover");
    const game = document.getElementById("game");
    game.classList.add("hide");
    gameOver.classList.remove("hide");
  }

  function printGameWon() {
    let game = document.getElementById("game");
    let gameWon = document.getElementById("gamewon");
    game.classList.add("hide");
    gameWon.classList.remove("hide");
  }

});


