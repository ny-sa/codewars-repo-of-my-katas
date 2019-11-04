//Let us take a string composed of decimal digits: "10111213". We want to code this string as a string of 0 and 1 and after that be
// able to decode it.

//We decompose the given string in its decimal digits 1 0 1 1 1 2 1 3 and we will code each.

//Coding process to code a number n expressed in base 10:
//a) Let k be the number of bits of n

//b) Put k-1 times the digit 0 followed by the digit 1

//c) Put number n in binary

//d) Concat the result of b) and c)

//So we code 0 as 10, 1 as 11 ... etc...

//Repeating this process with the initial string

//"10111213" becomes : "11101111110110110111" resulting of concatenation of 11 10 11 11 11 0110 11 0111 .

//Task:
//Given strng a string of digits representing a decimal number the function code(strng) should return the coding of strng as 
//explained above.

//Given a string strng resulting from the previous coding, decode it to get the corresponding decimal string.

//My solution
