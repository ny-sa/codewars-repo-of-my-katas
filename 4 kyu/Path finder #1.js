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
    const trial = maze => {
        if (maze.length !== maze[0].length) return false;
        if (maze[0][0] === 'W' || maze[maze.length - 1][maze.length - 1] === 'W') return false;
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
                if (choices[0].toString() === [maze.length - 1, maze.length - 1].toString()) return true;
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

//'Best Practices' solution
function pathFinder(maze){
    maze = maze.split('\n').map(r=>[...r]);
    var len=maze.length, stack = [[0,0]];
    while(stack.length) {
      let [x,y] = stack.pop();
      if(maze[y][x]!=='.') continue;
      maze[y][x]='X';
      [[x,y-1],[x,y+1],[x-1,y],[x+1,y]].filter(([i,j])=>i>=0&&j>=0&&i<len&&j<len).forEach(([i,j])=>stack.push([i,j]));
    }
    return maze[len-1][len-1]==='X';
  }