// myNumber1 = [2,7,1,8,10,5,3];

// number2 = myNumber1.sort();
// number3 = myNumber1.reverse();

// console.log(number2);
// console.log(number3);

// console.log(myNumber1.sort());
// console.log(myNumber1.reverse());

//sort cannot sort numbers

//map
// myNumber1 = [2,7,1,8,10,5,3];

// mapMyNumber1 = myNumber1.map((element, index, arrary) => {
//     return element > 5;
// })

// console.log(myNumber1);
// console.log(mapMyNumber1);

// const myNumber1 = [2,7,1,8,10,5,3];

// const newArr = myNumber1.map((element) => element*2).filter((element) => element>10);

// console.log(newArr);

// const newArray = myNumber1.map((element) => element * 3).filter((element) => element>20);
// const newArray2 = myNumber1.map((element) => element * 3).filter((element) => element>20).reduce((accumulator, element, index, array) => accumulator += element);
// console.log(newArray);
// console.log(newArray2);

//splice
// const newNumber = [17, 45, 67, 12, 30];
// const newNumber = ["apple", "banana", "orange", "mango"];

// const myNewNumber = newNumber.splice(2, 1, "grapes", "watermelon");

// console.log(newNumber);
// console.log(myNewNumber);

//slice
// const newNumber = ["apple", "banana", "orange", "mango"];

// const newArr = newNumber.slice(2);

// console.log(newNumber);
// console.log(newArr);

//forEach & map
// const newNumber = [17, 45, 67, 12, 30];

// const newNumber1 = newNumber.forEach(myFunction);

// function myFunction(element, index, array){
//     return element*2;
// }

// const newNumber1 = newNumber.forEach((element) => element*2);
// const newNumber2 = newNumber.map((element) => element*2);

// console.log(newNumber1);
// console.log(newNumber2);

//filter
// const filterArrary = newNumber.filter((element) => element > 50);
// console.log(filterArrary);

//reduce
// const reduceArray = newNumber.reduce((accumulator, element) => accumulator += element);
// console.log(reduceArray);

// console.log(newNumber.map((element) => element*2).filter((element) => element>50).reduce((acc, element) => acc += element));

//escape character

// let text = "Hello I am \"Ajit\" from \' Itahari I \\ am coming kathmandu";

// console.log(text);

//slice
// let text = "Apple, Banana, Grapes, Orange";

// let newtext = text.slice(7);
// let newtext1 = text.slice(7,13);
// let newtext2 = text.slice(-6);
// let newtext4 = text.slice(-14,-8); 

//substring
// let newtext5 = text.substring(4,8);
// let newtext6 = text.substring(-4,-9); //doestnot take negative values and this variable prints blank

// //substr
// let newtext7 = text.substr(7, 6);

// console.log(newtext);
// console.log(newtext1);
// console.log(newtext2);
// console.log(newtext4);
// console.log(newtext5);
// console.log(newtext6); //prints nothing blank
// console.log(newtext7);

//replace
// let text = "Apple, banana, Grapes, Orange, Banana, Litchi, Banana";

// let newText = text.replace("Banana", "Litchi");
// let newText1 = text.replace(/BANANA/i, "Litchi");
// let newText2 = text.replace(/Banana/g, "Pomegranate"); //combine two RE use /BANANA/gi

// console.log(newText);
// console.log(newText1);
// console.log(newText2);

//split -> converting strings into Arrays
// let text = "Apple, banana, Grapes, Orange, Banana, Litchi, Banana";

// let newText = text.split(","); //splits at comma
// let newText1 = text.split(" "); //splits at space
// let newText2 = text.split("|"); //splits at pipe
// let newText3 = text.split(""); //splits into array of single character
// let newText4 = text.split(); //if separator is ommitted then the whole string is in index[0]

// console.log(newText);
// console.log(newText1);
// console.log(newText2);
// console.log(newText3);
// console.log(newText4);

//string search
// let text = "Apple, banana, Grapes, Orange, Banana, Litchi, Banana";

// console.log(text.indexOf("banana"));
// console.log(text.lastIndexOf("Banana"));
// console.log(text.search("Grapes"));

// let newText = text.match("App");
// console.log(`The new arrary after match method is ${newText} and its length is ${newText.length}`);

//bitwise
// let x = 5;
// let y = 1;
// console.log(x & y);


// try{
//     consolle.log("This is error");
// }
// catch(err){
//     console.log(err);
// }

// let x = 123.42567;
// let m = 123.42567;
// let y = x.toString();

// console.log(x);
// console.log(typeof(y));

// let z = x.toExponential(2);
// console.log(z);

// let p = x.toFixed(3);
// console.log(p);

// let q = x.toPrecision(4);
// console.log(q);

// //run and check gives error may be important for interview
// let r = m.toPrecision(2);
// console.log(r);



//dates

// let d = new Date(); //converts into string automatically if displayed in html
// let f = d.toString();
// let g = d.toDateString();
// let h = d.toISOString();
// let i = d.toUTCString();

// console.log(d);
// console.log(f);
// console.log(g);
// console.log(h);
// console.log(i);

// let currDate = new Date();
// console.log(currDate);
// console.log(currDate.toLocaleString());
// console.log(currDate.toString());

// let d = new Date(0);
// console.log(d.toLocaleString());

// console.log(new Date().toLocaleTimeString());
// console.log(new Date().toLocaleDateString());
// console.log(new Date().toLocaleString());


// let x = 123.42567;
// let m = 123.42567;
// let y = x.toString();

// console.log(x);
// console.log(typeof(y));

// let z = x.toExponential(2);
// console.log(z);

// let p = x.toFixed(3);
// console.log(p);

// let q = x.toPrecision(4);
// console.log(q);

// //run and check gives error may be important for interview
// let r = m.toPrecision(2);
// console.log(r);

// let x = 123.42567;
// let m = 123.42567;
// let y = x.toString();

// console.log(x);
// console.log(typeof(y));

// let z = x.toExponential(2);
// console.log(z);

// let p = x.toFixed(3);
// console.log(p);

// let q = x.toPrecision(4);
// console.log(q);

//replace
// let text = "Apple, banana, Grapes, Orange, Banana, Litchi, Banana";

// let newText = text.replace("Banana", "Litchi");
// let newText1 = text.replace(/BANANA/i, "Litchi");
// let newText2 = text.replace(/Banana/g, "Pomegranate"); //combine two RE use /BANANA/gi

// console.log(newText);
// console.log(newText1);
// console.log(newText2);

//string search
// let text = "Apple, banana, Grapes, Orange, Banana, Litchi, Banana";

// console.log(text.indexOf("banana"));
// console.log(text.lastIndexOf("Banana"));
// console.log(text.search("Grapes"));

//bitwise
// let x = 5;
// let y = 1;
// console.log(x & y);

// let currDate = new Date();
// console.log(currDate);
// console.log(currDate.toLocaleString());
// console.log(currDate.toString());


//slice
// let text = "Apple, Banana, Grapes, Orange";

// let newtext = text.slice(7);
// let newtext1 = text.slice(7,13);
// let newtext2 = text.slice(-6);
// let newtext4 = text.slice(-14,-8); 

//split -> converting strings into Arrays
// let text = "Apple, banana, Grapes, Orange, Banana, Litchi, Banana";

// let newText = text.split(","); //splits at comma
// let newText1 = text.split(" "); //splits at space
// let newText2 = text.split("|"); //splits at pipe
// let newText3 = text.split(""); //splits into array of single character
// let newText4 = text.split(); //if separator is ommitted then the whole string is in index[0]

// numbers1 = [45, 10, 2, 9, 15];

// console.log(numbers1.filter((element) => element > 5));



// numbers = [2, 3, 4, 5, 6, 1];

// console.log(numbers.map((element) => element > 5))

// numbers2 = numbers1.find((currVal) => {
//     return currVal > 5;
// });

// console.log(numbers2);

// numbers2 = numbers1.find((currVal) => currVal < 10);

// console.log(numbers1.find((element) => element < 5));

// console.log(numbers2);

// numbers1 = [45, 10, 2, 9, 15];

// const numbers2 = numbers1.find(myFunction);

// function myFunction(element, index, arrary){
//     return element > 12;
// }

// console.log(numbers2);

//checking leap year or not

// var year = 2000;
// debugger;
// if (year % 4 === 0) {
//   if (year % 100 === 0) {
//     if (year % 400 === 0) {
//       console.log("The year " + year + " is a leap year");
//     } else {
//       console.log("The year " + year + " is not a leap year");
//     }
//   } else {
//     console.log("The year " + year + " is a leap year");
//   }
// } else {
//   console.log("The year " + year + " is not a leap year");
// }

//map
// myNumber1 = [2,7,1,8,10,5,3];

// mapMyNumber1 = myNumber1.map((element, index, arrary) => {
//     return element > 5;
// })

//splice
// let newNumber = [17, 45, 67, 12, 30];
// let newNumber1 = ["apple", "banana", "orange", "mango"];

// const myNewNumber = newNumber.splice(2, 1, "grapes", "watermelon");

//slice
// let text = "Apple, Banana, Grapes, Orange";

// let newtext = text.slice(7);
// let newtext1 = text.slice(7,13);
// let newtext2 = text.slice(-6);
// let newtext4 = text.slice(-14,-8); 


//escape character

// let text = "Hello I am \"Ajit\" from \' Itahari I \\ am coming kathmandu";

// console.log(text);

//slice
// let text = "Apple, Banana, Grapes, Orange";

// // let newtext = text.slice(7);
// // let newtext1 = text.slice(7,13);
// // let newtext2 = text.slice(-6);
// // let newtext4 = text.slice(-14,-8); 

// //substring
// let newtext5 = text.substring(4,8);
// let newtext6 = text.substring(-4,-9); //doestnot take negative values and this variable prints blank

// //substr
// let newtext7 = text.substr(7, 6);

// console.log(newtext5);
// console.log(newtext6);
// console.log(newtext7);

//17th Ashoj 2080
//this
// var myNames = 'Ajit';
// function myName(){
//     console.log(this.myNames);
// }
// myName();


//more examples on this
// const obj = {
//     myAge : 26,
//     myName : () => {
//         console.log(this);
//     }
// }
// obj.myName(); ///gives {}

//code practice from previous files
//data types

// let length = 5;
// let myName = 'Ajit';
// let x = BigInt(123456789789456123456987);
// let y = true;
// let c;
// let d = "";
// let cars = ["Suzuki", 'Maruti', 'BMW']
// let student = {firstName: 'Ait', lastName: 'Mandal'};

// console.log(typeof(length));
// console.log(typeof(myName));
// console.log(typeof(x));
// console.log(typeof(y));
// console.log(typeof(c));
// console.log(typeof(d));
// console.log(typeof(cars));
// console.log(typeof(student));

// let myPhone = 9804064652;
// let myName = 'Ajit Mandal';

// console.log(isNaN(myPhone));
// console.log(isNaN(myName));

// console.log(Number.);

// let myPhone = 'Ajit';
// let myPhone = 98;

// if(isNaN(myPhone)){
//     console.log("Print give a valid number");
// }

// let num = 20;
// let newNum = num++;
// console.log(num);;
// console.log(newNum);

// let num = 20;
// let newNum = ++num;
// console.log(num);;
// console.log(newNum);

// console.log(10**-1);

//swapping two numbers
// var a = 5;
// var b = 6;

// var c = a + b;
// var a = b;
// var b = c - a;

// console.log("The value of a is: " + a  + " and the value of b is: " + b);

//checking leap year or not

// var year = 2000;
// debugger;
// if (year % 4 === 0) {
//   if (year % 100 === 0) {
//     if (year % 400 === 0) {
//       console.log("The year " + year + " is a leap year");
//     } else {
//       console.log("The year " + year + " is not a leap year");
//     }
//   } else {
//     console.log("The year " + year + " is a leap year");
//   }
// } else {
//   console.log("The year " + year + " is not a leap year");
// }

//fasly values : o, "", undefined, null, NaN, false
// if(undefined){
//     console.log("OMG, we loss the game");
// }else{
//     console.log("Yay, we won the game");
// }

//conditional ternary operators

// var age = 10;

// (age >= 18) ? console.log("You can vote") : console.log("You cannot vote");

// var age = 10 

//multiplication table using loop
// for(i=1; i<=10; i++){
//     var x = 5;
//     console.log(x + " x " + i + " = " + i*x);
// }

// //same as above
// for(i=1; i<=10; ++i){
//     var x = 5;
//     console.log(x + " x " + i + " = " + i*x);
// }

// var x = 7 < 5;
// var y = 10;

// console.log(Boolean(x));
// console.log(Boolean(y));

//function expression
// function sum(a,b){
//     var total = a + b;
//     console.log(total);
// }

// var funcExp = sum(4,5);
// funcExp;

// console.log(funcExp);

// function sum(a,b){
//     return total = a + b;
// }

// var funxExp = sum(2,4);
// console.log(funxExp);

// var funExp = function(a, b){
//     return a+b;
// }

// console.log(funExp(3,6));


//template literals

// var a = 5;

// for(i=0; i<=10; i++){
//     console.log(`Table of ${a} * ${i} = ${a*i}`);
// }

//fat arrow function

// const sum = () => {
//     let a = 5; b = 6;
//     let sum = a + b;
//     return `The sum of two number is ${sum}`;
// }

// console.log(sum());

// const sum = () => `The sum of two number is ${(a=3)+(b=7)}`;

// console.log(sum());


// const mul = () => {
//     return `The multiplication of two numbers is ${(a=5)*(b=8)}`;
// }

// const mul = (a, b) => a * b;
// console.log(mul(2,3))


// const hello = val => "Hello " + val;

// console.log(hello(5));

//arrays
// const bikes = ['pulsar', 'yamaha', 'hero', 'honda', 'ktmduke'];

// console.log(bikes.length);
// console.log(bikes[0])
// console.log(bikes[bikes.length-1]);
// console.log(bikes.toString());

// for (let x of bikes){
//     console.log(x);
// }

// console.log(bikes.toString());
// console.log(bikes.join("#"));

//forEach
// const myFriend = ["Rupesh", "Manish", "Shyam", "RamBabu", "Deepak"];
// const x = 20;

// let txt = "";
// myFriend.forEach(myFunction);

// function myFunction(element, index, array){
//     txt += element + " ";
// }

// console.log(txt);

//checking for array or not
// console.log(Array.isArray(myFriend));
// console.log(myFriend instanceof Array);
// console.log(Array.isArray(x));
// console.log(x instanceof Array);


// const myNumber = [20, 30, 40, 50, 60, 70];

// console.log(myNumber.length);
// console.log(toString(myNumber)); //number element vayeko array gives undefined if used toString
// console.log(myNumber.join("&"));
// delete myNumber[3];
// console.log(myNumber);

// myNumber.pop();
// console.log(myNumber);
// console.log(myNumber.pop());

// myNumber.push(80);
// console.log(myNumber);
// console.log(myNumber.push());

// myNumber.shift();
// console.log(myNumber);
// console.log(myNumber.shift());

// myNumber.unshift(80);
// console.log(myNumber);
// console.log(myNumber.unshift());

// const number1 = [2,3,4];
// const number2 = [5,6,7];

// const number3 = number1.concat(number2);
// console.log(number3);

// const myArr = [[1,2], [3,4], [5,6]];
// const newArr = myArr.flat();
// console.log(newArr);

// const myNumber = [20, 30, 40, 50, 60, 10];

// myNumber.splice(2,1, 100, 120);
// myNumber.splice(3,0,150);
// myNumber.splice(myNumber.length,0,200,300);
// console.log(myNumber);

// console.log(myNumber.slice(2));
// console.log(myNumber.slice(1,4));

// myNumber.sort(function(a, b){return a - b});
// myNumber.sort(function(a,b) {return b - a});
// console.log(myNumber);

// console.log(Math.max.apply(null, myNumber));
// console.log(Math.min.apply(null, myNumber));

// numbers1 = [45, 10, 2, 9, 15];
// numbers2 = numbers1.map(myFunction);

// function myFunction(element, index, array){
//     return element*2;
// }
// console.log(numbers2);

// numbers1 = [45, 10, 2, 9, 15];
// numbers2 = numbers1.flatMap((x) => x*3);
// console.log(numbers2);

// numbers1 = [45, 10, 2, 9, 15];
// numbers2 = numbers1.filter(myFunction);

// function myFunction(element, index, array){
//     return element > 12;
// }
// console.log(numbers2);

// numbers1 = [45, 10, 2, 9, 15];
// numbers2 = numbers1.reduce(myFunction);

// function myFunction(total, value, index, array){
//     return total += value;
// }
// console.log(numbers2);

//every
// numbers1 = [45, 10, 2, 9, 15];
// numbers2 = numbers1.every(myFunction);

// function myFunction(element, index, array){
//     return element > 12;
// }
// console.log(numbers2);

//some
// numbers1 = [45, 10, 2, 9, 15];
// numbers2 = numbers1.some(myFunction);

// function myFunction(element, index, array){
//     return element > 12;
// }
// console.log(numbers2);



// var myFriends = ["manish", "rupesh", "suman", "bikash", "saroj", "suman"];

// console.log(myFriends.indexOf("rupesh"));
// console.log(myFriends.indexOf("rupesh", 2));

// console.log(myFriends.lastIndexOf("suman"));
// console.log(myFriends.lastIndexOf("suman", 4));

// console.log(myFriends.includes("saroj"));
// console.log(myFriends.includes("bikashs"));

// const num1 = [2, 3, 4, 6];
// const num2 = [7, 1, 9, 5];

// const num3 = [...num1, ...num2];
// console.log(num3);


// numbers1 = [45, 10, 2, 9, 15];

// const numbers2 = numbers1.find(myFunction);

// function myFunction(element, index, arrary){
//     return element > 12;
// }

// console.log(numbers2);

// numbers2 = numbers1.find((currVal) => {
//     return currVal > 5;
// });

// console.log(numbers2);

// numbers2 = numbers1.find((currVal) => currVal < 10);

// console.log(numbers1.find((element) => element < 5));

// console.log(numbers2);


// numbers1 = [45, 10, 2, 9, 15];

// console.log(numbers1.filter((element) => element > 5));



// numbers = [2, 3, 4, 5, 6, 1];

// console.log(numbers.map((element) => element > 5))


//previoud file practice code
//data types

// let length = 5;
// let myName = 'Ajit';
// let x = BigInt(123456789789456123456987);
// let y = true;
// let c;
// let d = "";
// let cars = ["Suzuki", 'Maruti', 'BMW']
// let student = {firstName: 'Ait', lastName: 'Mandal'};

// console.log(typeof(length));
// console.log(typeof(myName));
// console.log(typeof(x));
// console.log(typeof(y));
// console.log(typeof(c));
// console.log(typeof(d));
// console.log(typeof(cars));
// console.log(typeof(student));

// let myPhone = 9804064652;
// let myName = 'Ajit Mandal';

// console.log(isNaN(myPhone));
// console.log(isNaN(myName));

// console.log(Number.);

// let myPhone = 'Ajit';
// let myPhone = 98;

// if(isNaN(myPhone)){
//     console.log("Print give a valid number");
// }

// let num = 20;
// let newNum = num++;
// console.log(num);;
// console.log(newNum);

// let num = 20;
// let newNum = ++num;
// console.log(num);;
// console.log(newNum);

// console.log(10**-1);

//swapping two numbers
// var a = 5;
// var b = 6;

// var c = a + b;
// var a = b;
// var b = c - a;

// console.log("The value of a is: " + a  + " and the value of b is: " + b);

//checking leap year or not

// var year = 2000;
// debugger;
// if (year % 4 === 0) {
//   if (year % 100 === 0) {
//     if (year % 400 === 0) {
//       console.log("The year " + year + " is a leap year");
//     } else {
//       console.log("The year " + year + " is not a leap year");
//     }
//   } else {
//     console.log("The year " + year + " is a leap year");
//   }
// } else {
//   console.log("The year " + year + " is not a leap year");
// }

//fasly values : o, "", undefined, null, NaN, false
// if(undefined){
//     console.log("OMG, we loss the game");
// }else{
//     console.log("Yay, we won the game");
// }

//conditional ternary operators

// var age = 10;

// (age >= 18) ? console.log("You can vote") : console.log("You cannot vote");

// var age = 10 

//multiplication table using loop
// for(i=1; i<=10; i++){
//     var x = 5;
//     console.log(x + " x " + i + " = " + i*x);
// }

// //same as above
// for(i=1; i<=10; ++i){
//     var x = 5;
//     console.log(x + " x " + i + " = " + i*x);
// }

// var x = 7 < 5;
// var y = 10;

// console.log(Boolean(x));
// console.log(Boolean(y));

//function expression
// function sum(a,b){
//     var total = a + b;
//     console.log(total);
// }

// var funcExp = sum(4,5);
// funcExp;

// console.log(funcExp);

// function sum(a,b){
//     return total = a + b;
// }

// var funxExp = sum(2,4);
// console.log(funxExp);

// var funExp = function(a, b){
//     return a+b;
// }

// console.log(funExp(3,6));


//template literals

// var a = 5;

// for(i=0; i<=10; i++){
//     console.log(`Table of ${a} * ${i} = ${a*i}`);
// }

//fat arrow function

// const sum = () => {
//     let a = 5; b = 6;
//     let sum = a + b;
//     return `The sum of two number is ${sum}`;
// }

// console.log(sum());

// const sum = () => `The sum of two number is ${(a=3)+(b=7)}`;

// console.log(sum());


// const mul = () => {
//     return `The multiplication of two numbers is ${(a=5)*(b=8)}`;
// }

// const mul = (a, b) => a * b;
// console.log(mul(2,3))


// const hello = val => "Hello " + val;

// console.log(hello(5));

//arrays
// const bikes = ['pulsar', 'yamaha', 'hero', 'honda', 'ktmduke'];

// console.log(bikes.length);
// console.log(bikes[0])
// console.log(bikes[bikes.length-1]);
// console.log(bikes.toString());

// for (let x of bikes){
//     console.log(x);
// }

// console.log(bikes.toString());
// console.log(bikes.join("#"));

//forEach
// const myFriend = ["Rupesh", "Manish", "Shyam", "RamBabu", "Deepak"];
// const x = 20;

// let txt = "";
// myFriend.forEach(myFunction);

// function myFunction(element, index, array){
//     txt += element + " ";
// }

// console.log(txt);

//checking for array or not
// console.log(Array.isArray(myFriend));
// console.log(myFriend instanceof Array);
// console.log(Array.isArray(x));
// console.log(x instanceof Array);


// const myNumber = [20, 30, 40, 50, 60, 70];

// console.log(myNumber.length);
// console.log(toString(myNumber)); //number element vayeko array gives undefined if used toString
// console.log(myNumber.join("&"));
// delete myNumber[3];
// console.log(myNumber);

// myNumber.pop();
// console.log(myNumber);
// console.log(myNumber.pop());

// myNumber.push(80);
// console.log(myNumber);
// console.log(myNumber.push());

// myNumber.shift();
// console.log(myNumber);
// console.log(myNumber.shift());

// myNumber.unshift(80);
// console.log(myNumber);
// console.log(myNumber.unshift());

// const number1 = [2,3,4];
// const number2 = [5,6,7];

// const number3 = number1.concat(number2);
// console.log(number3);

// const myArr = [[1,2], [3,4], [5,6]];
// const newArr = myArr.flat();
// console.log(newArr);

// const myNumber = [20, 30, 40, 50, 60, 10];

// myNumber.splice(2,1, 100, 120);
// myNumber.splice(3,0,150);
// myNumber.splice(myNumber.length,0,200,300);
// console.log(myNumber);

// console.log(myNumber.slice(2));
// console.log(myNumber.slice(1,4));

// myNumber.sort(function(a, b){return a - b});
// myNumber.sort(function(a,b) {return b - a});
// console.log(myNumber);

// console.log(Math.max.apply(null, myNumber));
// console.log(Math.min.apply(null, myNumber));

// numbers1 = [45, 10, 2, 9, 15];
// numbers2 = numbers1.map(myFunction);

// function myFunction(element, index, array){
//     return element*2;
// }
// console.log(numbers2);

// numbers1 = [45, 10, 2, 9, 15];
// numbers2 = numbers1.flatMap((x) => x*3);
// console.log(numbers2);

// numbers1 = [45, 10, 2, 9, 15];
// numbers2 = numbers1.filter(myFunction);

// function myFunction(element, index, array){
//     return element > 12;
// }
// console.log(numbers2);

// numbers1 = [45, 10, 2, 9, 15];
// numbers2 = numbers1.reduce(myFunction);

// function myFunction(total, value, index, array){
//     return total += value;
// }
// console.log(numbers2);

//every
// numbers1 = [45, 10, 2, 9, 15];
// numbers2 = numbers1.every(myFunction);

// function myFunction(element, index, array){
//     return element > 12;
// }
// console.log(numbers2);

//some
// numbers1 = [45, 10, 2, 9, 15];
// numbers2 = numbers1.some(myFunction);

// function myFunction(element, index, array){
//     return element > 12;
// }
// console.log(numbers2);



// var myFriends = ["manish", "rupesh", "suman", "bikash", "saroj", "suman"];

// console.log(myFriends.indexOf("rupesh"));
// console.log(myFriends.indexOf("rupesh", 2));

// console.log(myFriends.lastIndexOf("suman"));
// console.log(myFriends.lastIndexOf("suman", 4));

// console.log(myFriends.includes("saroj"));
// console.log(myFriends.includes("bikashs"));

// const num1 = [2, 3, 4, 6];
// const num2 = [7, 1, 9, 5];

// const num3 = [...num1, ...num2];
// console.log(num3);


// numbers1 = [45, 10, 2, 9, 15];

// const numbers2 = numbers1.find(myFunction);

// function myFunction(element, index, arrary){
//     return element > 12;
// }

// console.log(numbers2);

// numbers2 = numbers1.find((currVal) => {
//     return currVal > 5;
// });

// console.log(numbers2);

// numbers2 = numbers1.find((currVal) => currVal < 10);

// console.log(numbers1.find((element) => element < 5));

// console.log(numbers2);


// numbers1 = [45, 10, 2, 9, 15];

// // console.log(numbers1.filter((element) => element > 5));
// console.log("This all are the code of previous practice");

// Create and display a variable:
// let person = "John Doe";
// console.log(person);

// const person = {
//     firstName : "John",
//     lastName  : "Doe",
//     age     : 50,
//     eyeColor  : "blue"
//   };

//   console.log(person.firstName);
//   console.log(person.firstName + " is " + person.age + " years old.");
//   console.log(person.lastName);
//   person.age = 20;
//   console.log(person.age);
//   person.fathername = "Manoj";
//   console.log(person.fathername);

//   console.log(`My eye color is ${person.eyeColor}`);

//array destructuring
// const myBioData = ['Ajit', 'Mandal', 26];

// let myName = myBioData[0];
// let myLName = myBioData[1];
// let myAge = myBioData[2];

// console.log(myName);

// let [myFName, myLName, myAge, myDegree = 'BSc. CSIT'] = myBioData;
// console.log(myAge);
// console.log(myDegree);

// const person = {
//     firstName : "John",
//     lastName  : "Doe",
//     age     : 50,
//     eyeColor  : "blue"
//   };

//   let {myName, lastName, age, eyeColor} = person;
//   console.log(lastName);

// let firstColor = "blue";
// let secondColor = "green";

// const color = {
//   firstColor : firstColor,
//   secondColor : secondColor
// }

//if above key and value are both same then
// const color = {firstColor, secondColor}; 

// console.log(color.firstColor);
// console.log(color.secondColor);


//spread operator

// const colors = ['red', 'green', 'blue', 'white'];
// const myColors = [...colors, 'yellow', 'black'];

// console.log(myColors);

//higher order and callback
// const fruits = (fruit1, fruit2 ) => {
//   console.log(`My favourite fruit number is ${fruit1} and second favourite number fruit is ${fruit2}`);
// }

// const animal = (animal1, animal2) => {
//   console.log(`My favourite animal number is ${animal1} and second favourite animal number is ${animal2}`);
// }

// const printData = (x, y, callback) => {
//   return callback(x, y);
// }

// printData(2, 5, fruits);
// printData(3,7, animal);

//hoisting
// console.log(myName);
// var myName;
// myName = "Ajit";

//hoisting is avoided using let and const, so below code gives error
// console.log(myName);
// let myName;
// myName = "Mandal";

// console.log(myNames);
// const myNames;
// myNames = "AJitMandal"


//asynchronous JS

// const func2 = () => {
//   setTimeout(() => {
//     console.log("Function 2 is called")
//   }, 3000);
// }

// const func1 = () => {
//   console.log("Function 1 is called");
//   func2();
//   console.log("Function 1 is called again");
// }

// func1(); 

//function currying
// function sum(num1){
//   // console.log(num1);
//   return function(num2){
//     // console.log(num1, num2);
//     return function(num3){
//       // console.log(num1, num2, num3);
//       console.log(num1 + num2 + num3);
//     }
//   }
// }

// sum(3)(4)(5);

// const sum = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3);

// sum(4)(5)(6);

// const person = {
//     firstName : "John",
//     lastName  : "Doe",
//     age     : 50,
//     eyeColor  : "blue"
//   };

//   console.log(person.firstName);
//     console.log(person.firstName + " is " + person.age + " years old.");
//   console.log(person.lastName);
//   person.age = 20;
//   console.log(person.age);
//   person.fathername = "Manoj";
//   console.log(person.fathername);

  // const person = {
  //   firstName : "John",
  //   lastName  : "Doe",
  //   age     : 50,
  //   eyeColor  : "blue"
  // };

  // console.log(person.firstName);
  //   console.log(person.lastName);

    // numbers1 = [45, 10, 2, 9, 15];
// numbers2 = numbers1.flatMap((x) => x*3);
// console.log(numbers2);


//array destructuring
const myBioData = ['Ajit', 'Mandal', 26, 'Itahari'];

let myName = myBioData[0];
let myLName = myBioData[1];
let myAge = myBioData[2];
let myHome = myBioData[3];

console.log(myName);

let hisName = myBioData[3];
console.log(hisName);
console.log(myLName);
console.log(myAge);
console.log(`My name is ${myName} and my age is ${myAge}`);
console.log(`My name is ${myName} and my age is ${myAge} and my lastname is ${myLName}`);
console.log(`My name is ${myName} and my age is ${myAge} and my lastname is ${myLName} and my home is ${myHome}`);
console.log(`My name is @${myName}`);
console.log(`Hello, I am Ajit Mandal`);
console.log(`Hello Man`);
console.log(`Hello, I am a programmer`);
console.log(`Hey Programmer`);
console.log('Hello, I am a programmer');
console.log(`Hey, I wan to become a programmer`);
console.log(`Hello World, My name is ........`);
console.log(`Hello Programming World`);
console.log(`Hello, welcome to the world of the programming`);
console.log(`Hello Programmers`);
console.log(`Hello World of Programming`);
console.log(`Hello World, I am a programmer`);
console.log(`Hello World`);
console.log(`Hello, Programmers, How are you?`);
console.log(`Programming, Coding and Development`);
console.log(`I am ${myName}`);
console.log(`Javascript, Python, AI`);
console.log(`I am learning Javascript`);

console.log(`I am ${myName}`);


console.log(`I am Ajit`);
console.log(`I am AJit Mandal`);
console.log(`I am a programmer`);
console.log(`Hello Programmers`);

console.log(`I want to become a programmer`);
console.log(`I want to become programmer`);
console.log(`Hello Porgrammers`);
console.log(`Hello I want to become a programmer`);
console.log(`Hello Programmers`);
console.log(`Hello Programmers`);
console.log(`I want to become programmer`);
console.log(`Javascript, Python, AI`);

console.log(`I am learning Javascript`)
console.log(`Hello Porgrammers`);
console.log(`Hello Porgrammers`);

console.log(`I am learning Javascript`)

console.log(`I am AJit Mandal`);

console.log(`Javascript, Python, AI`);

console.log(`Javascript, Python, AI`);

console.log(`Hello Programmers`);


console.log(`Hello Programmers`);

const myBioDatas = ['Ajit', 'Mandal', 26, 'Itahari'];

console.log(`Hello I want to become a programmer`);


console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

//const myBioDatas = ['Ajit', 'Mandal', 26, 'Itahari'];

const myBioDatass = ['Ajit', 'Mandal', 26, 'Itahari'];


console.log(`Hello I want to become a programmer`);

console.log(`Hello I want to become a programmer`);

console.log(`Hello Programmers`);


console.log(`I am learning Javascript`);

console.log("Enter your name");
console.log("Enter your name and age");

console.log("Enter your name and age");

console.log(`I am learning Javascript`)

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);
console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);


console.log(`Hello Programmers`);

console.log(`Hello Programmers`);

console.log(`Hello Programmers`);

console.log(`Hello Programmers`);

console.log(`Hello Programmers`);

console.log(`Hello Programmers`);

console.log(`Hello Programmers`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);


console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);


console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);

console.log(`I am learning Javascript`);















