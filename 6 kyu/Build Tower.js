//Build Tower by the following given argument:
// number of floors (integer and always greater than 0).
// Tower block is represented as *
//for example, a tower of 3 floors looks like below
//
// [
//   '  *  ',
//   ' *** ',
//   '*****'
// ]
// and a tower of 6 floors looks like below
//
// [
//   '     *     ',
//   '    ***    ',
//   '   *****   ',
//   '  *******  ',
//   ' ********* ',
//   '***********'
// ]

//My solution
function towerBuilder(nFloors) {
    let tower = [];     //adds a varying number of *s depending on row
    let segment = '';   //such that it looks like a tower in the end
    for (let i = 1; i <= nFloors; i++) {
        segment = '';
        for (let j = 1; j <= (2 * nFloors - 1); j++) {
            if (Math.abs(nFloors - j) < i)  //makes it that the number of *s increases by 2 per line
                segment += '*';
            else
                segment += ' ';
        }
        tower.push(segment);
    }
    return tower;
}

//'Best Practices' solution
function towerBuilder(n) {
    return Array.from({length: n}, function(v, k) { //creates a whole array out of a single return
        const spaces = ' '.repeat(n - k - 1);           //the actual work comes from a callback function that generates a
        return spaces + '*'.repeat(k + k + 1) + spaces; //string in each element with a simple algorithm
    });
}
