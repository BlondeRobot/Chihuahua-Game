# Chihuahua-Game
Vanilla JS game
# Chihuahua Game

The Chihuahua Game

The purpose of the game is to help a chihuahua get to her LV bag home. On her way home the chihuahua will have to navigate between big, angry dogs. If she collides with one, the game is over. If she makes it to her bag, the game is won.

The player is represented by a picture of chihuahua. The obstacles are represented by pictures of dogs. The player needs to use arrow up and arrow down keys to navigate between the obstacles. The chihuahua moves horizontally from left to right, the obstacles move vertically from top to bottom and from bottom to top. In order to avoid collision the chihuahua needs to move vertically.

The game ends when the chihuahua collides with an obstacle or when it collides with the bag.

### LANGUAGES

HTML
CSS
VANILLA JS (DOM, CANVAS)


## MVP
- no style, no images, use boxes to represent the player, the obstacles and the bag
- create canvas 1200px x 800px and appropriately sized boxes that can be easily swapped for images later
- game state screens 
-  function to make player box move, 
- functions to make obstacles move,
- collision detection functions

## backlog

- styling, design, images 
- music, sounds on collision




### GAMES STATES
_StartScreen
* title
* instructions
* start button

_GameScreen
_GameOverScreen
_GameWonScreen

GAME
* Create interface
* Create player
* Move player forward
  * Press arrow up and arrow down to move player vertically
* Create obstacles that fall and raise
* Check for collision with obstacle
    * If a collision is detected --> Game Over --> Show Game Over screen
* Check for collision with bag 
    * if collision is detected --> GameWonScreen

## index.html
divs for game state screens
start, play, play again buttons
canvas element

## style.css
style game state screens
style buttons
hide/show game state screens

## main.js

printStartScreen();
playButton()
printGameScreen();
startButton();
printGameOverScreen();
playAgainButton();
printGameWonScreen();
clearStartScreen();
clearGameScreen();
clearGameOverScreen();

## chihuahua.js

class chihuahua constructor
moveChihuahuaForward()
move() //set interval for moveForward
avoidCollision()?
goUp()
goDown()
collisionWithObstacle() //game over
collisionWithBag() // game won
stop() ?

## obstacles.js
class obstacle constructor
moveObstaclesForward()
obstacleFall()
obstacleRaise()

## game.js

class Game constructor
drawChihuahua()
drawObstacles()
assignControlsToKeys()
generateObstacles()
clearCanvas()
update()
start()








