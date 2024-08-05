/* ********** Arrays **********
 When we use var, we can store only one value at a time. When we feel like storing multiple values in one variable
 then instead of var, we will use an array. In JS, we ave an Array class and arrays are the prototype of this class.
 
 In JS, arrays can store any data types to a same variable.

 var myFriends = new Array; //this is optional in JS, JS indentifies array through square brackets []
//  var myFriends = ['ramesh', '22', 'male', 'true', 'Sohan'];

 var names = ['vinod', 'bahadur', 'thapa', 'ramesh'];
  Indexes ->    0         1         2          3
            Lower Index   Elements of Array     Upper Index
            Lower Boundary                      Upper Boundary

Traversal of an Array
~ Navigate through an array
~ If we want to get the single data at a time and also if we want to change the data

var myFriends = ['vinod', 'ramesh', 'arjun', 'vishal'];
To display data,
    console.log(myFrineds[1]) -> shows vinod
    console.log(myFrineds[2]) -> shows ramesh

If we wan to check the length of elements of an array:
    console.log(myFriends.length)'  -> 4

To show the last data:
    console.log(myFriends[myFriends.length-1]);

We use for loop to navigate through the each elements of an array
 */

// Example:
// Tranditional Looping Method:

    var myFriends = ['vinod', 'ramesh', 'arjun', 'ramesh', 'vishal'];
    // for(i=0; i<=myFriends.length-1; i++){
    //     console.log(myFriends[i]);    
    // }

// After ES6, we have FOR...IN and FOR...OF loop
// FOR...IN ~ displays the index no. of arrays
    // for(let elements in myFriends){
    //     console.log(elements);    
    // }

// FOR...OF ~ displays all the elements of an array
    // for(let elements of myFriends){
    //     console.log(elements);    
    // }

// FOR...EACH LOOP ~ Calls a function for each element in an array

    // myFriends.forEach(function(element, index, array){
    //     console.log(element); //displays the elements of an array
    //     console.log(index); //displays the index no of arrays
    //     console.log(array); //displays the whole array
    // }, this);

    // In the above code this is optional, element represents elements of array, index represents index numbers
    // and array represents array

    // Or, using the fat arrow function
    myFriends.forEach((element, index, array) => {
        console.log(element + " index: " + index + " " + array);  
    })

    // FOR...EACH cannot break in the middle, starts with the 1st data and goes upto the last data

    // Example: Program using FOR...EACH to increase each element of an array by 5
    let newNum = [4, 6, 7, 8];
    // newNum.forEach(function(element, index, array){
    //     console.log(element = element + 5);        
    // }, this);

    // OR, can be done in the following ways too...
    // let oneNum = [7, 9, 1, 6];
    // let myFunction = (element, index, array) => {
    //     array[index] = element + 5;
    // }
    // oneNum.forEach(myFunction);
    // console.log(oneNum);

// Searching and Filtering in an Array
/* Array.prototype.indexOf(): 
    ~ Returns the first(least) index of an element within the array equal to an element or -1 if none is found.
      It searches the element from the 0th index number.
    ~ Searches forward
 */

    // Example:
    console.log(myFriends.indexOf('ramesh'));
    
/* Array.prototype.lastIndexOf(): 
    ~ Returns the last(greatest) index of an element within the array equal to an element or -1 if none is found.
      It searches the element last to the first.
    ~ Searches backward
 */

    // Example:
    console.log(myFriends.lastIndexOf('ramesh'));

/* Array.prototype.includes(): 
    ~ Determines whether the arrary contains a value.
    ~ returns true or false as appropriate
    ~ Searches forward
 */

    // Example:
    console.log(myFriends.includes('ramesh'));
    console.log(myFriends.includes('rameshmohan'));

/* Array.prototype.find();
    ~ arr.find(callbakc(element[index, [array]])[thisArg])
    ~ returns the found element in the array, if some element in the arrary satisfies the testing function, or
    undefined if not found only problem is that it return only one element.
*/
