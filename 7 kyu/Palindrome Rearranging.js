//Task
//Given a string s, find out if its characters can be rearranged to form a palindrome.

//Example
//For s = "aabb", the output should be true.

//We can rearrange "aabb" to make "abba", which is a palindrome.

//Input/Output
//[input] string s

//A string consisting of lowercase English letters.

//Constraints:

//4 ≤ inputString.length ≤ 50.

//[output] a boolean value

//true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.

//My solution
function palindromeRearranging(s) {
    let letters = {}, oddCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (!Object.keys(letters).includes(s[i]))
            letters[s[i]] = 1;
        else letters[s[i]] += 1;
    }
    for (let j in letters)
        if (letters[j] % 2 === 1)
            oddCount++;
    return oddCount < 2;
}

//'Best Practices' solution
const _ = require('lodash');

function palindromeRearranging(s) {
  return _(s).countBy().values().map(x => x % 2).sum() <= 1;
}