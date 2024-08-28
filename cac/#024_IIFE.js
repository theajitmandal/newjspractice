/***** Immediately Invoked Function Expressions (IIFE) *****/
// Inoder to remove the pollutions of global variables or declarations, IIFE is used.

// Normal Function
// function hello(){                    ¬ Function Definition
//     console.log(`DB Connected`);     ¬ Function Definition
// }                                    ¬ Function Definition
// hello();                 ¬ Function Execution

// IIFE                                 
// ()()            ¬ First Paranthesis -> Function Definition       ¬ Second Paranthesis -> Function Execution

// (function hello(){
//     console.log(`DB Connected`);
// })()

// IIFE using arrow function

// named IIFEE
(function hello(){
    console.log(`DB Connected`);
}) (); //if semicolon is not given here then it produces error becase compiler doesnot know where to end this IIFEE func.

// 
(hello = () => {
    console.log(`DB Connected`);
}) ();

// nameless IIFEE and passing arguments
( (name) => {
    console.log(`DB Connected ${name}`);
}) ('Ajit'); //sending arguments