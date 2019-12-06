//This time no story, no theory. The examples below show you how to write function accum:
//
// Examples:
//
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

//My solution
function accum(s) { //No native methods (other than letter cases) challenge
    let string = '';
    for (let i = 0; i < s.length; i++) {
        string += s[i].toUpperCase();
        for (let j = 0; j < i; j++) string += s[i].toLowerCase();
        if (i < s.length - 1) string += '-';
    }
    return string;
}

//'Best Practices' solution
function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-'); //map() transforms each character
  }                                                                                            //join() adds the hyphen between