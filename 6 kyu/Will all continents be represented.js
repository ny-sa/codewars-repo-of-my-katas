//You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend
// the next coding meetup that you are organising.
//
// Your task is to return:
//
// true if all of the following continents / geographic zones will be represented by at least one developer: 'Africa', 'Americas',
// 'Asia', 'Europe', 'Oceania'.
// false otherwise.
// For example, given the following input array:
//
// var list1 = [
//   { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
//   { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
//   { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
//   { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
//   { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
// ];
// your function should return true as there is at least one developer from the required 5 geographic zones.
//
// Notes:
//
// The input array and continent names will always be valid and formatted as in the list above for example 'Africa' will always
// start with upper-case 'A'.

//My solution
function allContinents(list) {  //No native methods challenge
    let truths = [false, false, false, false, false];
    for (let i in list) {
        switch (list[i].continent) {
            case 'Africa': truths[0] = true; break;
            case 'Americas': truths[1] = true; break;
            case 'Asia': truths[2] = true; break;
            case 'Europe': truths[3] = true; break;
            case 'Oceania': truths[4] = true;
        }
    }
    for (let i in truths) if(truths[i] == false) return false;  //running two loops does not seem to be necessary for this problem
    return true;
}

//'Best Practices' solution
function allContinents(list) {  //checks if .every element of the array below, matches .some elements, at least one, in list
    return ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'].every(x => list.some(y => x==y.continent));
  }