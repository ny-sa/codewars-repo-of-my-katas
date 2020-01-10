 //You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal directions 
 //(i.e. North, East, South, West). 
 //Return true if you can reach position [N-1, N-1] or false otherwise.

//Empty positions are marked .. Walls are marked W. Start and exit positions are empty in all test cases.

//My solution
function pathFinder(maze) {
    let loc = [[]], i = 0;
    for (let char of maze) {
        if (char !== '\n') loc[i].push(char);
        else {
            loc.push([]);
            i++;
        }
    }
    for (let l of loc)
        if (loc.length !== l.length) return false;
    let n = loc.length;
    if (loc[0][0] === 'W' || loc[n - 1][n - 1] === 'W') return false;
    console.log(loc);
    const trial = maze => {
        const spot = coOrd => { return maze[coOrd[1]][coOrd[0]]; }; //coOrd being a coordinate where y-axis goes down
        const east = () => [current[0]+1, current[1]]; const south = () => [current[0], current[1]+1];
        const west = () => [current[0]-1, current[1]]; const north = () => [current[0], current[1]-1];
        let current = [0, 0], choices = [], passed = [], alternate = [];
        while (true) {
            if (east()[0] < maze.length && spot(east()) !== 'W' && !passed.some(i => i.toString() === east().toString()))
                choices.push(east());
            if (south()[1] < maze.length && spot(south()) !== 'W' && !passed.some(i => i.toString() === south().toString())) 
                choices.push(south());
            if (west()[0] >= 0 && spot(west()) !== 'W' && !passed.some(i => i.toString() === west().toString())) 
                choices.push(west());
            if (north()[1] >= 0 && spot(north()) !== 'W' && !passed.some(i => i.toString() === north().toString())) 
                choices.push(north());
            if (choices.length > 0) {
                if (spot(choices[0]) === 'e') return true;
                else {
                    passed.push(current);
                    current = choices[0];
                    for (let i = 1; i < choices.length; i++) 
                        alternate.push(choices[i]);
                    choices = [];
                }
            }
            else if (alternate.length > 0) current = alternate.pop();
            else return false;
        }
    }
    return trial(loc);
}

console.log(pathFinder('s.....\n......\n......\n......\n.....W\n....We'))
/* recursive takes too long, so iterative should be the way
the win condition is if 'e' is found
cannot go out of bound or into 'W'
cannot go to a spot already gone
if there are multiple routes, save the other routes to go back on
if no possible moves left, return false
*/