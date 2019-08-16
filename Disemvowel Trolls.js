//Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

//My solution
function disemvowel(str) {
    return str.replace(/a/gi, '').replace(/e/gi, '').replace(/i/gi, '').replace(/o/gi, '').replace(/u/gi, '');
}                                                                   //returned a single line of method calls

//'Best Practice' solution
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');                            //looks like I didn't even have to do that
}                                                                   //RegExp seems very useful, I should look into it more