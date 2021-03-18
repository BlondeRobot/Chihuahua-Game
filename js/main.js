document.addEventListener('DOMContentLoaded', () => {

  
function generateSplashScreen(callback) {
    
    const intro =document.getElementById('intro');   
   
    const playButton = document.querySelector('#play');
     playButton.addEventListener('click', () => {
     intro.classList.add('hide');
     const game = document.getElementById('game');
     game.classList.remove('hide');
     game.classList.add('show');
     startGame()
     });
     
     
    } //close generateSplashScreen
   

   
   function startGame() {
       const startButton = document.querySelector('#start');
       startButton.addEventListener('click', () => {
         let canvas = document.querySelector('#chihuahuagame');
         const ctx = canvas.getContext('2d');
         const chihuahuaGame = new Game(ctx) 
         chihuahuaGame.start();
         //console.log('game started');
       });
         
   } //close start game function
    
    generateSplashScreen(startGame);
  }); //close DOM LOAD function
   
    // function printGameOver() {
    //     let gameOver = document.getElementById('gameover');
    //     let canvas = document.querySelector('#chihuahuagame');
    //     canvas.classList.remove('show');
    //     canvas.classList.add('hide');
    //     gameOver.classList.remove('hide');
    //     gameOver.classList.add('show');
    //   }

    function printGameWon() {
      
      let game = document.getElementById("game");
      let gameWon = document.getElementById("gamewon");
      game.classList.remove("show");
      game.classList.add('hide');
      gameWon.classList.remove("hide");
      gameWon.classList.add("show");
    }  

