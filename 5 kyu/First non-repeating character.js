//Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated
// anywhere in the string.
//
// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string,
// and occurs first in the string.
//
// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the
// correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
//
// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

//My solution
function firstNonRepeatingLetter(s) {
    let repeated = [], str = s;
    for (let char of s) {   //goes through a string and pushes each new character into repeated
        if (repeated.includes(char.toUpperCase()) || repeated.includes(char.toLowerCase())) {
            while(str.includes(char.toLowerCase())) {
                str = str.replace(char.toLowerCase(), '');
            }   //if repeated already contains the character, str is removed of that character
            while(str.includes(char.toUpperCase())) {
                str = str.replace(char.toUpperCase(), '');
            }   //so that str will only contain non-repeating characters
        }       //and then return the first letter
        else {
            repeated.push(char);
        }
    }
    if (str === '') return str;
    return str[0];
}

//'Best Practices' solution
function firstNonRepeatingLetter(s) {
    for(var i in s) {
        if(s.match(new RegExp(s[i],"gi")).length === 1) {
            return s[i];    //regex making it easy; s.match returns a string with only the selected character remaining
        }                   //if that string is only one character, then clearly it is non-repeating, and the first at that
    }
    return '';
}