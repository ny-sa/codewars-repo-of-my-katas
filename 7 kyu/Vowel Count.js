//Return the number (count) of vowels in the given string.
//
// We will consider a, e, i, o, and u as vowels for this Kata.
//
// The input string will only consist of lower case letters and/or spaces.

//My solution
function getCount(str) {    //No native methods challenge
    var vowelsCount = 0;
    for (let char in str) {
        if (str[char] == 'a' ||
            str[char] == 'e' ||
            str[char] == 'i' ||
            str[char] == 'o' ||
            str[char] == 'u') vowelsCount++;
    }
    return vowelsCount;
}

//'Best Practices' solution
function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length; //filter out consonants with match() and regex, then just take the length
}