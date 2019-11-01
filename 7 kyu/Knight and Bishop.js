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
    let xCoord = {  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8  };
    if (Math.abs(knightPosition[0] - bishopPosition[0]) + Math.abs(xCoord[knightPosition[1]] - xCoord[bishopPosition[1]]) === 3)
        return 'Knight';
    else if (Math.abs(knightPosition[0] - bishopPosition[0]) === Math.abs(xCoord[knightPosition[1]] - xCoord[bishopPosition[1]]))
        return 'Bishop';
    else return 'None';    
}