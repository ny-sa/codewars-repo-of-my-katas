//You get an array of numbers, return the sum of all of the positives ones.
//
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
//
// Note: if there is nothing to sum, the sum is default to 0.

//My solution
function positiveSum(arr) { //No native methods challenge
    let sum = 0;
    for (let i in arr) {    //not as flexible nor good at accessing indexes at a certain order
        if (arr[i] > 0) sum += arr[i];
    }
    return sum;
}

//'Best Practices' solution
function positiveSum(arr) {
    var total = 0;    
    for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
      if (arr[i] > 0) {                   // if arr[i] is greater than zero
        total += arr[i];                  // add arr[i] to total
      }
    }
    return total;                         // return total
  }