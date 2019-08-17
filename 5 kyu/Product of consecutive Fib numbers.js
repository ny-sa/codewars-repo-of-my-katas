//Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying
//
// F(n) * F(n+1) = prod.
//
// Your function productFib takes an integer (prod) and returns an array:
//
// [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
// depending on the language if F(n) * F(n+1) = prod.
//
// If you don't find two consecutive F(m) verifying F(m) * F(m+1) = prod you will return
//
// [F(m), F(m+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
// F(m) being the smallest one such as F(m) * F(m+1) > prod.
//
// Examples
// productFib(714) # should return [21, 34, true],
//                 # since F(8) = 21, F(9) = 34 and 714 = 21 * 34
//
// productFib(800) # should return [34, 55, false],
//                 # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55

//My solution
function productFib(prod){  //simple while loop and return
    let fibo = [0, 1];
    while (fibo[0] * fibo[1] < prod) {  //while the fibonacci product is less than prod, push f(n + 1) in and shift f(n - 1) out
        fibo.push(fibo[0] + fibo[1]);
        fibo.shift();
    }
    return [fibo[0], fibo[1], fibo[0] * fibo[1] == prod];   //two numbers and a boolean
}

//'Best Practices' solution
function productFib(prod){
    var n = 0;      //seems I didn't even have to use an array
    var nPlus = 1;  //other than that this solution is about the same
    while(n*nPlus < prod) {
        nPlus = n + nPlus;
        n = nPlus - n;
    }
    return [n, nPlus, n*nPlus===prod];
}