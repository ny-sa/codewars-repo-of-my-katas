//You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:
//
// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// If no bigger number can be composed using those digits, return -1:
//
// 9 ==> -1
// 111 ==> -1
// 531 ==> -1

//My solution
function nextBigger(n){
    let number = n.toString();  //so that swapping digits is a little easier
    const swap = (a, b) => { return number.substring(0, a) + number.substring(b, b + 1) + number.substring(a + 1, b) +
        number.substring(a, a + 1) + number.substring(b + 1, number.length);
    };  //returns a string number where its two digits swap places
    for (let i = number.length - 2, lowest = 10, lowestJ; i >= 0; i--) {    //starts from the second to last digit, checking for
        for (let j = i + 1; j < number.length; j++) {                       //a digit to the right that is greater
            if (number[i] < number[j] && number[j] < lowest) {              //if more than one digit to the right is greater,
                lowest = number[j];                                         //pick the lowest greater digit
                lowestJ = j;
            }
        }
        if (lowest < 10) {                                                  //and then swap the two chosen digits
            number = swap(i, lowestJ);
            let lesser = number.slice(i + 1, number.length);
            lesser = Array.from(lesser).sort((a, b) => { return a - b }).reduce((a, b) => { return a + b });
            return Number(number.slice(0, i + 1) + lesser);
        }   //then we sort all digits to the right of the leftmost swapped digit
    }       //such that the value of the whole number decreases even further
    return -1;
}

//'Best Practices' solution
function nextBigger(n){
    console.log(n); //having console.log at the start and end, maybe for gauging time taken for the function to perform?
    var chars = n.toString().split(''); //further separates string in array of chars
    var i = chars.length-1;
    while(i > 0) {  //similar digit finder, but only checks adjacent ones to the left
        if (chars[i]>chars[i-1]) break;
        i--;
    }
    if (i == 0) return -1;  //should return -1 sooner than mines
    var suf = chars.splice(i).sort();   //sorts the section right of the swapping digit first
    var t = chars[chars.length-1];
    for (i = 0; i < suf.length; ++i) {
        if (suf[i] > t) break;  //then finds the lowest greater digit to the swapping digit and swaps
    }
    chars[chars.length-1] = suf[i]
    suf[i] = t;
    var res = chars.concat(suf);
    var num = parseInt(res.join(''));
    console.log("->" +num);
    return num; //joins the strings, converts and returns the answer
}