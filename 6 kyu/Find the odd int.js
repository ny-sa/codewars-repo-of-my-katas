//Given an array, find the int that appears an odd number of times.
//
// There will always be only one integer that appears an odd number of times.

//My solution
function findOdd(A) { //No native methods challenge
    let count = {}; let newNumber = true;
    for (let i in A) {
        newNumber = true;
        for (let j in count) {
            if ('' + A[i] === j) { count[j]++; newNumber = false; break; }
        }
        if (newNumber) {
            count[A[i]] = 1;
        }
    }
    for (let k in count) { if (count[k] % 2 === 1) return k * 1; }
}