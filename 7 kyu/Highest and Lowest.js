//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//
// Example:
//
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:
//
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

//My solution
function highAndLow(numbers) { //No native methods challenge
    let array = [], str = '', highest, lowest;
    numbers += ' ';
    for(let i = 0, j = 0; i < numbers.length; i++) {
        if (numbers[i] === ' ' ) {
            array[j] = str * 1; j++; i++; str = '';
        }
        str += numbers[i];
    }
    highest = array[0], lowest = array[0];
    for (let i = 1; i < array.length; i++) {
        if (highest < array[i]) highest = array[i];
        if (lowest > array[i]) lowest = array[i];
    }
    return `${highest} ${lowest}`;
}

//'Best Practices' solution
function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);   
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);   //method goes through array once to determine specified 
}                                                                           //value