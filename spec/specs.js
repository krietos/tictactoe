beforeEach(function() {
  Space.all = [];
});

describe('Player', function() {
  describe('create', function() {
    it("should create a new instance of the Player prototype", function() {
      var testPlayer = Player.create();
      Player.isPrototypeOf(testPlayer).should.equal(true);
    });
    it("should pass the variable from create to initialize", function() {
      var testPlayer = Player.create("X");
      testPlayer.symbol.should.equal("X");
    });
  });
  describe('initialize', function() {
    it('should initialize the created instance of player with a symbol', function() {
      var testPlayer = Player.create();
      testPlayer.initialize("X");
      testPlayer.symbol.should.equal("X");
    });
  });
});
describe('Space', function() {
  describe('create', function() {
    it('should create a new instance of the Space prototype', function() {
      var testSpace = Object.create(Space);
      Space.isPrototypeOf(testSpace);
    });
  });
  describe('initialize', function() {
    it('should initialize an x and y coordinate for an instance of space', function() {
      var testSpace = Space.create();
      testSpace.initialize(2, 1);
      testSpace.yCoord.should.equal(1);
    });
  });
  describe('markedBy', function() {
    it('lets a player mark the space', function() {
      var testSpace = Space.create();
      testSpace.markedBy("X");
      testSpace.mark.should.equal("X");
    });
  });
  describe('find', function() {
    it('finds a space by its coordinates', function() {
      var newBoard = Board.create();
      var foundSpace = Space.find(2, 3);
      foundSpace.should.equal(Space.all[5]);
    });
  });
});
describe('Board', function() {
  describe('create', function() {
    it('should create a new instance of Board', function() {
      var testBoard = Object.create(Board);
      Board.isPrototypeOf(testBoard);
    });
  });
  describe('initialize', function() {
    it('should initialize the new board object with 9 spaces', function() {
      var testBoard = Object.create(Board);
      testBoard.initialize();

      Space.all.length.should.equal(9);
    });
  });
  describe('threeInRow', function() {
    it('checks to see if three consecutive horizontal spaces are marked by the same player', function() {
      var testBoard = Board.create();
      Space.all[2].markedBy("X");
      Space.all[5].markedBy("X");
      Space.all[8].markedBy("X");
      testBoard.threeInRow().should.equal(true);
    });
    it('checks to see if three consecutive vertical spaces are marked by the same player', function() {
      var testBoard = Board.create();
      Space.all[6].markedBy("Y");
      Space.all[7].markedBy("Y");
      Space.all[8].markedBy("Y");
      testBoard.threeInRow().should.equal(true);
    });
    it('checks to see if three consecutive diagonal spaces are marked by the same player', function() {
      var testBoard = Board.create();
      Space.all[0].markedBy("X");
      Space.all[4].markedBy("X");
      Space.all[8].markedBy("X");
      testBoard.threeInRow().should.equal(true);
    });
  });
});
describe('Game', function() {
  describe('create', function() {
    it('creates a new instance of the Game prototype', function () {
      var testGame = Game.create();
      Game.isPrototypeOf(testGame);
    });
  });
  describe('initialize', function() {
    it('initializes a new game with a player X', function() {
      var testGame = Object.create(Game);
      testGame.initialize();
      testGame.playerX.symbol.should.equal("X");
    });
    it('initializes a new game with a new board', function() {
      var testGame = Object.create(Game);
      testGame.initialize();
      Space.all.length.should.equal(9);
    });
  });
  describe('turn', function() {
    it('alternates between X and O player turns', function() {
      var testGame = Game.create();
      testGame.turn();
      testGame.turn();
      testGame.currentPlayer.should.equal("X");
    });
    it('Terminates the game when 9 rounds have been played without declaring a Winner', function() {
      var testGame = Game.create();
      testGame.turn();
      testGame.turn();
      testGame.turn();
      testGame.turn();
      testGame.turn();
      testGame.turn();
      testGame.turn();
      testGame.turn();
      testGame.turn();
      testGame.endOfGame.should.equal(true);
    })    
  }); 
});
