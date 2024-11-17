/***** Functions *****/

// package of lines of codes

// console.log("A");
// console.log("J");
// console.log("I");
// console.log("T");

// function myName(){
//     console.log("A");
//     console.log("J");
//     console.log("I");
//     console.log("T");
// }

// myName  // function reference -> Doesnot print or execute anything 
// myName() // function execution

// function add(a, b){ //a & b are parameters
//     return a + b;
// }

// add(2, 3); //doesnot print anything
// console.log(add(2, 3)); //2 & 3 are arguments

// function pro(a, b){
//     console.log(a * b);    
// }

// pro(2, 3);

// return keyword will return value back to the calling statement but wont' print the data itself

// Interesting concept in JS

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// function addTwoNumbers(number1, number2){
//     // let result = number1 + number2;
//     // return result;
//     return number1 + number2
//     console.log("Ajit"); //below return keyword no codes will run
// }

// const result = addTwoNumbers(2, 5);
// console.log("Result: ", result);

// function loginUserMessage(username){ //if username = "John" then this is default value
//     if(username === undefined){
//         console.log("Please enter a username");     
//         return   
//     }
//     if(!username){ //means that if username is undefined
//         console.log("Please enter a username");     
//         return   
//     }
//     return `${username} just logged in`
// }
// loginUserMessage("Ajit"); //doesnot print
// console.log(loginUserMessage("Ajit")); //data will print here
// console.log(loginUserMessage("")); //value of username will be empty

// console.log(loginUserMessage()); //value of username will be undefined here

// #20
// Functions with objects and arrays

/***** Very Very Important  *****/

// ... acts as spread operator and rest operator both but when? -> learn later, in below code used as rest 
// rest means to pack all pieces in one bundle
// function calculateCartPrice(...num1){
//     return num1
// }


// function calculateCartPrice(val1, val2, ...num1){ //val1 takes 2, val2 takes 4 and rest values 10 & 16 are taken by num1
//     return num1
// }

// console.log(calculateCartPrice(2));
// console.log(calculateCartPrice(2, 4, 10, 16)); //sends only first argument if not used rest in function definition

/***** Passing objects and arrays into function *****/
const user = {
    username: "ajjit",
    price: 400
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user);

const myNewArray = [300, 100, 400, 800];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([300, 100, 400, 800])); //save as above line




