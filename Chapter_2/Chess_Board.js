// Chess Board

// A function that makes a string that when printed resembles the alternating tiles of a chess board.  

var chessBoard = function(size) {
  var stringBoard = "";
  var space = "#";
  var hash = " ";
  
  for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
      if ((x + y) % 2 == 0) {
        stringBoard += space;
      } else {
        stringBoard += hash;
      }
    }
    stringBoard += "\n";
  }
  console.log(stringBoard);
}

