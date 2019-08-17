//Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation
// of that integer. Modern Roman numerals are written by expressing each digit separately starting with the left most digit and
// skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is
// written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.
//
// Example:
// solution(1000); // should return 'M'

//My solution
function solution(num){
    let r = ''; //I only did a giant list of simple conditionals
    while (num >= 1000) { r += 'M'; num -= 1000; }
    if (num >= 900) { r += 'CM'; num -= 900; }
    if (num >= 500) { r += 'D'; num -= 500; }
    if (num >= 400) { r += 'CD'; num -= 400; }
    while (num >= 100) { r += 'C'; num -= 100; }
    if (num >= 90) { r += 'XC'; num -= 90; }
    if (num >= 50) { r += 'L'; num -= 50; }
    if (num >= 40) { r += 'XL'; num -= 40; }
    while (num >= 10) { r += 'X'; num -= 10; }
    if (num >= 9) { r += 'IX'; num -= 9; }
    if (num >= 5) { r += 'V'; num -= 5; }
    if (num >= 4) { r += 'IV'; num -= 4; }
    while (num >= 1) { r += 'I'; num -= 1; }
    return r;
}

//'Best Practices' solution
function solution(number){
    var  roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 };  //made an object for roman numerals
    var ans = '';
    while(number>0){                                                    //nested a for loop inside a while loop such that it goes
        for(let a in roman){                                            //through the roman object, finds the right letter and
            if(roman[a]<=number){ ans += a; number-=roman[a]; break;}   //inserts it in, and goes back to the start until the
        }                                                               //number parameter becomes 0
    }
    return ans;
}