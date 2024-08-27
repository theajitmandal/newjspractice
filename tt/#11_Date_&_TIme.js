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

    let currDate = new Date();
    console.log(currDate);

    console.log(new Date());
    console.log(new Date().toLocaleString()); // gives date according to the Local Area/Local Country
    console.log(new Date().toString()); // Standard Date

/* 
    Date.now() : Returns the numeric value corresponding to the current time - the number of milliseconds 
    elapsed since January 1, 1970 00:00:0000 UTC
*/

    console.log(Date.now());
    console.log(Date.now);

/* 
    newDate(year, month) : 7 numbers specify year, month, day, hour, minute, second and millisecond (in that order)
    Note: Javascript counts months from 0 to 11.
    January is 0 and December is 11.
*/



    
    
    