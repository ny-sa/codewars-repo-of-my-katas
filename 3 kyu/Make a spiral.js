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

//My solution
var spiralize = function(size) {
    let zeros = [];
    for (let i = 0; i < size; i++) {
        zeros.push([]);
        for (let j = 0; j < size; j++)
            zeros[i].push(0);
    }
    const spiralSnake = area => {

    }
    return spiralSnake(zeros);
}
console.log(spiralize(5));

/*  
    - Make box of zeros
    - Start at [1][0] heading east, until collision
    - 'collision' being when there are less than two zeroes ahead
    - Turn left on collision
    - return when turning is impossible
*/