var Player = {
  create: function(symbol) {
    var newPlayer = Object.create(Player);
    newPlayer.initialize(symbol);
    return newPlayer;
  },
  initialize: function(symbol) {
    this.symbol = symbol;
  }
}

var Space = {
  all: [],
  create: function(xCoord, yCoord) {
    var newSpace = Object.create(Space);
    newSpace.initialize(xCoord, yCoord);
    Space.all.push(newSpace);
    return newSpace;
  },
  initialize: function(xCoord, yCoord) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    this.mark = "unmarked";
  },
  markedBy: function(symbol) {
    if (this.mark === "unmarked"){
      this.mark = symbol;
    }
  },
  find: function(xCoord, yCoord) {
    for (var i = 0; i <= Space.all.length; i++) {
      if (Space.all[i].xCoord === xCoord && Space.all[i].yCoord === yCoord) {
        return Space.all[i];
      }
    }
  }
  
}

var Board = {
  create: function() {
    var newBoard = Object.create(Board);
    newBoard.initialize();
    return newBoard;
  },
  initialize: function() {
    for (var i = 1; i <= 3; i++) {
      for (var j = 1; j <= 3; j++) {
        var newSpace = Space.create(i,j);
      }
    }
  },
  threeInRow: function() {
    for (var i = 0; i <= 2; i++) {
      if ((Space.all[i].mark === Space.all[i+3].mark && Space.all[i+3].mark === Space.all[i+6].mark) && Space.all[i].mark != "unmarked") {
        return true;
      }
    }
    for (var i = 0; i <= 6; i += 3) {
      if ((Space.all[i].mark === Space.all[i+1].mark && Space.all[i+1].mark === Space.all[i+2].mark) && Space.all[i].mark != "unmarked") {
        return true;
      }
    }
    if (((Space.all[2].mark === Space.all[4].mark && Space.all[4].mark === Space.all[6].mark) || 
        (Space.all[0].mark === Space.all[4].mark && Space.all[4].mark === Space.all[8].mark)) && Space.all[4].mark != "unmarked") {
      return true;
    }

    return false;
  }
};

var Game = {
  create: function() {
     var newGame = Object.create(Game);
     newGame.initialize();
     return newGame;
  },
  initialize: function() {
    this.playerX = Player.create("X");
    this.playerO = Player.create("O");
    this.board = Board.create();
    this.currentPlayer = "X";
    this.gameProgress = 0;
    this.endOfGame = false;
  },
  turn: function() {
    if(this.board.threeInRow() === true) {
      alert(this.currentPlayer + " wins!");
    }
    if(this.endOfGame === true) {
      alert("Interesting game, the only way to win is not to play.")
    }
    if (this.currentPlayer === "X") {
      this.currentPlayer = "O";
    } else {
      this.currentPlayer = "X";
    };
    this.gameProgress++;
    if (this.gameProgress === 8) {
      this.endOfGame = true;
    }
  }  
};

  var newGame = Game.create();
$(document).ready(function() {
  $('.0').click(function() {
    Space.all[0].markedBy(newGame.currentPlayer);
    newGame.turn();
    console.log(Space.all[0].mark);
    $('.0').append(Space.all[0].mark);

  })
  $('.1').click(function() {
    Space.all[1].markedBy(newGame.currentPlayer);
    newGame.turn();
    console.log(Space.all[1].mark);
    $('.1').append(Space.all[1].mark);
  })
  $('.2').click(function() {
    Space.all[2].markedBy(newGame.currentPlayer);
    newGame.turn();
    console.log(Space.all[2].mark);
    $('.2').append(Space.all[2].mark);
  })
  $('.3').click(function() {
    Space.all[3].markedBy(newGame.currentPlayer);
    newGame.turn();
    console.log(Space.all[3].mark);
    $('.3').append(Space.all[3].mark);
  })
  $('.4').click(function() {
    Space.all[4].markedBy(newGame.currentPlayer);
    newGame.turn();
    console.log(Space.all[4].mark);
    $('.4').append(Space.all[4].mark);
  })
  $('.5').click(function() {
    Space.all[5].markedBy(newGame.currentPlayer);
    newGame.turn();
    console.log(Space.all[5].mark);
    $('.5').append(Space.all[5].mark);
  })
  $('.6').click(function() {
    Space.all[6].markedBy(newGame.currentPlayer);
    newGame.turn();
    console.log(Space.all[6].mark);
    $('.6').append(Space.all[6].mark);
  })
  $('.7').click(function() {
    Space.all[7].markedBy(newGame.currentPlayer);
    newGame.turn();
    console.log(Space.all[7].mark);
    $('.7').append(Space.all[7].mark);
  })
  $('.8').click(function() {
    Space.all[8].markedBy(newGame.currentPlayer);
    newGame.turn();
    console.log(Space.all[8].mark);
    $('.8').append(Space.all[8].mark);
  })
})
