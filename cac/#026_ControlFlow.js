/***** Control Flow *****/ 

// IF statements

// if (true) {
//     // some code here
// }

// if (false) {
//     // some code here
// }

// const isUserLOggedIn = true;
// if(3 != 2){
//     console.log("True");
// }

// if(3 !== 2){
//     console.log("True");
// }

// Comparison Operators
// <, >, <=, >=, ==, !=, ===(checks both type and value), !==(not equal value or equal type)
// 3 != 2 -> true        |              != different values then true, for Equal to =, same values
// 3 !== 2 -> true       |              !== differnet values or differnet types then true

// const temperature = 35;
// if (temperature < 40){
//     console.log("Less than 40");
// }else{
//     console.log("More than 40");
// }

// const score = 300;
// if (score > 100) {
//     const power = "fly";
//     console.log(`User Power: ${power}`);    
// }
// console.log(`User Power: ${power}`);    // says power is not defined because of scope {} but if var is used then runs

// Shorthand Notation

// const balance = 2000;

// Implicit scope
// if (balance > 600) console.log("test");
// multiple lines can also be added after comma but is not suitable and good code so avoid it
// if (balance > 600) console.log("test"),
// console.log("test2");

// Nesting
// if (balance < 500) {
//     console.log("Less than 500");   
// } else if (balance < 750) {
//     console.log("Less than 750");
// } else if (balance < 900) {
//     console.log("Less than 900");  
// } else{
//     console.log("Less than 1500");
// }

// Real Life Example

// const userLoggedIn = true;
// const debitCard = true;

// const loggedInFromGoogle = false;
// const loggedInFromEmail = true;

// if(userLoggedIn && debitCard){
//     console.log("Allow to buy course");   
// }

// if (loggedInFromEmail || loggedInFromGoogle) {
//     console.log("User Logged In");  
// }



/***** Switch Statement *****/ 
// Shift Alt Down Arrow

// const day = 15;
// switch (day) {
//     case 1:
//         console.log("Sunday");     
//         break;

//     case 2:
//         console.log("Monday");     
//         break;
//     case 3:
//         console.log("Tuesday");     
//         break;
//     case 4:
//         console.log("Wednesday");     
//         break;
//     case 5:
//         console.log("Thursday");     
//         break;
//     case 6:
//         console.log("Friday");     
//         break;
//     case 7:
//         console.log("Saturday");     
//         break;     
//     default:
//         console.log("Invalid Day");
//         break;
// }

// By default if any case is matched then all codes below that line is executed except default
// if break; statement is ommitted

/***** Truthy/Falsy Values *****/ 
// const userEmail = "a@gmail.com"
// const userEmail = "" //assumes false
// const userEmail = [] //assumes true

// if (userEmail) { //checks if userEmail exists or not
//     console.log("Got User Email");  
// } else {
//     console.log("Dont have use email");
// }

// Falsy Values -> false, 0, -0, BIgInt 0n, "", null, undefined, Nan
// Truthy Values -> "0" (0 inside string), 'false' (inside string is true), " ", [], {}, function(){} -> empty function

// if (userEmail.length === 0) {
//     console.log("Array is empty");  
// }

// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is Empty");        
// }

// Important Notes: Run and check yourself in browser console
    // false == 0 
    // false == ''
    // 0 == ''

/***** Nullish Coalescing Operator (??): null undefined *****/ 

// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its 
// left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

// When database call is made, firebase or appwrite is used we dont get directly values we get 2 values may be 
// null or undefined so for that special case we use this

// let val1;
// val1 = 5 ?? 10; // assigns first value
// val1 = null ?? 10; // inplace of 10, we may use complex functions
// val1 = undefined ?? 15; // inplace of 10, we may use complex functions
// val1 = null ?? 10 ?? 20 //assigns first value

// console.log(val1);

/***** Ternay Operator *****/ 
// condition ? true : false

const a = 15;
a<10 ? console.log("Less than 5"): console.log("More than 5");
(a<10) ? console.log("Less than 5"): console.log("More than 5");

// Summary
// Usage of IF...Statement, IF....ELSE.....Statement
// Comparison Operators in conditional statements
// Scope of using let, var, const
// If Statement in single line
// Using && and || logical operators in IF Statements
// Switch & Case, break and default
// Truthy & Falsy Values
// Checking array is empty or not, object is empty or not
// Nullish Coalescing Operator ??
// Ternary Operator ?








