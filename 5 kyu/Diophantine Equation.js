//In mathematics, a Diophantine equation is a polynomial equation, usually with two or more unknowns, such that only the integer    
//solutions are sought or studied.

//In this kata we want to find all integers x, y (x >= 0, y >= 0) solutions of a diophantine equation of the form:

//x2 - 4 * y2 = n
//(where the unknowns are x and y, and n is a given positive number) in decreasing order of the positive xi.

//If there is no solution return [] or "[]" or "". (See "RUN SAMPLE TESTS" for examples of returns).

//Examples:
//solEquaStr(90005) --> "[[45003, 22501], [9003, 4499], [981, 467], [309, 37]]"
//solEquaStr(90002) --> "[]"
//Hint:
//x2 - 4 * y2 = (x - 2*y) * (x + 2*y)

//My solution
function solequa(n) {                                                               
    let array = [];
    for (let a = 1; a <= n**.5; a++)
        if (Number.isInteger(n/a))
            if (Number.isInteger((n/a + a)/2) && Number.isInteger((n/a - a)/4))
                array.push([(n/a + a)/2, (n/a - a)/4]);
    return array;
}

//find all factors of n
//derive x and y from these factors
//where a is the smaller factor and n/a the larger factor
//x = (n/a + a)/2, and y = (n/a - a)/4
//if both x and y are integers, add into elements and return array
//O(n^.5), should be efficient enough

//'Best practices' solution
function solequa(n) {
    let result = []
    for ( let d, x, y, i=1; i <= Math.sqrt(n); i++ ) {
      if ( Number.isInteger( d = n/i ) && Number.isInteger( x = (d+i)/2) && Number.isInteger( y = (d-i)/4)) {
        result.push([x,y]);
      }
    }
    return result;
  }