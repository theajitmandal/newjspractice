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
let text = "Apple, banana, Grapes, Orange, Banana, Litchi, Banana";

console.log(text.indexOf("banana"));
console.log(text.lastIndexOf("Banana"));
console.log(text.search("Grapes"));

let newText = text.match("App");
console.log(`The new arrary after match method is ${newText} and its length is ${newText.length}`);

















