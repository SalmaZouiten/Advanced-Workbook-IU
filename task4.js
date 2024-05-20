// I have decided to carry out the mortgage repayment algorithm for the mathematical problem for Task 4

const P = 400000; // P is the starting balance of the loan, i.e., the money you are loaning from the bank
const r = (4/100)/12; /* r is the anual interest rate, I decided to go for a 4% interest rate, which would be (4/100) = 0.04 
devided by 12 for the annual rate */
const n = (25*12); // this is the total amount of payments you will be making until you are done paying off the loan; total payments

// The formula for mortgage repayments is = P * [r (1+r) ^n] / [(1+r) ^n - 1]

var a = (1 + r)^n; // (1+R)^n]
var b = r * a; // R (1+R)^n]
var c = P * b; // P *[R (1+R)^n]
var d = a - 1; // [(1+R)^n - 1]
var e = c / d; // P *[R (1+R)^n] / [(1+R)^n - 1];


console.log("The monthly mortgage repayment is " + e);// we print the result
 