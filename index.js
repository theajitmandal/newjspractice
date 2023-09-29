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
let text = "Apple, Banana, Grapes, Orange";

let newtext = text.slice(7);
let newtext1 = text.slice(7,13);
let newtext2 = text.slice(-6);
let newtext4 = text.slice(-14,-8); 






