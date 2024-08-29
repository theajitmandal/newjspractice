/***** Date and Time in JS *****/

/*
    Javascript Date Objects represent a single moment in time in a platform independent format. Date objects contain
    a number that represents milliseconds since 1 January, 1970 UTC

    Creating Date Objects : There are 4 ways to create a new date object.

    01 new Date()
    02 new Date(year, month, day, hours, minutes, seconds, milliseconds) | It takes 7 arguments
    03 new Date(milliseconds) -> we cannot avoid month selection
    04 new Date(dateString)
*/

/* 
    newDate() : Date objects are created with the new Date() constructors.
*/

    // let currDate = new Date();
    // console.log(currDate);

    // console.log(new Date());
    // console.log(new Date().toLocaleString()); // gives date according to the Local Area/Local Country
    // console.log(new Date().toString()); // Standard Date

/* 
    Date.now() : Returns the numeric value corresponding to the current time - the number of milliseconds 
    elapsed since January 1, 1970 00:00:0000 UTC
*/

    // console.log(Date.now());
    // console.log(Date.now);

/* 
    newDate(year, month) : 7 numbers specify year, month, day, hour, minute, second and millisecond (in that order)
    Note: Javascript counts months from 0 to 11.
    January is 0 and December is 11.
*/

    // var d = new Date(2021, 0, 5, 10, 33, 30, 0);
    // console.log(d.toLocaleString()); // gives specified data
    

    // var d = new Date(2021, 0, 5);
    // console.log(d.toLocaleString()); /// also gives time even if it is not set

    // var d = new Date(2021);
    // console.log(d.toLocaleString()); // 01/01/1970, 05:30:02 we get this error if month is not given in new Date() method

/* 
    newDate(date String): It creates a new date object from a date string.    
*/

    // var d = new Date("October 13, 2021 11:13:00")
    // console.log(d);    
    // console.log(d.toLocaleString());  //to solve timing issue add d.toLocaleString()

/* 
    newDate(milliseconds): It creates a new date object as zero time plus millisecond
*/

    // var d = new Date (0); //any millisecond can be passed here
    // console.log(d.toLocaleString());

/***** Dates Method (Only Date) *****/ 
    // const currDate = new Date();

// // How to get the individual date?
//     console.log(currDate.toLocaleString());
//     console.log(currDate.getFullYear());
//     console.log(currDate.getMonth()); //0-11 Jan to Dec
//     console.log(currDate.getDate());
//     console.log(currDate.getDay());


/***** How to set the individual date *****/ 
    // console.log(currDate.setFullYear(2022));
    // console.log(currDate.setFullYear(2022, 10, 5));
    // console.log(currDate.setMonth(10));
    // console.log(currDate.setDate(5));
// above code all gives the same milliseconds


/***** Time Methods *****/ 
//     const currTime = new Date();

// /***** How to get the individual time? *****/ 
//     console.log(currTime.getTime());
//     // The getTime() method returns the number of milliseconds since January 1, 1970.
//     console.log(currTime.getHours());
//     // The getHours() method returns the hours of a date as a number (0-23).
//     console.log(currTime.getMinutes());
//     console.log(currTime.getSeconds());
//     console.log(currTime.getMilliseconds());
    

/***** How to set the individual time? *****/ 
    let currTime = new Date();

    // console.log(currTime.setTime());
    console.log(currTime.setHours(5));
    console.log(currTime.setMinutes(5));
    console.log(currTime.setMilliseconds(5));
// above code all gives NaN
// If the first line console.log(currTime.setTime()); is removed then result is produced


// The following code sets the date, not only gives data in millisecond
    function myFunction(){
        var t = new Date();
        console.log(t.setHours(5));
    }
    myFunction();

// Practice Time: To show only date and time
    console.log(new Date().toLocaleTimeString());
    console.log(new Date().toLocaleDateString());
    console.log(new Date().toLocaleString());
    
    
    
    
    
    
    
    
    
    
    


    
    
    
    


    
    
    
    
    

    

    
    
    
    
    



    
    
    