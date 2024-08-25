/***** Scopes *****/

// scope is dealt with let, var and const

// let a = 50;
// const b = 30;
// var c = 80;

// console.log(a);
// console.log(b);
// console.log(c);

// Scopes are defined inside curly braces like inside functions and if-else 
// curly braces in objects are not like scopes

// var c = 300;
// if(true){
//     let a = 50;
//     const b = 30;
//     var c = 80;
// }

// console.log(a); // shows a is not defined
// console.log(b); // shows a is not defined
// console.log(c);  //var is 300 before if statements but later is changed inside if block so avoid var

// inside braces -> local scope and outside braces -> global scope

// let a = 500;
// if(true){
//     let a = 100;
//     const b = 70;
//     var c = 90;
//     console.log("Inner: ", a); //this is local scope
// }

// console.log("Outer: ", a);; // this is global scope

/***** Very Important *****/
// global scope of running js code in browswer console is different than running js code in code environment through node


// #022 Scope Level and mini hoisting in JS

// function one(){
//     const userName = "Ajit";
    
//     function two(){
//         const website = "YouTube";
//         console.log(userName);
//     }
//     //console.log(website); // one() is bigger and bigger cannot ask from smaller one like 
//                           // bigger person cannot ask ice-cream from smaller one but smaller one can ask

//     two(); //What will happen if two() is not called here? Think Yourself.
// }

// one();

// Find mistakesa and correct the following lines upto console.log(username)

// if (true) {
//     const userName = "Ajit";
//     if (userName === "Ajit") {
//         const website = " YouTube ";
//         console.log(userName + website);
//     }
//     console.log(website);
// }

// console.log(userName);

/***** Interesting Concept *****/

function addOne (num) {
    return num + 1;
}

addOne(5); //can be written before function declaration

// In above code , value will not be printed only function will be called

addTwo(5); //gives erron because of below way of declaring function (Hoisting Concept we will learn later)
const addTwo = function(num) { //functions cabe be written in this way too...
    return num + 2;
}

addTwo(7);
