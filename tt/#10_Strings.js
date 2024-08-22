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

    // const myBioData = 'I am the Mandal';
    // console.log(myBioData.indexOf("Mandal"));
    // console.log(myBioData.indexOf("t"));

// Javascript counts the position from zero. 0 is the first position in a string, 1 is the second, 
// 2 is the third and so on.

/*
    String.prototype.lastIndexOf(SearchValue[,from Index])
    The lastIndexOf() method returns the index within the calling string object of the last occurence of search value
    , -1 if not found.
*/

// const myBioData1 = 'I am the Mandal';
// console.log(myBioData1.lastIndexOf("Mandal"));
// console.log(myBioData1.lastIndexOf("a"));

/*  ********  Searching a string in a string ********   */
/*
    String.prototype.search(regexp) : The search() method searches a string for a specified value and returns
    the position of the match.
*/
    // const myBioData = "I am the Mandal Ajit";
    // let sData = myBioData.search("Mandal");
    // console.log(sData);

    // The search method doesnot take a second start position.

/*  ********  Extracting String Parts ********   */
/*
    There are 3 methods for extracting a part of a string.

    01. Slice(Start, End): The slice() method extracts a part of a string and returns the extracted part in a 
    new string. The method takes 2 parameters : the start position, and the end position (end not compulsory).
*/

    // const str = "Apple, Banana, Kiwi";
    // const res = str.slice(2);
    // console.log(res);
    // console.log(str);    
    // const res1 = str.slice(2, 8);
    // console.log(res1);

/* The slice method selects the element starting at the given start argument and ends at but does not 
    include the given end argument.

    Note: The original array will not be changed.
*/

    // let res2 = str.slice(3, -2); //starts from the 3rd index element of string and removes 2 characters from the end
    // console.log(res2);

// Challenge: Display only 280 characters of a string like the one used in Twitter.

    // let myTweets = "Text will be here"
    // // let myActualTweet = myTweets.slice(0, 280); // doesnot include 280th character but 0th + 279 characters = 280
    // let myActualTweet = myTweets.slice(0, 10);
    // console.log(myActualTweet);

/*
    02. Substring () Method: Substring() is similar to slice(). 
    The difference is that substring() cannot accept negative indexes.
*/

    // const str = "Apple, Banana, Kiwi";
    // const res = str.substring(0, 4);
    // console.log(res);

    // if we give negative value, then the characters are counted from the 0th position.
    // const res = str.substring(8, -2); //means it ingores -2
    // console.log(res);

/*
    03. Substr Method: Substr() method is similar to slice(). The difference is that the second parameter 
    specifies the length of the extracted part.
*/

    // const str = "Apple, Banana, Kiwi";
    // const res = str.substr(2, 8);
    // console.log(res);

    // const res = str.substr(3, -2); //no output
    // console.log(res);
    
    // const res = str.substr(-3); //displays the last 3 characters
    // console.log(res);

/*
    Replacing String Content():

    String.prototype.replace(searchFor, replaceWith): The replace() method replaces a specified value with 
    another value in a string. Replaces only the first match
*/

    // let myBioData = "Hello, I am ajit Mandal from my hometown"
    // let replaceData = myBioData.replace('ajit', 'Ajit');
    // console.log(replaceData);

/* 
    Points to Remember
    01. The replace() method doesnot change the string it is called on. It returns a new string.
    02. By default, the replace() method replaces only the first match.
    03. By default, the replace() method is case sensitive. So, the replace() method returns the string
        without replacing the matches if the search string is given case sensitive.
*/

/*  ********  Extracting String Characters ********   */
/*
    01. charAt(position): The charAt method() returns the character at a specified index(position) in a string.
*/

    // let str = "Hello Javascript";
    // console.log(str.charAt(6));

/*
    02. charCodeAt(position): The charCodeAt method() returns the unicode of the character at a specified index 
                               in a string. The method returns a UTF-16 code (an integer between 0 and 65535)
*/

    let str = "Hello Javascript";
    console.log(str.charCodeAt(6));
    console.log(str.charAt(6));
    
    // The unicode standard provides a unique number for every character, no matter the platform device, application or
    // language. UTF-8 is a popular unicode encoding which has 88-bit code units.

    // Challenge: Return the unicode of the last character of a string.
        let str1 = "mycountryJ";
        console.log(str1.charCodeAt(str1.length-1));

/*
    03. Property Access: ECMAScript 5(2009) allows property access [] on strings.
*/

    let str2 = "Hello World";
    console.log(str2[0]);

    /* Other Useful Methods: */
    

        
    
    
    
    
        
    

    
    
    
    



    
    

    
