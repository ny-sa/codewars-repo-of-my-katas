// You are given an array (which will have a length of at least 3, but could be very large) containing integers.
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
// Write a method that takes the array as an argument and returns this "outlier" N.
//
// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)
//
// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

//My solution
function findOutlier(integers){ //turned array into 0s (evens) and 1s (odds), then rounded the 'average' value to either be 0 or 1
    let array = integers.map(x => Math.abs(x % 2)), average = Math.round(array.reduce((a,b) => a + b)/array.length);
    for (let i = 0; i < array.length; i++)
        if (array[i] != average) return integers[i];    //the element that differs from the average must be the other number
}                                                       //[0, 1, 0] rounded 'average' is 0, so 1 must be the other number
                                                        //then returns the element with the same index from the original array
//'Best Practices' solution
function findOutlier(int){
    var even = int.filter(a=>a%2==0);   //sorted array into two separate arrays of even and odds with filter
    var odd = int.filter(a=>a%2!==0);
    return even.length==1? even[0] : odd[0];    //returns the first element from one of the new arrays, depending on
}                                               //whose array length equals 1