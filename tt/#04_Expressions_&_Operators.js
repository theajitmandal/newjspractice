// 5 + 20 
//Here, 5 and 20 are called operands, + is the operator

//Expression is the combination of operator and operand. Example: 5 + 20 as a whole is a expression

//1. Assignment Operator: It assigns a value to its left operand based on the value of its right operand.
    //The assignment operator is equal to sign(=).

// var x = 5;
// var y = 5;
// console.log(x == y); //true
// console.log("Is both x and y are equal or not" + x==y); //This gives false output
// console.log(`Is both x and y are equal: ${x==y}`); //This is called ECMASCRIPT

/*2. Arithmetic Operators: It takes numerical values (either literals or variables) as their operands and returns
a single numerical value.*/

// console.log(3 + 3);
// console.log(10 - 5);
// console.log(20 / 5);
// console.log(5 * 6);
// console.log(27 % 4); //Modulus Operator

//Increment and Decrement Operator
//  x++         x--    ~ They are post increment/post decrement
//  ++x         --x    ~ They are pre increment/pre decrement

/*
           Post                                                 Pre
    1. It is used after operand                         1. It is used before operand
    2. It increments operand 
       and returns the value before incrementing        2. It increments and returns value after incrementing.

       //Postfix Increment Operator means the expression is evaluated first using the original value of the variable
       and then the variable is incremented.
*/

//Run and Check Yourself
// var num = 15;
// var newNum = num++; 
// console.log(num);
// console.log(newNum);

//Example
// var num = 15;
// var newNum = num++; //num++ means same 15 but original value of numm will be incremented by 1
// console.log(num);
// console.log(newNum);

//Run and Check Yourself
// var num = 15;
// var newNum = ++num; 
// console.log(num);
// console.log(newNum);


//Example
// var num = 15;
// var newNum = ++num; //++num means same 16 and original value of numm will be also be incremented by 1
// console.log(num);
// console.log(newNum);


//3. Comparison Operator: It compares its operand and returns a logical value based on whether the comparison is true.
//Equal to =
//Not Equal to !=
//Greater than >
//Greater than or equal to >=
//Less than <
//Less than or equal to <=

// let a = 30;
// let b = 10;

// console.log(a==b);
// console.log(a===b);
// console.log(a!=b);
// console.log(a>=b);
// console.log(a>b);
// console.log(a<=b);
// console.log(a<b);

//4. Logical Operators: Typically used with Boolean(logical) values. They return a boolean value.
// Logical AND (&&): Logical Conjuction
// Logical OR (||): Logical Disjunction
// Logical NOT (!): Logical Complement, Negation

//5. String Operators
//   The concatenation operator(+) concatenates two string values together returning another string 
//   that is the union of two operand strings.

//Conditional/Ternary Operator will be discussed later

//Challenge
//1. What will be the output of 3**3?
//2. Write a program to swap two numbers.

//1 no. solution
//3**3 = 27              Note: 10**-1 = 10^-1 = 1/10 = +0.1
//2 no. solution
//Using third variable
// var a = 5;
// var b = 6;
// console.log(`Before Swapping: a = ${a} & b = ${b}`);
// var c = a;
// var a = b;
// var b = c;
// console.log(`After Swapping: a = ${a} & b = ${b}`);

//Without using third variable
// var a = 5;
// var b = 10;
// console.log(`Before Swapping: a = ${a} & b = ${b}`);
// var a = a + b;
// var b = a - b;
// var a = a - b;
// console.log(`After Swapping: a = ${a} & b = ${b}`);

//Interview Questions : Difference between == and ===
/*
        ==                              ===
    Checks only value           Checks both value as well as data type
*/

// var a = 15;
// var b = '15';
// console.log(a == b);
// console.log(a === b);





