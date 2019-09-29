//Count the number of Duplicates
//
//Write a function that will return the count of distinct case-insensitive alphabetic characters and 
//numeric digits that occur more than once in the input string. The input string can be assumed to 
//contain only alphabets (both uppercase and lowercase) and numeric digits.
//
//Example
//
//"abcde" -> 0 # no characters repeats more than once
//"aabbcde" -> 2 # 'a' and 'b'
//"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
//"indivisibility" -> 1 # 'i' occurs six times
//"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
//"aA11" -> 2 # 'a' and '1'
//"ABBA" -> 2 # 'A' and 'B' each occur twice

//My solution
function duplicateCount(text) {
    let dupe = [], newText = text.toLowerCase()                  //turns text to sorted, one-case array that is simpler to check
                                 .split('')
                                 .sort();
    for (let i = 0; i < newText.length; i++)
        if (newText[i + 1] === newText[i] && !dupe.includes(newText[i]))    //checks for duplicates, that are next to each other
            dupe.push(newText[i]);
    return dupe.length
}

//'Best Practices' solution
function duplicateCount(text){  //rejoins back to string, then counts duplicates through the length of regex .match()
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
  }