// Strings in JS
/* 
    A javascript string is zero or more characters written inside quotes. Javascript strings are used for storing and
    manipulating text. You can use single or double quotes. Strings can be created as primitives from string literals
    or as objects, using the String() constructor.

    let myName = "Ajit Mandal";
    let ytName = new String("Mandal Ajit") //creating string using string constructor
*/

// How to find the length of the string?
// String.prototype.length : Returns the length of the string

// Escape Characters:
    // let anySentence = "We" are "so-called" "Vikings" from the north"; //gives error

    // This will cause error, double quote inside double quote.
    // Backslash Escape Character
    // \' -> Single Quote
    // \" -> Double Quote
    // \\ -> Backslash

    // console.log("Hello I \"am\" a \'from\' my country");

    // If you dont want to mess, simply use the alternate quotes: (Means you can use any no. of double quotes inside single
    // quote and vice-versa)

/*  ********  Finding a string in a string ********   */
/*
    String.prototype.indexOf(SearchValue[,from Index])
    The indexOf() method returns the index of (the position of) the first occurence of a specified text in a string.
*/

    const myBioData = 'I am the Mandal';
    // console.log(myBioData.indexOf("Mandal"));
    // console.log(myBioData.indexOf("t"));

// Javascript counts the position from zero. 0 is the first position in a string, 1 is the second, 
// 2 is the third and so on.

/*
    String.prototype.lastIndexOf(SearchValue[,from Index])
    The lastIndexOf() method returns the index within the calling string object of the last occurence of search value
    , -1 if not found.
*/

const myBioData1 = 'I am the Mandal';
console.log(myBioData1.lastIndexOf("Mandal"));
console.log(myBioData1.lastIndexOf("a"));

/*  ********  Searching a string in a string ********   */
/*
    String.prototype.search(
*/


    
    

    
