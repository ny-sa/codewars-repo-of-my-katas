//Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the
// following pattern:
//
// a -> 1
//
// e -> 2
//
// i -> 3
//
// o -> 4
//
// u -> 5
//
// For example, encode("hello") would return "h2ll4" There is no need to worry about uppercase vowels in this kata.
//
// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.
//
// For example, decode("h3 th2r2") would return "hi there"
//
// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

//My solution
function encode(string) { //No native methods challenge
    let str = '';
    for (let i in string) {
        switch(string[i]) {
            case 'a': str += '1'; break;
            case 'e': str += '2'; break;
            case 'i': str += '3'; break;
            case 'o': str += '4'; break;
            case 'u': str += '5'; break;
            default: str += string[i];
        }
    }
    return str;
}

function decode(string) {
    let str = '';
    for (let i in string) {
        switch(string[i]) {
            case '1': str += 'a'; break;
            case '2': str += 'e'; break;
            case '3': str += 'i'; break;
            case '4': str += 'o'; break;
            case '5': str += 'u'; break;
            default: str += string[i];
        }
    }
    return str;
}

console.log(decode(encode('hello')));
