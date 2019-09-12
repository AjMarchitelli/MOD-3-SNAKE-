// gameState = {};

// var down1;
// var down2;
// var up1;
// var up2;
// var left1;
// var left2;
// var right1;
// var right2;
// var numSnakeSections = 2; //number of snake body sections
// var snakeSpacer = 16;
// var snakeSection = new Array(); //array of sprites that make the snake body sections
// var snakePath = new Array(); 

// //--------------------------preload--loads in assets--gameState object------------------------------

// function preload(){

//   this.load.image('headUp', 'assets/worm_animation/snake_head_up.png')
//   this.load.image("headDown", 'assets/worm_animation/snake_head_down.png')
//   this.load.image("headLeft", 'assets/worm_animation/snake_head_left.png')
//   this.load.image("headRight", 'assets/worm_animation/snake_head_right.png')
//   this.load.image("tailDown", 'assets/worm_animation/snake_tail_down.png')
//   this.load.image("tailUp", 'assets/worm_animation/snake_tail_up.png')
//   this.load.image("tailLeft", 'assets/worm_animation/snake_tail_left.png')
//   this.load.image("tailRight", 'assets/worm_animation/snake_tail_right.png')
//   this.load.image("bodyHorizontal", 'assets/worm_animation/snake_body_horizontal.png')
//   this.load.image("bodyVertical", 'assets/worm_animation/snake_body_vertical.png')
//   this.load.image("curveBottomLeft", 'assets/worm_animation/snake_curve_bottom_left.png')
//   this.load.image("curveBottomRight", 'assets/worm_animation/snake_curve_bottom_right.png')
//   this.load.image("curveTopLeft", 'assets/worm_animation/snake_curve_top_left.png')
//   this.load.image("curveTopRight", 'assets/worm_animation/snake_curve_top_right.png')
  
// }


// //-------------------------create--creates game sprites,images,etc--------------------------------
// //create--creates game sprites,images,etc

// function create(){

//   gameState.player1 = this.add.sprite(30,60, 'headUp');
//   debugger
//   gameState.player1.anchor.setTo(0.5, 0.5);
  

//   for (var i = 1; i <= numSnakeSections - 1; i++) {
//     snakeSection[i] = game.add.sprite(400, 300, 'bodyVertical');
//     snakeSection[i].anchor.setTo(0.5, 0.5);
//   }

//   //  Init snakePath array
//   for (var i = 0; i <= numSnakeSections * snakeSpacer; i++) {
//     snakePath[i] = new Phaser.Point(400, 300);
//   }



//   gameState.player2 = this.add.sprite(100,100, 'headDown');
  
//   gameState.cursors = this.input.keyboard.createCursorKeys();
//   gameState.wasd = this.input.keyboard.addKeys(
//     {
//       up: Phaser.Input.Keyboard.KeyCodes.W,
//       down: Phaser.Input.Keyboard.KeyCodes.S,
//       left: Phaser.Input.Keyboard.KeyCodes.A,
//       right: Phaser.Input.Keyboard.KeyCodes.D,
//     }
//   )
//   }


// //---------------------------update--updates constantly,setIn-----------------------------------------

// function update() {

//     if(gameState.cursors.down.isDown) {
//       gameState.player1.direction = "Down";
//       stopInterval1();
//       movePlayer1();
//     }	else if (gameState.cursors.up.isDown) {
//       gameState.player1.direction = "Up";
//       stopInterval1();
//       movePlayer1();
//     } else if (gameState.cursors.left.isDown) {
//       gameState.player1.direction = "Left";
//       stopInterval1();
//       movePlayer1();
//     } else if (gameState.cursors.right.isDown) {
//       gameState.player1.direction = "Right";
//       stopInterval1();
//       movePlayer1();
//     }

//     if(gameState.wasd.down.isDown) {
//       gameState.player2.direction = "Down";
//       stopInterval2();
//       movePlayer2();
//     }	else if (gameState.wasd.up.isDown) {
//       gameState.player2.direction = "Up";
//       stopInterval2();
//       movePlayer2();
//     } else if (gameState.wasd.left.isDown) {
//       gameState.player2.direction = "Left";
//       stopInterval2();
//       movePlayer2();
//     } else if (gameState.wasd.right.isDown) {
//       gameState.player2.direction = "Right";
//       stopInterval2();
//       movePlayer2();
//     }

//   function movePlayer1() {
//     if(gameState.player1.direction === "Down") {
//       gameState.player1.setTexture('headDown')
      
//       down1 = setInterval(function(){ checkBoundariesBottom1() }, 7);
//       down1;
//     } else if(gameState.player1.direction === "Up") {
//       gameState.player1.setTexture('headUp')
//       up1 = setInterval(function(){ checkBoundariesTop1() }, 7);
//       up1;
//     } else if(gameState.player1.direction === "Left") {
//       gameState.player1.setTexture('headLeft')
//       left1 = setInterval(function(){ checkBoundariesLeft1() }, 7);
//       left1;
//     } else if(gameState.player1.direction === "Right") {
//       gameState.player1.setTexture('headRight')
//       right1 = setInterval(function(){ checkBoundariesRight1() }, 7);
//       right1;
//     }
//   }

//   function movePlayer2() {
//     if(gameState.player2.direction === "Down") {


//       var part = snakePath.pop();

//       part.setTo(snakeHead.x, snakeHead.y);

//       snakePath.unshift(part);

//       for (var i = 1; i <= numSnakeSections - 1; i++) {
//         snakeSection[i].x = (snakePath[i * snakeSpacer]).x;
//         snakeSection[i].y = (snakePath[i * snakeSpacer]).y;
//       }



//       gameState.player2.setTexture('headDown')
//       down2 = setInterval(function(){ checkBoundariesBottom2() }, 7);
//       down2;
//     } else if(gameState.player2.direction === "Up") {
//       gameState.player2.setTexture('headUp')
//       up2 = setInterval(function(){ checkBoundariesTop2() }, 7);
//       up2;
//     } else if(gameState.player2.direction === "Left") {
//       gameState.player2.setTexture('headLeft')
//       left2 = setInterval(function(){ checkBoundariesLeft2() }, 7);
//       left2;
//     } else if(gameState.player2.direction === "Right") {
//       gameState.player2.setTexture('headRight')
//       right2 = setInterval(function(){ checkBoundariesRight2() }, 7);
//       right2;
//     }
//   }


//   function stopInterval1() {
//     clearInterval(down1);
//     clearInterval(up1);
//     clearInterval(left1);
//     clearInterval(right1);
//   }

//   function stopInterval2() {
//     clearInterval(down2);
//     clearInterval(up2);
//     clearInterval(left2);
//     clearInterval(right2);
//   }
// }
// //---------------------------config--object that contains game info---------------------------------------

// const config = {
//   width: 1000,
//   height: 1000,
//   backgroundColor: 0xdda0dd,
//   scene: {
//     preload,
//     create,
//     update
//   },
// };

// //newPhaser.game
// const game = new Phaser.Game(config);

var config = {
  type: Phaser.WEBGL,
  width: 640,
  height: 480,
  backgroundColor: '#5F738A',
  parent: 'phaser-example',
  physics: {
    default: "arcade"
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var snake;
var snake_two;
var food;
var cursors_for_snake1;
var cursors_for_snake2;
var text;
var bomb;
var snake_two_score_counter;
var snake_one_score_counter;
var text_snake_one;
var text_snake_two;
var text2;

//  Direction consts
var UP = 0;
var DOWN = 1;
var LEFT = 2;
var RIGHT = 3;

var game = new Phaser.Game(config);

function preload() {
  this.load.image('food', 'assets/games/snake/rabbit.png');
  this.load.image('tony', 'assets/games/snake/tony.png');
  this.load.image('headUp', 'assets/worm_animation/snake_head_up.png')
  this.load.image("headDown", 'assets/worm_animation/snake_head_down.png')
  this.load.image("headLeft", 'assets/worm_animation/snake_head_left.png')
  this.load.image("headRight", 'assets/worm_animation/snake_head_right.png')
  this.load.image("tailDown", 'assets/worm_animation/snake_tail_down.png')
  this.load.image("tailUp", 'assets/worm_animation/snake_tail_up.png')
  this.load.image("tailLeft", 'assets/worm_animation/snake_tail_left.png')
  this.load.image("tailRight", 'assets/worm_animation/snake_tail_right.png')
  this.load.image("bodyHorizontal", 'assets/worm_animation/snake_body_horizontal.png')
  this.load.image("bodyVertical", 'assets/worm_animation/snake_body_vertical.png')
  this.load.image("curveBottomLeft", 'assets/worm_animation/snake_curve_bottom_left.png')
  this.load.image("curveBottomRight", 'assets/worm_animation/snake_curve_bottom_right.png')
  this.load.image("curveTopLeft", 'assets/worm_animation/snake_curve_top_left.png')
  this.load.image("curveTopRight", 'assets/worm_animation/snake_curve_top_right.png')
  this.load.image("curveTopRight", 'assets/ground_tiles/grass.jpg')
  this.load.image('coffee', 'assets/games/snake/coffee.png');
  this.load.image('flatiron', 'assets/games/snake/flatiron.png');
  this.load.image('greg', 'assets/games/snake/greg.png');
  this.load.image('questions', 'assets/games/snake/questions.png');
}

function create() {
  var Food = new Phaser.Class({

    Extends: Phaser.GameObjects.Image,

    initialize:

      function Food(scene, x, y) {
        Phaser.GameObjects.Image.call(this, scene)

        this.setTexture('questions');
        this.setPosition(x * 16, y * 16);
        this.setOrigin(0);

        this.total = 0;
        
        scene.children.add(this);
      },
      
      eat: function () {
        this.total++;
      }
      
    });

    var Coffee = new Phaser.Class({

      Extends: Phaser.GameObjects.Image,
  
      initialize:
  
        function Coffee(scene, x, y) {
          Phaser.GameObjects.Image.call(this, scene)
  
          this.setTexture('coffee');
          this.setPosition(x * 32, y * 32);
          this.setOrigin(0);
  
          this.total = 0;
          
          scene.children.add(this);
        },
        
        eat: function (snake) {
          this.total++;
          snake.moveFaster(snake);
        }
        
      });
    
    
    snakes = []
  var Snake = new Phaser.Class({

    initialize:

      function Snake(scene, x, y) {
        this.headPosition = new Phaser.Geom.Point(x, y);

        this.body = scene.add.group();

        this.head = this.body.create(x * 16, y * 16, 'tony');
        this.head.setOrigin(0);

        this.alive = true;

        this.speed = 100;

        this.moveTime = 0;

        this.tail = new Phaser.Geom.Point(x, y);

        this.heading = RIGHT;
        this.direction = RIGHT;
      },


    update: function (time) {
      if (time >= this.moveTime) {
        return this.move(time);
      }
    },

    faceLeft: function () {
      if (this.direction === UP || this.direction === DOWN) {
        this.heading = LEFT;
      }
    },

    faceRight: function () {
      if (this.direction === UP || this.direction === DOWN) {
        this.heading = RIGHT;
      }
    },

    faceUp: function () {
      if (this.direction === LEFT || this.direction === RIGHT) {
        this.heading = UP;
      }
    },

    faceDown: function () {
      if (this.direction === LEFT || this.direction === RIGHT) {
        this.heading = DOWN;
      }
    },

    move: function (time) {
    
      switch (this.heading) {
        case LEFT:
          this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x - 1, 0, 40);
          break;

        case RIGHT:
          this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x + 1, 0, 40);
          break;

        case UP:
          this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y - 1, 0, 30);
          break;

        case DOWN:
          this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y + 1, 0, 30);
          break;
      }

      this.direction = this.heading;

      //  Update the body segments and place the last coordinate into this.tail
      Phaser.Actions.ShiftPosition(this.body.getChildren(), this.headPosition.x * 16, this.headPosition.y * 16, 1, this.tail);

      //  Check to see if any of the body pieces have the same x/y as the head
      //  If they do, the head ran into the body
      
        var hitBody = Phaser.Actions.GetFirst(this.body.getChildren(), { x: this.head.x, y: this.head.y }, 1);
        if (hitBody) {
          console.log('dead');

          this.alive = false;

          return false;
        } else {
          //  Update the timer ready for the next movement
          this.moveTime = time + this.speed;

          return true;
        }
    },


    grow: function () {
      var newPart = this.body.create(this.tail.x, this.tail.y, 'flatiron');

      newPart.setOrigin(0);
    },

    moveFaster: function (snake) {
      snake.speed /=2;
      setTimeout(function() { snake.speed *= 2; }, 5000);
    },
    

    collideWithFood: function (food) {
      if (this.head.x === food.x && this.head.y === food.y) {
        this.grow();

        food.eat();

        //  For every 5 items of food eaten we'll increase the snake speed a little
        if (this.speed > 20 && food.total % 5 === 0) {
          this.speed -= 5;
        }

        return true;
      }
      else {
        return false;
      }
    },

    collideWithCoffee: function (coffee) {
      if (this.head.x === coffee.x && this.head.y === coffee.y) {
        coffee.eat(this);
        return true;
      } else {
        return false
      }
    },

    updateGrid: function (grid) {
      //  Remove all body pieces from valid positions list
      this.body.children.each(function (segment) {

        var bx = segment.x / 16;
        var by = segment.y / 16;

        grid[by][bx] = false;

      });

      return grid;
    }

  });

  food = new Food(this, 3, 4);

  coffee = new Coffee(this, 10, 2)

  snake = new Snake(this, 8, 8);

  snake_two = new Snake(this, 20, 20);
  snake_two.head.setTexture('greg');

  snake_two_score_counter = snake_two.body.children.entries.length
  snake_one_score_counter = snake.body.children.entries.length

  // bomb = new Food(this, 7, 18)


  text = this.add.text(32, 380, '', { font: "30pt Courier", fill: "white", stroke: "#119f4e", strokeThickness: 2 });
  text2 = this.add.text(0, 30, '', { font: "16pt Courier", fill: "white", stroke: "#119f4e", strokeThickness: 2 });

  text_snake_one = this.add.text(0, 0, '', { font: "10pt Courier", fill: "white", stroke: "white", strokeThickness: 0 });
  text_snake_two = this.add.text(0, 15, '', { font: "10pt Courier", fill: "white", stroke: "white", strokeThickness: 0 });
  

  cursors_for_snake1 = this.input.keyboard.createCursorKeys();
  
  cursors_for_snake2 = this.input.keyboard.addKeys(
    {
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    }
  )

}

function update(time, delta) {

  let stuff = `Tony current score: ${snake_one_score_counter}`
  text_snake_one.setText(stuff);

  let stuff_2 = `Greg current score: ${snake_two_score_counter}`
  text_snake_two.setText(stuff_2);


  if (snake.head.x === snake_two.head.x && snake.head.y === snake_two.head.y) {
    snake.alive = false;
    snake_two.alive = false
  }

  snake.body.children.entries.forEach(bodyPart => {
    snake_two.body.children.entries.forEach(bodyPart2 => {
      if (bodyPart.x === bodyPart2.x && bodyPart.y === bodyPart2.y) {
        snake.alive = false;
        snake_two.alive = false
      }
    })
  })

// snake2


  if (!snake_two.alive || !snake.alive) {
    var score_snake_two = snake_two.body.children.entries.length
    var score_snake_one = snake.body.children.entries.length

    if (score_snake_two > score_snake_one){
      line = `Greg Wins! Score: ${score_snake_two}`
      line2 = 'Press Any Key to Restart'
      text.setText(line);
      text2.setText(line2);
      document.addEventListener('keyup', function(e){
        if(e){window.location.reload();}
      })
      return;
    } else {
      line = `Tony Wins! Score: ${score_snake_one}`
      line2 = 'Press Any Key to Restart'
      text.setText(line);
      text2.setText(line2)
      document.addEventListener('keyup', function(e){
        if(e){window.location.reload();}
      })
    return;
    }
  }

  function checkHighScore(){
    fetch('localhost:')
  }


  if (cursors_for_snake2.left.isDown) {
    snake_two.faceLeft();
  }
  else if (cursors_for_snake2.right.isDown) {
    snake_two.faceRight();
  }
  else if (cursors_for_snake2.up.isDown) {
    snake_two.faceUp();
  }
  else if (cursors_for_snake2.down.isDown) {
    snake_two.faceDown();
  }

  if (snake_two.update(time)) {
    //  If the snake updated, we need to check for collision against food

    if (snake_two.collideWithFood(food)) {
      snake_two_score_counter++;
      repositionFood();
    } else if (snake_two.collideWithCoffee(coffee)) {
      repositionCoffee();
    }
  }


/**
* We can place the food anywhere in our 40x30 grid
* *except* on-top of the snake, so we need
* to filter those out of the possible food locations.
* If there aren't any locations left, they've won!
*
* @method repositionFood
  @method repositionCoffee
* @return {boolean} true if the food was placed, otherwise false
*/
function repositionFood() {
  //  First create an array that assumes all positions
  //  are valid for the new piece of food

  //  A Grid we'll use to reposition the food each time it's eaten
  var testGrid = [];

  for (var y = 0; y < 30; y++) {
    testGrid[y] = [];

    for (var x = 0; x < 40; x++) {
      testGrid[y][x] = true;
    }
  }

  snake_two.updateGrid(testGrid);

  //  Purge out false positions
  var validLocations = [];

  for (var y = 0; y < 30; y++) {
    for (var x = 0; x < 40; x++) {
      if (testGrid[y][x] === true) {
        //  Is this position valid for food? If so, add it here ...
        validLocations.push({ x: x, y: y });
      }
    }
  }

  if (validLocations.length > 0) {
    //  Use the RNG to pick a random food position
    var pos = Phaser.Math.RND.pick(validLocations);

    //  And place it
    food.setPosition(pos.x * 16, pos.y * 16);

    return true;
  }
  else {
    return false;
  }
}

  // snake1

  
  if (cursors_for_snake1.left.isDown) {
    snake.faceLeft();
  }
  else if (cursors_for_snake1.right.isDown) {
    snake.faceRight();
  }
  else if (cursors_for_snake1.up.isDown) {
    snake.faceUp();
  }
  else if (cursors_for_snake1.down.isDown) {
    snake.faceDown();
  }

  if (snake.update(time)) {
    //  If the snake updated, we need to check for collision against food

    if (snake.collideWithFood(food)) {
      snake_one_score_counter++;
      repositionFood();
    } else if (snake.collideWithCoffee(coffee)) {
      repositionCoffee();
    }
  }


/**
* We can place the food anywhere in our 40x30 grid
* *except* on-top of the snake, so we need
* to filter those out of the possible food locations.
* If there aren't any locations left, they've won!
*
* @method repositionFood
  @method repositionCoffee
* @return {boolean} true if the food was placed, otherwise false
*/
function repositionFood() {
  //  First create an array that assumes all positions
  //  are valid for the new piece of food

  //  A Grid we'll use to reposition the food each time it's eaten
  var testGrid = [];

  for (var y = 0; y < 30; y++) {
    testGrid[y] = [];

    for (var x = 0; x < 40; x++) {
      testGrid[y][x] = true;
    }
  }

  snake.updateGrid(testGrid);

  //  Purge out false positions
  var validLocations = [];

  for (var y = 0; y < 30; y++) {
    for (var x = 0; x < 40; x++) {
      if (testGrid[y][x] === true) {
        //  Is this position valid for food? If so, add it here ...
        validLocations.push({ x: x, y: y });
      }
    }
  }

  if (validLocations.length > 0) {
    //  Use the RNG to pick a random food position
    var pos = Phaser.Math.RND.pick(validLocations);

    //  And place it
    food.setPosition(pos.x * 16, pos.y * 16);

    return true;
  }
  else {
    return false;
  }
}

function repositionCoffee() {

  var testGrid = [];

  for (var y = 0; y < 30; y++) {
    testGrid[y] = [];

    for (var x = 0; x < 40; x++) {
      testGrid[y][x] = true;
    }
  }

  snake.updateGrid(testGrid);

  //  Purge out false positions
  var validLocations = [];

  for (var y = 0; y < 30; y++) {
    for (var x = 0; x < 40; x++) {
      if (testGrid[y][x] === true) {
        //  Is this position valid for food? If so, add it here ...
        validLocations.push({ x: x, y: y });
      }
    }
  }

  if (validLocations.length > 0) {
    //  Use the RNG to pick a random food position
    var pos = Phaser.Math.RND.pick(validLocations);

    //  And place it
    coffee.setPosition(pos.x * 16, pos.y * 16);

    return true;
  }
  else {
    return false;
  }
}




}