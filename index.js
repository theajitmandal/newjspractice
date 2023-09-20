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

const myNumber1 = [2,7,1,8,10,5,3];

// const newArr = myNumber1.map((element) => element*2).filter((element) => element>10);

// console.log(newArr);

const newArray = myNumber1.map((element) => element * 3).filter((element) => element>20);
const newArray2 = myNumber1.map((element) => element * 3).filter((element) => element>20).reduce((accumulator, element, index, array) => accumulator += element);
console.log(newArray);
console.log(newArray2);



