//Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the
// "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared,
// regardless of the order.

//My solution
function comp(array1, array2){          //checks for edges cases first, then returns a line of higher-order array methods
    if (!array1 || !array2 || array1.length !== array2.length) return false;
    return array1.map( x => x * x).sort((a, b) => a - b).toString() === array2.sort((a, b) => a - b).toString();
}

//'Best Practice' solution
function comp(array1, array2) {
    if(array1 == null || array2 == null) return false;
    array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);             //sorts each array first
    return array1.map(v => v * v).every((v, i) => v == array2[i]);//then does a map and comparison on the return
}