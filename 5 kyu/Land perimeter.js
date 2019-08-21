//Task:
// Given an array arr of strings complete the function landPerimeter by calculating the total perimeter of all the islands. Each
// piece of land will be marked with 'X' while the water fields are represented as 'O'. Consider each tile being a perfect 1 x
// 1piece of land. Some examples for better visualization:
//
// ['XOOXO',
//  'XOOXO',
//  'OOOXO',
//  'XXOXO',
//  'OXOOO']
//
// should return: "Total land perimeter: 24",
// while
//
//
// ['XOOO',
//  'XOXO',
//  'XOXO',
//  'OOXX',
//  'OOOO']
//
// should return: "Total land perimeter: 18"
//
// Good luck!

//My solution
function landPerimeter(arr) {
    function checkAdjacent(y, x) {  //checks if an adjacent square is empty
        if (y < 0 || y >= arr.length) return 1; //if x or y are out of bounds, then it must be empty
        if (x < 0 || x >= arr[y].length) return 1;
        if (arr[y][x] === 'O') return 1; //if the square is 'O', then it is empty
        return 0;
    }
    let peri = 0;
    for (let y = 0; y < arr.length; y++) {
        for (let x = 0; x < arr[y].length; x++) {
            if (arr[y][x] === 'X') {
                peri += checkAdjacent(y - 1, x) //checks adjacent squares in cardinal directions, adds 1 to peri for each true
                    + checkAdjacent(y, x + 1)
                    + checkAdjacent(y + 1, x)
                    + checkAdjacent(y, x - 1);
            }
        }
    }
    return 'Total land perimeter: ' + peri;
}

//'Best Practices' solution
function landPerimeter(arr) {
    var n = arr.length - 1
        ,   m = arr[0].length - 1
        ,   p = 0;

    for (var i = 0; i <= n; i++)
        for (var j = 0; j <= m; j++)
            if (arr[i][j] === 'X') {                    //adds 1 to p if:
                p += i === 0 || arr[i - 1][j] === 'O';  //square is at the north edge or the north adjacent square is 'O'
                p += j === 0 || arr[i][j - 1] === 'O';  //square is at the west edge or the west adjacent square is 'O'
                p += i === n || arr[i + 1][j] === 'O';  //square is at the south edge or the south adjacent square is 'O'
                p += j === m || arr[i][j + 1] === 'O';  //square is at the east edge or the east adjacent square is 'O'
            }

    return 'Total land perimeter: ' + p;
}