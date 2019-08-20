//Given an array of positive or negative integers
//
// I= [i1,..,in]
//
// you have to produce a sorted array P of the form
//
// [ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]
//
// P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java, C#, C, C++ and
// as an array of arrays in other languages.
//
// Example:
//
// I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]
// [2, 3, 5] is the list of all prime factors of the elements of I, hence the result.
//
// Notes:
//
// It can happen that a sum is 0 if some numbers are negative!
// Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers for which 5 is a factor
// is 0 so we have [5, 0] in the result amongst others.

//My solution
function sumOfDivided(lst) {    //had to rewrite the solution twice so it can run more efficiently
    function isPrime(num) {
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    }
    let abs = lst.map(x => Math.abs(x));
    let primeFactors = [], withSum = [];
    for (let x = 2; x <= Math.max.apply(Math, abs); x++) {   //go through the possible range of primes
        if (!isPrime(x)) continue;  //skip non-prime numbers;
        for (let y = 0; y < abs.length; y++) {  //check for each element whether the prime number is a factor
            if (abs[y] % x === 0) {
                if(!primeFactors.includes(x)) { //for each new prime factor, do this:
                    primeFactors.push(x);                               //push [new prime factor, sum being 0] to withSum
                    withSum.push([x, 0]);                               //add all divisible lst numbers to sum
                    for (let j = 0; j < abs.length; j++) {              //keep dividing divisible abs numbers until indivisible
                        if (abs[j] % x === 0) {                         //to continually lower the condition of the first loop
                            withSum[withSum.length - 1][1] += lst[j];
                            do { abs[j] /= x; }
                            while(abs[j] % x === 0);
                        }}}}}}
    return withSum;
}

//'Best Practice' solution
function sumOfDivided(lst) {    //not having to check each number for primeness is great
    if(lst.length == 0) { return []; }
    var m = Math.max.apply(null, lst.map(Math.abs)),
        primes = [],
        marked = Array(m+1);

    for(var i = 2; i <= m; ++i) {   //'marked' system makes loop skip all multiples of each prime factor
        if(marked[i]) continue;

        var sum = 0, isMul = false;
        lst.forEach(function(n) { if(n % i == 0) { sum += n; isMul = true; } });    //adds divisible numbers to sum then pushes
        if(isMul) primes.push([i, sum]);                                            //finished array to primes

        for(var j = 2*i; j <= m; j += i) {
            marked[j] = true;
        }
    }

    return primes;
}