/**** This Keyword *****/

// const user = {
//     username: 'Ajit',
//     price: 789,

//     welcomeMessage: function(){
//         // console.log(`${username} Welcome to website`);   //gives error that username is not defined
//         console.log(`${this.username} Welcome to website`);   //this keyword is used to define the currenct context
//         console.log(this);    
//     }
    
// }

// user.welcomeMessage;
// user.welcomeMessage();
// console.log((user.welcomeMessage())); //gives undefined

// user.username = 'David'; //changes the value of username 
// user.welcomeMessage(); //gives David Welcome to website since context of username is changed which is referenced by this keyword

// console.log(this); //current context of this outside any functions is {} but in JS console gives Window Global Object

// function letsCheckThis(){
//     console.log(this);    
// }
// letsCheckThis(); //This keyword printed inside any function gives Window Global Object

// function letsCheckThisAgain(){
//     const username = 'Mandal';
//     console.log(this.username);    //gives undefined because this keyword gives context in case of OBJECTS only
// }
// letsCheckThisAgain(); //This keyword printed inside any function gives Window Global Object


/**** Arrow Function *****/

// const food = function() {
//     let username = "Mandal";
//     console.log(this.username); //gives undefined
// }

// const food = () => {
//     let username = "Mandal";
//     console.log(this.username); //gives undefined
// }

// food();

// Arrow Functions
// () => {

// }

// const add = (a, b) => {
//     return a + b;
// }

// console.log(add(2, 6));

// Implicit Return ~ If there is only one return statement then no need to write return keyword
// Used widely in the react 
// const add = (a, b) => a + b;
const add = (a, b) => (a + b);


console.log(add(2, 5));

// To return object 
// const diff = (a, b) => {userName: "Mandal"}; //gives undefined
const diff = (a, b) => ({userName: "Mandal"}); //must be wrapped inside paranthesis to get the output


console.log(diff(2, 5));

// Differences between Normal Functions and Arrow Functions

const myArrays = [2, 5, 8, 9, 11, 13];

// myArrays.forEach(() => ()) // different functions are used in arrays we will learn in depth while learning Array


