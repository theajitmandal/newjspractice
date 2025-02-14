// const arr = [2, 4, 6, 8, 2, 10];

// const newArr = arr.splice(1, 3, "4");

// console.log(newArr);
// console.log(arr);

// for IN
// const arr = [1, 3, 5, 7, 9];
// for(let elem in arr){
//     console.log(elem)
// }

// for of
// for(let elem of arr){
//     console.log(elem)
// }

// for each
// arr.forEach(function(element, index, array){
//     console.log(element)
//     console.log(index)
//     console.log(array)
// }, this);

// arr.forEach((e, i, a)=>
//     console.log(e+=2)
// );
// // console.log(arr);

// console.log(arr.indexOf(14));
// console.log(arr.lastIndexOf(2));

// const findElem = arr.find((elem) => {
//     // console.log(elem<5);
//     return elem>8;
// })
// console.log(findElem);

// const findElem = arr.find((elem) => elem<8);
// console.log(findElem);

// const findElem = arr.find((elem) => elem<=25);
// console.log(findElem);

// arr.forEach((e, i, a) => {
//     // return e+=5;
//     console.log(e+=5);
// })

// console.log(findElem);

// const arr = [2, 4, 6, 8, 10, 12];
// const findElem = arr.find((e, i, a) => {
//     // return e<8;
//     console.log(e<8);
// })

// // console.log(findElem);

// arr.forEach((e, i, a) => {
//     // return e+=5;
//     console.log(e+=5);
// })

// const newElem = arr.forEach((e, i, a) => {
//     return e+=6;
//     // console.log(e+=5);
// })
// console.log(newElem);

// arr = [1, 3, 5, 7, 9];

// // const findNewElem = arr.forEach((e) => e+=5);
// // console.log(findNewElem);

// const findElem = arr.find((e) => e < 5);
// console.log(findElem);

// const findIndex = arr.findIndex((e) => e > 3);
// console.log(findIndex);

// filter
// const newArr = [5, 10, 15, 20, 25, 30];
// const filteredArr = newArr.filter((e, i) => e > 15);
// console.log(filteredArr);

// const animals = ['dog', 'cat', 'hen'];

// console.log(animals.push('goat'));

// const newAnimals = animals.push('goat');
// console.log(newAnimals);

// const myNumbers1 = [2, 4, 5, 8, 9];
// myNumbers1.unshift(3, 7);
// console.log(myNumbers1);

// const newArr = [5, 10, 15, 20, 25, 30];
// console.log(newArr.pop());
// console.log(newArr);

// const months = ['Jan', 'march', 'April', 'June', 'July'];
// months.splice(5,0,'Dec');
// months.splice(3,1,'Dec');
// console.log(months);

// months.splice(1, 1, 'March');
// console.log(months);

// months.splice(3, 1);
// console.log(months);

// const evenArr = [2, 4, 6, 8, 10, 12];
// // const mapElem = evenArr.map((e) => e*=2);
// const mapElem = evenArr.map((e) => e < 5);
// console.log(mapElem);
// console.log(evenArr);

// const arr5 = [25, 36, 49, 64, 81];

// const mulbytwo = arr5.map((e) => e*2).filter((e) => e>60).reduce((acc, currVal) => acc+=currVal);
// console.log(mulbytwo);

// const evenArr = [2, 4, 6, 8, 10, 12];
// const slicedArr = evenArr.slice(2, 4);
// console.log(slicedArr);

// const otherUser = {
//     id: 1,
//     name: 'Ajit',
//     isLoggedIn: true
// };

// console.log(Object.keys(otherUser)); //gives keys of objects in an array
// console.log(Object.values(otherUser)); //gives values of objects in an array
// console.log(Object.entries(otherUser)); //gives whole array in key-value pairs.

// const myName = "ajit" - "mandal";
// const fullName = "ajit" + "mandal";
// console.log(myName);
// console.log(typeof(myName));
// console.log(typeof(fullName));
// console.log(isNaN(NaN));
// console.log(NaN === NaN);
// console.log(NaN == NaN);
// console.log(Number.NaN);
// console.log(Number.NaN === NaN);
// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN(fullName));
// console.log(isNaN(fullName));

//Run and Check Yourself
// var myPhoneNumber = 9804065452;
// var myName = "Ajit";
// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myName));

// var myPhoneNumber = 9804065452;
// var myName = "Ajit";
// console.log(isNan(myPhoneNumber)); //false
// console.log(isNan(myName)); //true

//isNaN Usage:
// var myPhoneNumber = "9804065452";
// if(isNaN(myPhoneNumber)){
//     console.log("Please enter a valid phone number");
// }

// console.log(10 + "20");
// console.log(9 - "5");
// console.log("Java" + "Script");
// console.log("" + "");
// console.log("" + 0);
// console.log("Ajit" - "Mandal");
// console.log(true + true);
// console.log(true + false);
// console.log(false + true);
// console.log(false - true);

// var num = 15;
// var newNum = num++; //num++ means same 15 but original value of num will be incremented by 1
// console.log(num);
// console.log(newNum);

// var num = 15;
// var newNum = ++num; //num++ means same 15 but original value of num will be incremented by 1
// console.log(num);
// console.log(newNum);

// var a = 5;
// var b = 10;
// console.log(`Before Swapping: a = ${a} & b = ${b}`);
// var a = a + b;
// var b = a - b;
// var a = a - b;
// console.log(`After Swapping: a = ${a} & b = ${b}`);
// console.log(a);
// console.log(b);
// console.log(b);

// const arr = [25, 36, 49, 64, 81];

// const newArr = arr.map((e) => e*2).filter((e) => e > 60).reduce((a, e) => a+=e);
// console.log(newArr);

// *************************************** Just Practice and Del... ************************************************* //

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

// // add(2, 3); //doesnot print anything
// console.log(add(2, 3)); //2 & 3 are arguments

// const pro = () => {
//     const a = 5;
//     const b = 6;
//     console.log(`The product is ${(a)* (b)}`);
// }
// pro();

// const pro = () => {
//     console.log(`The product is ${(a=5)* (b=7)}`);
// }
// pro();

// const prod = () => console.log(`The product is ${(a = 8) * (b = 8)}`);
// prod();

// if (true) {
//     var userName = "Ajit";
//     if (userName === "Ajit") {
//         var website = " YouTube ";
//         console.log(userName + website);
//     }
//     console.log(website);
// }

// console.log(userName);

// function addOne (num) {
//     return num + 1;
// }

// addOne(5); //can be written before function declaration

// // In above code , value will not be printed only function will be called

// // addTwo(5); //gives erron because of below way of declaring function (Hoisting Concept we will learn later)
// var addTwo = function(num) { //functions cabe be written in this way too...
//     return num + 2;
// }

// addTwo(7);

// Today
// const a = 5;
// (a >= 18) ? console.log("Can Vote") : console.log("Cannot Vote");

// 19th Nov, 2024

// const coding = ["js", "python", "java", "cpp", "ruby"];

// const values = coding.forEach((item) => {
//     // console.log(item);
//     // return item;
// })

// console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const nums = [2, 4, 6, 8, 10, 12];
// const numsNumsNumss = [2, 4, 6, 8, 10, 12, 14, 15];

// const newNums = myNums.filter( (item) => item > 4  );
// console.log(newNums);
// console.log(newNewNums);

// 19th Dec

// let bioData = {
//     myName : "Ajit Mandal",
//     myAge: 27,
//     getData: function(){
//         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//     }
// }
// console.log(bioData.myName);
// console.log(bioData.getData());

// let bioData = {
//     myName : "Ajit Mandals",
//     myAge: 27,
//     getData(){
//         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//     }
// }
// console.log(bioData.myName);
// console.log(bioData.getData());

// let bioData = {
//     myName: {
//         firstName: "Ajit",
//         secondName: "Mandal"
//     },
//     myage: 26
// }
// console.log(bioData.myName.firstName);

// console.log(this);

// function myName(){
//     console.log(this);
// }
// myName();

// let myNames = "Ajit";
// function myName(){
//     console.log(this.myNames);
// }
// myName();

// const obj = {
//     myAge : 26,
//     myName(){
//         console.log(this);
//         console.log(this.myAge);
//     }
// }
// obj.myName();

// const obj = {
//     myAge : 26,
//     myName : () => {
//         console.log(this);
//     }
// }
// obj.myName();

// const myBioData = ['Ajit', 'Mandal', 26];

// let myFName = myBioData[0];
// let myLName = myBioData[1];
// let myAge = myBioData[2];

// console.log(myAge);

// let [myFName, myLName, myAge] = myBioData;
// console.log(myFName);
// console.log(myLName);
// console.log(myAge);

// let [myFName, myLName, myAge, myEducation="CS"] = myBioData;
// console.log(myBioData);
// console.log(myEducation);

// const myBioData = {
//     myFName : 'Ajit',
//     myLName : 'Mandal',
//     myAge : 26
// }

// // console.log(myBioData.myAge);

// const {myFName, myLName, myA, myEducation="CS"} = myBioData;
// console.log(myFName);
// console.log(myEducation);

// let myName = 'Ajit';

// const bioData = {
//     [myName] : 'Hello, How are you?',
//     [20+6] : 'is my Age',
// }
// console.log(bioData);

// let myName = 'Ajit';
// let myAge = 26;

// // const bioData = {
// //     myName: myName,
// //     myAge: myAge,
// // }

// const bioData = {myName, myAge};
// console.log(bioData.myName);
// console.log(bioData.myAge);

// const colors = ['red', 'blue', 'green'];
// const myColors = ['red', 'blue', 'green', 'yellow', 'purple'];

// const myNewColors = [...colors, 'yellow', 'purple'];
// console.log(myNewColors);

// const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'pink'];
// const isBlackPresent = colors.includes('black');
// const isPinkPresent = colors.includes('pink');

// console.log(isBlackPresent);
// console.log(isPinkPresent);

// console.log(2**3);

// let name = "Ajit".padStart(7);
// console.log(name);

// let myAge = "26".padEnd(5);
// console.log(`My age is ${myAge} and my name is Ajit`);

// const person = {
//     name: 'Ajit',
//     age: 26
// }
// // console.log(Object.values(person));
// // console.log(Object.entries(person));

// const myPersonArray = Object.entries(person);
// console.log(myPersonArray[0]);
// console.log(myPersonArray[0][0]);
// console.log(myPersonArray[0][1]);
// console.log(myPersonArray[1]);
// console.log(myPersonArray[1][0]);
// console.log(myPersonArray[1][1]);

// const myBioData = {
//     name: 'Ajit',
//     age: 26
// }
// // const myNewBioData = {
// //     name: 'Ajit',
// //     age: 26,
// //     education: 'CS'
// // }
// console.log(myBioData);
// // console.log(myNewBioData);

// const myNewBioData = {...myBioData, education: 'CS Major'};
// console.log(myNewBioData);

// const mulNumbers = function(...theArgs){
//     let mul = 1;
//     for (elements of theArgs){
//         mul *= elements;
//     }
//     return mul;
// }
// console.log(mulNumbers(1, 2, 3));

// const addNumbers = function(a, b){
//     return a+b;
// }
// addNumbers(2,3);
// console.log(addNumbers(2,3));

// const myNewBioData = {
//     name: 'Ajit',
//     age: 26,
//     education: 'CS'
// }

// const myNewArrBioData = Object.entries(myNewBioData);
// const myNewObjBioData = Object.fromEntries(myNewArrBioData);
// console.log(myNewBioData);
// console.log(myNewArrBioData);
// console.log(myNewObjBioData);

// const myNewBioData = {
//     name: 'Ajit',
//     age: 26,
//     education: 'CS'
// }

// const myNewArrBioData = Object.entries(myNewBioData);
// console.log(myNewBioData);
// console.log(myNewArrBioData);

// const myFlattenedArr = myNewArrBioData.flat();
// console.log(myFlattenedArr);

// let oldNum = Number.MAX_SAFE_INTEGER;
// console.log(oldNum);
// console.log(9007199254740991n+12n);
// let newNum = 9007199254740991n + 12n;
// console.log(newNum);
// console.log(typeof(newNum));

// const myNames = {fName: 'Ajit'};

// myNames.fName ??=  'AjitMandal';
// console.log(myNames.fName);

// myNames.lName ??= 'Mandal';
// console.log(myNames.lName);

// function config(options) {
//     options.duration ??= 100;
//     options.speed ??= 25;
//     console.log(options);
//     return options;
// }

//     config({ duration: 125 });
//     config({});
//     console.log(config({}));

// x = 3.14;
// console.log(x);

// "use strict";
// a = 3.14;
// console.log(a);

// const add = (a, b) => {
//     return a + b;
// }

// const sub = (a, b) => {
//     return a - b;
// }

// const mul = (a, b) => {
//     return a * b;
// }

// const calculator = (num1, num2, operator) => {
//     return operator(num1, num2);
// }

// console.log(calculator(2, 3, mul));

// const greet = (name) => {
//     console.log(`Hello ${name}` );
// }

// const displayResult = (greet) => {
//     name = "Ajit";
//     greet(name);
// }

// displayResult(greet);

// function higherOrder(fn) {
//     return function() {
//       console.log("This is from higher-order function");
//     //   fn();
//     };
//   }

//   function sayHello() {
//     console.log("Hello, World!");
//   }

//   const resultFunction = higherOrder(sayHello);
//   resultFunction();

// function display(value){
//   console.log(value);
// };

// function myCalculator(a, b) {
//   c = a + b;
//   return c;
// }

// let result = myCalculator(4, 6);
// display(result);

// function display(value){
//   console.log(value);
// };

// function myCalculator(a, b) {
//   let c = a + b;
//   display(c);
// }

// myCalculator(5, 11);

// function display(value){
//   console.log(value);
// }

// function myCalculator(a, b, myCallback){
//   let c = a + b;
//   myCallback(c);
// }

// myCalculator(3, 6, display());

// let a = "Hello";

// const first = () => {
//   let b = "How are you?"

//   const second = () => {
//     let c = "Hi, I am fine";
//     console.log(a + b + c);
//   }
//   second();
//   console.log(a+b+c);
// }
// first();
// second();
// third();

// const outerFunc = (a) => {
//   let b = 10;
//   const innerFunc = () => {
//     let sum = a + b;
//     console.log(`The sum of the two number is ${sum}`);
//   }
//   return innerFunc;
//   let checkClosure = outerFunc(5);
//   console.log(checkClosure);
// }

// const myDispayer = function(value){
//   console.log(value);
// }

// const myCalculator = function(a, b){
//   return a + b;
// }

// const result = myCalculator(5, 4);
// myDispayer(result);

// function myDispayer(value){
//   console.log(value);
// }

// const myCalculator = function(a, b){
//   let c = a + b;
//   myDispayer(c);
// }

// myCalculator(2, 4);

// function myDispayer(value){
//   console.log(value);
// }

// function myCalculator(a, b, myCallback){
//   let c = a + b;
//   myCallback(c);
// }

// myCalculator(4, 6, myDispayer);

// const promiseOne = new Promise(function(resolve, reject){
//   // Do async task
//   // DB calls, cryptography, network calls
//   setTimeout(function(){
//       console.log('Async task is complete');
//       // resolve();
//       // below code just for practice
//       // console.log('Async tasks is complete');
//   }, 2000)
// });

// promiseOne.then(function(){
//   console.log("Promise Consumed");
// })

// new Promise(function(resolve, reject){
//   setTimeout(function(){
//     console.log("Async Task 2");
//     resolve();
//   }, 1000);
// }).then(function(){
//   console.log("Async 2 resolved");
// })

// const promiseThree = new Promise(function(resolve, reject) {
//   setTimeout(function(){
//     resolve({username: "Ajit", email: "ajit@example.com"})
//   }, 1000)
// })

// promiseThree.then(function(user){
//   console.log(user);
// })

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     // let error = false;
//     if (!error) {
//       resolve({ username: "Ajit", password: "123" });
//     } else {
//       reject("ERROR: Something went wrong");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(() => console.log("Promise is either resolved or rejected"));

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "JS", password: "123" });
//     } else {
//       reject("ERROR: JS went wrong");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive();

// lets practice more:

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     // here response.json() also takes time so use await here
//     const data = await  response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("error");
//   }
// }

// getAllUsers();

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) => {
//   return response.json();
// })
// .then((data) => {
//   console.log(data);
// })
// .catch((error)=>{
//   console.log(error);
// })

// const func2 = () => {
//   console.log("Function 2 is called");
// }

// const func1 = () => {
//   console.log("Function 1 is called");
//   func2();
//   console.log("Function 1 is called again");
// }

// func1();

// const func2 = () => {
//   setTimeout(() => console.log("Function 2 is called"), 1000);
// };

// const func1 = () => {
//   console.log("Function 1 is called");
//   func2();
//   console.log("Function 1 is called again");
// };

// func1();

// let a = sum(5)(3)(8);
// console.log(a);

// function sum(num1){
//   console.log(num1);
//   return function(num2){
//     console.log(num1, num2);
//     return function(num3){
//       console.log(num1, num2, num3);      
//       console.log(num1 + num2 + num3);      
//     }    
//   }  
// }

// sum(5)(3)(8);

// const sum = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3);
// sum(2)(4)(8);

// const user = {
//     userName: "Ajit",
//     logInCount: 5,
//     signedIn: true,
//     getUserDetails: function(){
//         // console.log("Got User Details from Database");
//         // console.log(`Username: ${this.userName}`);
//         console.log(this);           
//     }
// }

// // console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);          
// // Above line gives {} because in global execution context there is nothing right now
// // But if console.log(this) is run in the browser console then it gives Global Execution Context, check yourself          


// // If user2 should be made then it contains different values in such case we need to make constructor

// const promiseOne = new Promise()
// const date = new Date()

// function User(username, logInCount, isLoggedIn){
//     this.username = username;
//     this.logInCount = logInCount;
//     this.isLoggedIn = isLoggedIn;

//     // return this
// }

// const userOne = new User("Ajit", 10, true);
// const userTwo = new User("Mandal", 15, false);
// // Here the value of userOne will be override by userTwo
// console.log(userOne);
// console.log(userTwo);

// function User(username, logInCount, isLoggedIn){
//     this.username = username;
//     this.logInCount = logInCount;
//     this.isLoggedIn = isLoggedIn;

//     // methods can also be used here
//     this.greeting = function(){
//         console.log(`Welcome ${this.username}`);
//     }

//     // if return this is removed then also the value will be returned here
//     return this
// }

// const userOne = new User("Ajit", 20, true);
// console.log(userOne.constructor);

// function multiplyBy5(num){
//     return num*5;
// }

// multiplyBy5.power = 2;

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype); /*gives {} which sets a context*/

// function createUser(username, score){
//     this.username = username;
//     this.score = score;
// }

// createUser.prototype.increment = function(){
//     // the one who calls
//     this.score++;
// }

// createUser.prototype.printMe = function(){
//     console.log(`score is ${this.score}`);    
// }

// // const ram = createUser("Ram", 20); -> This code doesnot work but below code works
// const ram = new createUser("Ram", 20);
// const shyam = new createUser("Shyam", 30);

// ram.printMe();
// ram.printMe();
// ram.printMe();

// /*

// */



// let myName = "Ajit     ";

// // console.log(myName.length);
// // console.log(myName.trim().length);
// console.log(myName.truelength);
// // lets make truelength method by default (or in the prototype list)

// let myHeroes = ["thor", "spiderman", "shaktiman"];

// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// // inserting ajit method in the object so all objects, arrays can access it
// Object.prototype.ajit = function(){
//     console.log(`Ajit is present in all objects`);
    
// }

// Array.prototype.heyAjit = function(){
//     console.log(`Ajit says hello`);;
// }

// // heroPower.ajit()
// myHeroes.ajit();

// heroPower.heyAjit();        // This will not have access of heyAjit
// myHeroes.heyAjit();         // This will have access of heyAjit

// // Inheritance

// const User = {
//     name: "user",
//     email: "ajit@google.ocm"
// }

// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment: 'JS Assignment',
//     fullTime: true,
//     __proto__: TeachingSupport // can access all the codes of TeachingSuppoort
// }

// Teacher.__proto__ = User;

// // modern syntax
// Object.setPrototypeOf(TeachingSupport, Teacher) //TeachingSupport access all properties of Teacher

// let anotherUserName = "AJitMandal       ";

// String.prototype.trueLength = function(){
//     console.log(this);
//     console.log(this.name);
//     console.log(`True length is : ${this.trim().length}`);     
// }

// anotherUserName.trueLength();
// "Ajit".trueLength();
// "HelloSir".trueLength();
// "HelloSir".Length(); -> written just


// function setUserName(username){
//     //complex DB calls
//     this.username = username
//     console.log("Called");
    
// }

// function createUser(username, email, password){
//     setUserName(username)
    // The above line calls the above function but doesnot hold its reference, and set the username here
    // to solve the problem we do the following:
    // setUserName.call(username);
    //The above line also doesnot add username
//     setUserName.call(this, username);


//     this.email = email;
//     this.password = password;

// }

// const ajit = new createUser("ajit", "ajit@gmail.com", "123");
// console.log(ajit);


// console.log("5" + 2 + 3);
// console.log(2 + 3 + "5");

// let x = 5;
// x = 7;
// x = x + x;
// console.log(x);

// let _myName$ = "Ajit";
// console.log(_myName$);

// _myName$ = "Ajit"
// console.log(_myName$);

// let x = 5;
// x+=10;
// console.log(x);
// console.log(y);
// console.log(z);
// console.log(p);
// console.log(r);

// const string = "Hello";
// const number = 10;
// const bigInt = BigInt(25490);
// const isNull = null;
// const isMale = true;
// let helloUser;
// const arr = [2,4,5];
// const obj = {firstName:'Ajit', secondName:'Mandal'};

// console.log(typeof(string));
// console.log(typeof(number));
// console.log(typeof(bigInt));
// console.log(typeof(isNull));
// console.log(typeof(isMale));
// console.log(typeof(helloUser));
// console.log(typeof(arr));
// console.log(typeof(obj));

// const fullName = "ajit" + "mandal";

// console.log(Number.true);
// console.log(Number.false);

              
// console.log(isNaN(10));                 
// console.log(Number.isNaN(10));                 

// console.log(isNaN(NaN));                 
// console.log(Number.isNaN(NaN)); 

// const myName = "Ajit" - "Mandal";
// console.log(myName);
// console.log(typeof(myName));

// const sym1 = Symbol();
// const sym2 = Symbol("foo");
// const sym3 = Symbol("foo");

// console.log(typeof(sym1));
// console.log(typeof(sym2));
// console.log(typeof(sym3));

// console.log(isNaN(true));
// console.log(isNaN(false));

// console.log(isNaN(123));
// console.log(isNaN(-1.23));
// console.log(isNaN(5-2));
// console.log(isNaN(0));

// console.log(isNaN('123'));
// console.log(isNaN('Hello'));
// console.log(isNaN('2005/12/12'));

// console.log(Number.isNaN("Hello"));
// console.log(Number.isNaN(5));
// console.log(Number.isNaN(5-2));
// console.log(Number.isNaN("5a"));

// console.log("Hello");

// console.log(isNaN("Hello"));
// console.log(isNaN(5));
// console.log(isNaN("5a"));


// console.log(isNaN(10));                 
// console.log(Number.isNaN(10));                 

// console.log(isNaN(NaN));                 
// console.log(Number.isNaN(NaN)); 


// const person = {
//     firstName: 'Ajit',
//     age: 28
// }

// const x = person;
// x.age = 25;

// console.log(person);
// console.log("Hello");
// console.log(x);

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
// };

// console.log(person);
// delete person.age;
// console.log(person);

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
// };

// console.log(Object.entries(person));
// console.log(Object.from(person));
// console.log(Object.from(person));

// let string = "Mandal";
// let string2 = "Man";
// console.log(string.charAt(2));
// console.log(string.charCodeAt(2));

// console.log(string.at(3));
// console.log(string[4]);

// console.log(string.at(8));
// console.log(string.charAt(8));
// console.log(string[8]);

// console.log(string[8]);
// console.log(string[9]);
// console.log(string[10]);
// console.log(string[10]);
// console.log(string[11]);
// console.log(string[11]);
// console.log(string[9]);

// console.log(string[-6]);
// console.log(string[-9]);

// console.log(string[-11]);
// console.log(string[-12]);

// console.log(string[-16]);
// console.log(string[-17]);
// console.log(string[-18]);
// console.log(string[-25]);


let p = 0.1;
let pp = 0.2;

let x = 0.1;
let y = 0.2;
let z = (x * 10 + y * 10) / 10;
console.log(z);

































