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

var a = 5;
var b = 10;
console.log(`Before Swapping: a = ${a} & b = ${b}`);
var a = a + b;
var b = a - b;
var a = a - b;
console.log(`After Swapping: a = ${a} & b = ${b}`);
console.log(a);
console.log(b);
console.log(b);



























