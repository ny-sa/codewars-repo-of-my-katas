//You put a Knight and a Bishop in the board.

//Complete the method that tell us which one can capture the other one.

//function knightVsBishop(knightPosition, bishopPosition) {
  // Three possible outputs are "Knight", "Bishop" and "None".
//}
//You are provided with two object array; each contains an integer (first item) and a string (second item) to show the position of the pieces in the chess board.

//bishopPosition = [4, "C"];
//knightPosition = [6, "D"];
//Check the test cases and Happy coding :)

//My solution
function knightVsBishop(knightPosition, bishopPosition) {
    let xCoord = {  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8  },
    yDiff = Math.abs(knightPosition[0] - bishopPosition[0]),
    xDiff = Math.abs(xCoord[knightPosition[1]] - xCoord[bishopPosition[1]]);
    if ( yDiff + xDiff === 3 && (yDiff !== 0 && xDiff !== 0))
        return 'Knight';
    else if ( yDiff === xDiff)
        return 'Bishop';
    else return 'None';    
}

//'Best Practices' solution
function knightVsBishop(np, bp) {
    np[1] = np[1].charCodeAt(0);                                    //using .charCodeAt() instead of an object to read characters
    bp[1] = bp[1].charCodeAt(0);
    
    var diffx = Math.abs(np[1] - bp[1]);
    var diffy = Math.abs(np[0] - bp[0]);
    
    if (diffx == diffy) {
      return "Bishop";
    }
        
    if (diffx == 2 && diffy == 1 || diffx == 1 && diffy == 2) {
      return "Knight";
    }
        
    return "None";
  }