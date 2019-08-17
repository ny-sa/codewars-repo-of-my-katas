//ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.
//ROT13 is an example of the Caesar cipher.
//
// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters
// included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted,
// like in the original Rot13 "implementation".

//My solution
function rot13(message){
    let cipher = '';    //implemented a list of conditionals utilizing char codes
    for (let i = 0; i < message.length; i++) {
        if (message.charCodeAt(i) < 65) cipher += message[i];
        else if (message.charCodeAt(i) < 78) cipher += String.fromCharCode(message.charCodeAt(i) + 13);
        else if (message.charCodeAt(i) < 91) cipher += String.fromCharCode(message.charCodeAt(i) - 13);
        else if (message.charCodeAt(i) > 96 && message.charCodeAt(i) < 110)
            cipher += String.fromCharCode(message.charCodeAt(i) + 13);
        else if (message.charCodeAt(i) < 123) cipher += String.fromCharCode(message.charCodeAt(i) - 13);
        else cipher += message[i];
    }
    return cipher;
}

//'Best Practices' solution
function rot13(message) {
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"  //typed out all the characters and their cipher replacement
    var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])         //then called out a replace method with RegExp and a callback
}