// Dates

// Temporal Proposal is under-development

// let myDate = new Date()
// // check the dates shown in the different formats from 1st January, 1970, UTC in the form of milliseconds
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString()); //same as JSON
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

// console.log(typeof(myDate)); //typeof Date is object

// let myCreatedDate = new Date(2023, 0, 23); //sets date 
// console.log((myCreatedDate.toDateString()));

// let myCreatedNewDate = new Date(2023, 0, 23, 5, 3); //sets date with minutes and seconds
// console.log(myCreatedNewDate.toLocaleString());

// let myCreatedNewDate2 = new Date("2023-01-20"); //dates can be set in this way also
// console.log(myCreatedNewDate2.toLocaleString());

// let myCreatedNewDate3 = new Date("01-18-2023"); //dates can be set in this way also
// console.log(myCreatedNewDate3.toLocaleString());

// let myTimeStamp = Date.now(); //gives current date into milliseconds
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime()); //to convert set date into milliseconds form
// console.log(Date.now()/1000); //gives date in seconds but also gives decimal value so use below code instead
// console.log(Math.floor(Date.now()/1000)); //gives Date in Seconds


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay() + 1);

// `${newDate.getDay()} and the time` -> String Literals can be used for showing dates in different formats

// Ctrl + Space to see the suggestions

newDate.toLocaleString('default', {
    weekday: "long",
    // timeZone: //can also be set
})


