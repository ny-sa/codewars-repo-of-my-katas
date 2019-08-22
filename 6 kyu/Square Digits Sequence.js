//Task
// Consider a sequence of numbers a0, a1, ..., an, in which an element is equal to the sum of squared digits of the previous
// element. The sequence ends once an element that has already been in the sequence appears again.
//
// Given the first element a0, find the length of the sequence.

//My solution
function squareDigitsSequence(a0) { //no native methods challenge
    let current = a0, sequence = [a0], sum = 0, keepGoin = true;
    while (keepGoin) {
        for (let i = 0, curStr = '' + current; i < curStr.length; i++)
            sum += curStr[i] ** 2;
        for (let i in sequence)
            if (sum === sequence[i])
                keepGoin = false;
        sequence[sequence.length] = sum;
        current = sum;
        sum = 0;
    }
    return sequence.length;
}