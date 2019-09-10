
    function checkBoundariesBottom1() {
      if(gameState.player1.y === config.height) {
        gameState.player1.y = 1;
        gameState.player1.y += 1;   
      } else {
        gameState.player1.y +=1;
      }
    }

    function checkBoundariesTop1() {
      if(gameState.player1.y === 0) {
        gameState.player1.y = config.height - 1;
        gameState.player1.y -= 1;   
      } else {
        gameState.player1.y -=1;
      }
    }

    function checkBoundariesLeft1() {
      if(gameState.player1.x === 0) {
        gameState.player1.x = config.height - 1;
        gameState.player1.x -= 1;
      } else {
        gameState.player1.x -=1;
      }
    }

    function checkBoundariesRight1() {
      if(gameState.player1.x === config.height) {
        gameState.player1.x = 1 ;
        gameState.player1.x += 1;
      } else {
        gameState.player1.x +=1;
      }
    }

    function checkBoundariesBottom2() {
      if(gameState.player2.y === config.height) {
        gameState.player2.y =  1;
        gameState.player2.y += 1;   
      } else {
        gameState.player2.y +=1;
      }
    }

    function checkBoundariesTop2() {
      if(gameState.player2.y === 0) {
        gameState.player2.y = config.height - 1;
        gameState.player2.y -= 1;   
      } else {
        gameState.player2.y -=1;
      }
    }

    function checkBoundariesLeft2() {
      if(gameState.player2.x === 0) {
        gameState.player2.x = config.height - 1;
        gameState.player2.x -= 1;
      } else {
        gameState.player2.x -=1;
      }
    }

    function checkBoundariesRight2() {
      if(gameState.player2.x === config.height) {
        gameState.player2.x = 1 ;
        gameState.player2.x += 1;
      } else {
        gameState.player2.x +=1;
      }
    }
