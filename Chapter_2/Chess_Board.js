// Chess Board

// A function that makes a string that when printed resembles the alternating tiles of a chess board.  The parameters width and height are numbers and define the desired dimensions of the board.

var chessBoard = function(width, height) {
  var stringBoard = "";
  var space = "#";
  var hash = " ";
  var max = width * height;
  
  for (var i = 0; i <= max; i++) {
      if (i == width || i % width == 0) {
        stringBoard += "\n";
      } else if (i % 2 == 0) {
        stringBoard += hash;
      } else if (i % 2 != 0) {
        stringBoard += space;
      }
  }
  console.log(stringBoard)
};