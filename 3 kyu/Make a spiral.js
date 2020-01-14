/*Your task, is to create a NxN spiral with a given size.

For example, spiral with size 5 should look like this:

00000
....0
000.0
0...0
00000
and with the size 10:

0000000000
.........0
00000000.0
0......0.0
0.0000.0.0
0.0..0.0.0
0.0....0.0
0.000000.0
0........0
0000000000
Return value should contain array of arrays, of 0 and 1, for example for given size 5 result should be:

[[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
Because of the edge-cases for tiny spirals, the size will be at least 5.

General rule-of-a-thumb is, that the snake made with '1' cannot touch to itself.*/

//My first solution     
/*  
    - Make box of zeros
    - Start at [1][0] heading east, until collision
    - 'collision' being when there are less than two zeroes ahead
    - Turn right on collision
    - return when turning is impossible
*/                        
var spiralize = function(size) {
    let zeros = []
    for (let i = 0; i < size; i++) {
        zeros.push([]);
        for (let j = 0; j < size; j++)
            zeros[i].push(1);
    }
    const spiralSnake = area => {
        let xy = [0, 1], turns = 0, canTurn = true;
        const canMove = () => {
            switch (turns%4) {
                case 0: return xy[0] + 2 < area[0].length && area[xy[1]][xy[0]+1] != 0 && area[xy[1]][xy[0]+2] != 0;
                case 1: return xy[1] + 2 < area.length && area[xy[1]+1][xy[0]] != 0 && area[xy[1]+2][xy[0]] != 0;
                case 2: return xy[0] - 2 >= 0 && area[xy[1]][xy[0]-1] != 0 && area[xy[1]][xy[0]-2] != 0;
                case 3: return xy[1] - 2 >= 0 && area[xy[1]-1][xy[0]] != 0 && area[xy[1]-2][xy[0]] != 0;
            }
        }
        const move = (xy) => {
            switch (turns%4) {
                case 0: return [xy[0]+1, xy[1]];
                case 1: return [xy[0], xy[1]+1];
                case 2: return [xy[0]-1, xy[1]];
                case 3: return [xy[0], xy[1]-1];
            }
        }
        while (canTurn) {
            area[xy[1]][xy[0]] = 0;
            if (!canMove()) {
                turns++;
                if (!canMove()) canTurn = false;
                else xy = move(xy);
            }
            else xy = move(xy);
        }
        return area;
    }
    return spiralSnake(zeros);
}

//'Best Practices' solution
function spiralize(size) {  //based of a mathematical formula, but harder to read
    if (size == 2) return [ [1,1], [0,1] ];
    if (size == 3) return [ [1,1,1], [0,0,1], [1,1,1] ];
    var base = spiralize(size-2);
    var res = [[],[]];
    for (var i = 0; i < size; i++) (res[0].push(1)) && (res[1].push(0));
    res[1][size-1] = 1;
    for (var i = size-3; i >= 0; i--) {
      res.push(base[i].reverse().concat([0,1]));
    }
    res[size-1][size-2] = 1;
    return res;
  }