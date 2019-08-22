//Write
//
// function combine()
// that combines arrays by alternatingly taking elements passed to it.
//
// E.g
//
// combine(['a', 'b', 'c'], [1, 2, 3]) == ['a', 1, 'b', 2, 'c', 3]
// combine(['a', 'b', 'c'], [1, 2, 3, 4, 5]) == ['a', 1, 'b', 2, 'c', 3, 4, 5]
// combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8]) == ['a', 1, 6, 8, 'b', 2, 7, 'c', 3, 4, 5]
// Arrays can have different lengths.

//My solution
function combine(...arrays) {   //No native methods challenge
    let arr = [], longest = 0, longI;
    for (let i in arrays)
        if (arrays[i].length > longest)
            [longest, longI] = [arrays[i].length, i];
    for (let j in arrays[longI])
        for (let i in arrays)
            if (arrays[i][j] !== undefined)
                arr[arr.length] = arrays[i][j];
    return arr;
}