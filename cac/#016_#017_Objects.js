// Master Objects and Events to master JS

// singleton
//Object.create

// const mySymbol = Symbol("keys");

// Object Literals
// const myUser = {};
// const yourUser = {
//     name: "Mandal",
//     "full Name": "Ajit Mandal",
//     age: 20,
//     location: "Koteshwor",
//     email: 'ajit@gmail.com',
//     isLoggedIn: false,
//     lastLogInDays: ["Wednesday", "Friday"],
//     //mySymbol: "myKey" -> invalid doesnot give error but it not correct way of adding symbols in objects
//     [mySymbol]: "myKey"
// };

// console.log(yourUser.name);
// //console.log(yourUser[age]); //doesnot work
// console.log(yourUser["email"]); //but works
// console.log(yourUser["full Name"]);
// //console.log(yourUser.full Name]); //doesnot work

// console.log(yourUser.mySymbol); //gives undefined
// console.log(typeof(yourUser.mySymbol)); //gives undefined

// console.log(yourUser[mySymbol]);
// console.log(typeof(yourUser[mySymbol]));

// Interview Questions:
// Create a symbol and add it into an array and display that symbol

// yourUser.age = 25;
// console.log(yourUser);

// to lock the object values
// Object.freeze(yourUser);
// yourUser.age = 30;
// console.log(yourUser);

// yourUser.greeting = function(){
//     console.log("Hello, Javascript Users");
// }

// yourUser.greetingTwo = function(){
//     console.log(`Hello, Javascript Users, ${this.name}`);
// }

// console.log(yourUser.greeting); //shows [Function (anonymous)]
// console.log(yourUser.greeting());
// console.log(yourUser.greetingTwo());

// Objects properties are usually accessed using .operator but sometimes we also use [] brackets like in Symbols

// #017

const newUser = new Object() // -> both method of declaring object is same but this is singleton object
//const newUser = {} -> both method of declaring object is same but this is non-singleton object

// newUser.id = "abc";
// newUser.name = "Heroes";
// newUser.isLoggedIn = true;

// console.log(newUser);

// const anotherUser = {
//     email: "your@gmail.com",
//     fullName: {
//         userFullName: {
//             fName: "Ajit",
//             lName: "Mandal"
//         }
//     }
// }

// console.log(anotherUser.fullName.userFullName.fName);

//console.log(anotherUser.fullName?.userFullName.fName); -> Optional Chaining means if there is fullName 
//                                                          then only go to userFullName


// Combining two or more objects
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// const obj3 = {obj1, obj2}; -> here obj2 goes in obj1
// console.log(obj3); // displays in this way { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3 = Object.assign(obj1, obj2);
// const obj3 = Object.assign({}, obj1, obj2); //here obj1, obj2 goes inside {} empty array -> good for production
// console.log(obj3);

// Using Spread Operator to join two obejcts
const obj3 = {...obj1, ...obj2};

const otherUser = {
    id: 1,
    name: 'Ajit',
    isLoggedIn: true
};

console.log(Object.keys(otherUser)); //gives keys of objects in an array
console.log(Object.values(otherUser)); //gives values of objects in an array
console.log(Object.entries(otherUser)); //gives whole array in key-value pairs.

// The Object.entries() static method returns an array of a given 
// object's own enumerable string-keyed property key-value pairs.

console.log(otherUser.hasOwnProperty('isLoggedIn'));
console.log(otherUser.hasOwnProperty('isLogged'));