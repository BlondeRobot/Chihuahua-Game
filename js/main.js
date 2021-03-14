document.addEventListener('DOMContentLoaded', () => {

// function generateSplashScreen() {
    
//  const intro =document.getElementById('intro');   

//  const playButton = document.querySelector('#play');
//   playButton.addEventListener('click', () => {
//   intro.classList.add('hide');
//   const game = document.getElementById('game');
//   game.classList.remove('hide');
//   game.classList.add('show');
//   });
  
//  } //close generateSplashScreen

//  generateSplashScreen();

// function startGame() {
//     const startButton = document.querySelector('#start');
//     startButton.addEventListener('click', () => {
//       let canvas = document.querySelector('#chihuahua');
//       const ctx = canvas.getContext('2d');
//       const chihuahuaGame = new Game({ctx: ctx, chihuahua: new Chihuahua});
      
//     });  
// } //close start game function
//  startGame();

//  function generateSplashScreen() {
    
//     const intro =document.getElementById('intro');   
   
//     const playButton = document.querySelector('#play');
//      playButton.addEventListener('click', () => {
//      intro.classList.add('hide');
//      const game = document.getElementById('game');
//      game.classList.remove('hide');
//      game.classList.add('show');

//      const startButton = game.querySelector('#start');
//        startButton.addEventListener('click', () => {
//          let canvas = game.querySelector('#chihuahua');
//          const ctx = canvas.getContext('2d');
//          const chihuahuaGame = new Game({ctx: ctx, chihuahua: new Chihuahua});
//        });
//        chihuahuaGame.start();
//     }); 
     
//     } //close generateSplashScreen
//     generateSplashScreen();
  
function generateSplashScreen(callback) {
    
    const intro =document.getElementById('intro');   
   
    const playButton = document.querySelector('#play');
     playButton.addEventListener('click', () => {
     intro.classList.add('hide');
     const game = document.getElementById('game');
     game.classList.remove('hide');
     game.classList.add('show');
     });
     callback()
     
    } //close generateSplashScreen
   
    
   
   function startGame() {
       const startButton = document.querySelector('#start');
       startButton.addEventListener('click', () => {
         let canvas = document.querySelector('#chihuahua');
         const ctx = canvas.getContext('2d');
         const chihuahuaGame = new Game({ctx: ctx, chihuahua: new Chihuahua});
         
       });  
   } //close start game function
    
    generateSplashScreen(startGame);
   

}); //close DOM LOAD function