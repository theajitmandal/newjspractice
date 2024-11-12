// Strings

// Written inside single or double quotes
// For concatenation, use + sign

const name = "Ajit";
const repoCount = 25;

// console.log(name + repoCount + "VALUE"); //not modern concepts so ignore it

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //string interpolation (`` Back Ticks)

// Other ways to define string

const gameName = new String('AjitMan');

console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase); //gives [Function: toUpperCase]
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(0,4);
// // 0 represent from where and 4 represents how many chracters
// // const newString = gameName.substring(-2,4); //doesn't take negative values
// console.log(newString);

const anotherString = gameName.slice(2,5);
// 2 represents from which index and 5 represents upto which index
console.log(anotherString);

const anotherNewString = gameName.slice(-1); //gives the last character of the string
// const anotherNewString = gameName.slice(-2,3); //didn't worked dont know why
console.log((anotherNewString));


const newStringOne = "            Ajit            ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ajit.com/ajit%20mandal";
// url.replace('%20','-'); 
// console.log(url);  //gives error
console.log(url.replace('%20','-'));

console.log(url.includes('ajit'));
console.log(url.includes('country'));


const newPracticeString = "This_is_my_country";
console.log(newPracticeString.split('_'));