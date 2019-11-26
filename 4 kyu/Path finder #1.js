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
    for (let l of loc) {
        if (loc.length !== l.length) return false;
    }
    let n = loc.length;
    if (loc[0][0] === 'W' || loc[n - 1][n - 1] === 'W') return false;
    console.log(loc);

}
console.log(pathFinder('sWWWWW\n..WWWW\nW..WWW\nWW..WW\nWWW..W\nWWWW.e'))