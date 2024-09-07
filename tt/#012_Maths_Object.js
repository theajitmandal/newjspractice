/***** JavaScript Maths Object *****/

// Javascript Math Object allows you to perform the mathematical tasks on the numbers.

/* Math.PI */
console.log(Math.PI); // 3.141592653589793

/* Math.round() -> returns the value of x rounded to its nearest integer */
let num = 10.2565;
console.log(Math.round(num));

/* Math.pow() -> returns the value of x to the power y */
console.log(Math.pow(2,3));
console.log(2**3); //withou Maths function

/* Math.sqrt() -> returns the square root of x */
console.log(Math.sqrt(9));
console.log(Math.sqrt(81));

/* Math.abs() -> returns the absolute positive value of x */
console.log(Math.abs(-55));
console.log(Math.abs(-55.5));

/* Math.ceil() -> returns the value of x rounded upto its nearest integer : always increments to upper integer +1 */
console.log(Math.round(4.51));
console.log(Math.round(99.22));
console.log(Math.ceil(4.51));
console.log(Math.ceil(99.22));

/* Math.floor() -> returns the value of x rounded down to the nearest integer */
console.log(Math.floor(4.7));
console.log(Math.floor(99.1));

/* Math.min() -> can be used to find the lowest value in a list of argument */
console.log(Math.min(0, 150, 30, 20, -8, -200));

/* Math.max() -> can be used to find the highest value in a list of argument */
console.log(Math.max(0, 150, 30, 20, -8, -200));

/* Math.random() -> returns a random number between 0(inclusive) and 1(exclusive) */
console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10)); //between 0 to 9

/* Math.trunc() -> returns the integer part of a number) */
console.log(Math.trunc(4.6));
console.log(Math.trunc(-99.2));
console.log(Math.trunc(89.0));
console.log(Math.trunc(898.002));

// Practice Time : If the argument is a +ve number, Math.trunc() is equivalent to Math.floor otherwise Math.trunc() is 
// equivalent to Math.ceil()













