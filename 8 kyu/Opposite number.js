//Very simple, given a number, find its opposite.
//
// Examples:
//
// 1: -1
// 14: -14
// -34: 34

//My solution
function opposite(number) { //No native methods "challenge"
    return -number;
}

//'Best Practices' solution
function opposite(number) {
    return(-number);    //parenthesis can be used for return statements that need multiple lines
  }