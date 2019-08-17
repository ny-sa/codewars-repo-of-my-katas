//You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k
// consecutive strings taken in the array.
//
// Example:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
//
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

//My solutions
function longestConsec(strarr, k) {
    let longest = ''
    if (strarr.length == 0 || k > strarr.length || k <= 0) return longest;  //edge case checker
    for (let x = 0; x < strarr.length - k + 1; x++) {   //checks if the length of three combined strings is longer than longest
        if (strarr.slice(x, x + k).reduce((a, b) => { return a + b; }).length > longest.length)
            longest = strarr.slice(x, x + k).reduce((a, b) => { return a + b; });   //if so, then it becomes longest
    }
    return longest;
}

//'Best Practices' solution
function longestConsec(strarr, k) {
    var longest = "";
    for(var i=0;k>0 && i<=strarr.length-k;i++){ //for loop handles all edge cases already
        var tempArray = strarr.slice(i,i+k);
        var tempStr = tempArray.join("");   //using join for strings instead of reduce might have been simpler
        if(tempStr.length > longest.length){
            longest = tempStr;
        }
    }
    return longest;
}