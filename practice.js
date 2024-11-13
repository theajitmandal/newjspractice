const arr = [2, 4, 6, 8, 2, 10];

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
console.log(findElem);


// const findElem = arr.find((elem) => elem<8);
// console.log(findElem);

const findElem = arr.find((elem) => elem<=25);
console.log(findElem);

