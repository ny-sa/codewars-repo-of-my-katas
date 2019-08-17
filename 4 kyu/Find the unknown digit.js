// To give credit where credit is due: This problem was taken from the ACMICPC-Northwest Regional Programming Contest.
// Thank you problem writers.
//
// You are helping an archaeologist decipher some runes. He knows that this ancient society used a Base 10 system, and that they
// never start a number with a leading zero. He's figured out most of the digits as well as a few operators, but he needs your help
// to figure out the rest.
//
// The professor will give you a simple math expression, of the form
//
// [number][op][number]=[number]
// He has converted all of the runes he knows into digits. The only operators he knows are addition (+),subtraction(-), and
// multiplication (*), so those are the only ones that will appear. Each number will be in the range from -1000000 to 1000000, and
// will consist of only the digits 0-9, possibly a leading -, and maybe a few ?s. If there are ?s in an expression, they represent
// a digit rune that the professor doesn't know (never an operator, and never a leading -). All of the ?s in an expression will
// represent the same digit (0-9), and it won't be one of the other given digits in the expression. No number will begin with a 0
// unless the number itself is 0, therefore 00 would not be a valid number.
//
// Given an expression, figure out the value of the rune represented by the question mark. If more than one digit works, give the
// lowest one. If no digit works, well, that's bad news for the professor - it means that he's got some of his runes wrong. output
// -1 in that case.
//
// Complete the method to solve the expression to find the value of the unknown rune. The method takes a string as a parameter
// representing the expression and will return an int value representing the unknown rune or -1 if no such rune exists.

//My solution
function solveExpression(exp) {
    const test = digit => {
        const express = string => { //returns a number from a number string where '?' is replaced with digit
            let sum = 0;    // '8?61' -> express(3) -> 8361
            for(let i = 0; i < string.length; i++) {
                if (string[i] === '?') sum += digit * Math.pow(10, string.length - 1 - i);
                else sum += Number(string[i]) * Math.pow(10, string.length - 1 - i);
            }
            return sum;
        };
        const operate = (a, b, op) => { //returns the expression appropriate to the operator character given
            if (op === '+') return a + b;
            if (op === '-') return a - b;
            if (op === '*') return a * b;
        };
        let operator, equals, firstNeg = 0, secondNeg = 0, thirdNeg = 0, operFound = false;
        if (exp[0] === '-') firstNeg = 1;   //the first negative sign, if it exists, will always be at index 0
        for (let i = 1; i < exp.length; i++) {  //finds the indices of the operator and equal sign
            if (!operFound && (exp[i] === '-' || exp[i] === '+' || exp[i] === '*')) {
                operator = i;
                operFound = true;   //so that it doesn't mistakenly take the index of random negative sign
            }
            if (exp[i] === '=') equals = i;
        }
        if (exp[operator + 1] === '-') secondNeg = 1;   //deduces the indices of the other negative signs from operator and equals
        if (exp[equals + 1] === '-') thirdNeg = 1;
        let first = express(exp.slice(firstNeg, operator)), second = express(exp.slice(operator + 1 + secondNeg, equals)),
            third = express(exp.slice(equals + 1 + thirdNeg, exp.length)); //makes sure to only take in the numbers, not '-'
        if (firstNeg === 1) first = -first; if (secondNeg === 1) second = -second; if (thirdNeg === 1) third = -third;
        return operate(first, second, exp[operator]) === third;
    };
    for (let i = 0; i < 10; i++) {  //tests for the '?' going from 0-9, while testing for edge cases
        if (i === 0 && exp.includes('??')) continue;
        if (exp.includes(i.toString())) continue;
        if (test(i)) return i;
    }
    return -1;
}

//'Best Practices' solution
function solveExpression(exp) { //a lot shorter than mines
    exp = exp.replace('=','==').replace('--','+');  //makes the expression ready to turn into boolean
    for(var i = 0; i < 10; i++){
        if(eval(exp.replace(/\?/g,i)) && !exp.includes(i)){
            if(!/^00+$/.test(exp.replace(/\?/g,i).split('==')[1]))  return i;
        }   //don't know a lot of regex but the boolean is tested here
    }
    return -1;
}