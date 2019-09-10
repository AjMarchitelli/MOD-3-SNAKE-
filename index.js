gameState = {};

var down1;
var down2;
var up1;
var up2;
var left1;
var left2;
var right1;
var right2;

//--------------------------preload--loads in assets--gameState object------------------------------

function preload(){

  this.load.image('player1', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/codey.png')
  this.load.image('player2', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/codey.png')

}


//-------------------------create--creates game sprites,images,etc--------------------------------

function create(){


  gameState.player1 = this.add.sprite(30,60,'player1');
  gameState.player2 = this.add.sprite(100,100, 'player2');
  
  gameState.cursors = this.input.keyboard.createCursorKeys();
  gameState.wasd = this.input.keyboard.addKeys(
    {
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    }
  )
  }


//---------------------------update--updates constantly,setIn-----------------------------------------

function update() {

    if(gameState.cursors.down.isDown) {
      gameState.player1.direction = "Down";
      stopInterval1();
      movePlayer1();
    }	else if (gameState.cursors.up.isDown) {
      gameState.player1.direction = "Up";
      stopInterval1();
      movePlayer1();
    } else if (gameState.cursors.left.isDown) {
      gameState.player1.direction = "Left";
      stopInterval1();
      movePlayer1();
    } else if (gameState.cursors.right.isDown) {
      gameState.player1.direction = "Right";
      stopInterval1();
      movePlayer1();
    }

    if(gameState.wasd.down.isDown) {
      gameState.player2.direction = "Down";
      stopInterval2();
      movePlayer2();
    }	else if (gameState.wasd.up.isDown) {
      gameState.player2.direction = "Up";
      stopInterval2();
      movePlayer2();
    } else if (gameState.wasd.left.isDown) {
      gameState.player2.direction = "Left";
      stopInterval2();
      movePlayer2();
    } else if (gameState.wasd.right.isDown) {
      gameState.player2.direction = "Right";
      stopInterval2();
      movePlayer2();
    }

  function movePlayer1() {
    if(gameState.player1.direction === "Down") {
      down1 = setInterval(function(){ checkBoundariesBottom1() }, 7);
      down1;
    } else if(gameState.player1.direction === "Up") {
      up1 = setInterval(function(){ checkBoundariesTop1() }, 7);
      up1;
    } else if(gameState.player1.direction === "Left") {
      left1 = setInterval(function(){ checkBoundariesLeft1() }, 7);
      left1;
    } else if(gameState.player1.direction === "Right") {
      right1 = setInterval(function(){ checkBoundariesRight1() }, 7);
      right1;
    }
  }

  function movePlayer2() {
    if(gameState.player2.direction === "Down") {
      down2 = setInterval(function(){ checkBoundariesBottom2() }, 7);
      down2;
    } else if(gameState.player2.direction === "Up") {
      up2 = setInterval(function(){ checkBoundariesTop2() }, 7);
      up2;
    } else if(gameState.player2.direction === "Left") {
      left2 = setInterval(function(){ checkBoundariesLeft2() }, 7);
      left2;
    } else if(gameState.player2.direction === "Right") {
      right2 = setInterval(function(){ checkBoundariesRight2() }, 7);
      right2;
    }
  }


  function stopInterval1() {
    clearInterval(down1);
    clearInterval(up1);
    clearInterval(left1);
    clearInterval(right1);
  }

  function stopInterval2() {
    clearInterval(down2);
    clearInterval(up2);
    clearInterval(left2);
    clearInterval(right2);
  }
}
//---------------------------config--object that contains game info---------------------------------------

const config = {
  width: 500,
  height: 500,
  backgroundColor: '#92a8d1',
  scene: {
    preload,
    create,
    update
  },
};

//newPhaser.game
const game = new Phaser.Game(config);


