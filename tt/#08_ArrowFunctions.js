// Fat Arrow Function

// Normal way of writing a function
// console.log(sum());

// function sum(){
//     let a = 5;
//     let b = 6;
//     let sum = a + b;
//     return `The sum of two numbers is ${sum}`;
// }

// How to convert into fat arrow function 

// console.log(sum()); //gives error cannot acces 'sum' before initialization

// const sum = () => {
//     let a = 5;
//     let b = 6;
//     let sum = a + b;
//     return `The sum of two numbers is ${sum}`;
// }

//After function definition then only function can be called.
// console.log(sum());

/*  *********** Differences ***********
    01 Arrow function can be called only after function definition.
    02 Function keyword is not required in fat arrow function, instead, fat arrow symbol ( => ) is used.
*/

// Fat Arrow Function can be simplified more:

const pro = () =>{
    let a = 5;
    let b = 6;
    return `The product is ${a * b}`;
}
pro(); //doesnot give any output
console.log(pro());

//can be simplified as below:
const prod = () => {
    return `The product is ${(a=5) * (b=7)}`;
}
console.log(prod());

// If there is only single line to return then no need to write the return keyword

const product = () => `The product is ${(a = 10) * (b = 8)}`; //no need of curly braces too after =>
console.log(product());





