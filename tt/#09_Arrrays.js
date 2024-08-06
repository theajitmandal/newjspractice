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

    // var myFriends = ['vinod', 'ramesh', 'arjun', 'ramesh', 'vishal'];
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
    // myFriends.forEach((element, index, array) => {
    //     console.log(element + " index: " + index + " " + array);  
    // })

    // FOR...EACH cannot break in the middle, starts with the 1st data and goes upto the last data

    // Example: Program using FOR...EACH to increase each element of an array by 5
    // let newNum = [4, 6, 7, 8];
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
    // console.log(myFriends.indexOf('ramesh'));
    
/* Array.prototype.lastIndexOf(): 
    ~ Returns the last(greatest) index of an element within the array equal to an element or -1 if none is found.
      It searches the element last to the first.
    ~ Searches backward
 */

    // Example:
    // console.log(myFriends.lastIndexOf('ramesh'));

/* Array.prototype.includes(): 
    ~ Determines whether the arrary contains a value.
    ~ returns true or false as appropriate
    ~ Searches forward
 */

    // Example:
    // console.log(myFriends.includes('ramesh'));
    // console.log(myFriends.includes('rameshmohan'));

/* Array.prototype.find();
    ~ arr.find(callback(element[index, [array]])[thisArg])
    ~ returns the found element in the array, if some element in the arrary satisfies the testing function, or
    undefined if not found. Only problem is that it returns only one element.
*/

// Example
    // const prices = [200, 300, 350, 400, 450, 500, 600];
    // const findElem = prices.find((currVal) => {
    //     return currVal < 400;
    // });
    // The above code can be simplified as below:
    // const findElem = prices.find((currVal) => currVal < 400);
    // console.log(findElem);

/* Array.prototype.findIndex();
    ~ returns the found index in the array, if an element in the array satisfies the testing function, or -1 if not found
*/

// Example
    // console.log(prices.findIndex((currVal) => currVal<400));
    // console.log(prices.findIndex((currVal) => currVal<400)); //check

/* Differences between find() and findIndex():
    find() gives first found element whereas findIndex() gives index of the found element
    find() shows undefined if not found whereas findIndex() shows -1 if none is found
*/

/* Array.prototype.filter();
    ~ returns a new arrary containing all elements of the calling array for which the provided filtering funciton returns 
      true
    ~ returns empty array if doesnot find any value
*/

// Example
    // const newPriceList = prices.filter((currVal, index) =>{
    //     return currVal < 400;
    // })
    // console.log(newPriceList);

// How to sort and compare an Array?

// How to sort?
/* Array.prototype.sort();
    ~ The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order
    is ascending, built upon converting the elements into strings. Then comparing their sequences of UTF-16 code units values
*/
    
// Example
    // const months = ["March", "Jan", "Feb", "Dec", "Nov"];
    // console.log(months.sort());
    // const numbers = [2, 4, 1, 8, 5, 9];
    // const numbers1 = [25, 4, 100, 8, 5, 90];
    // console.log(numbers1.sort());

    // doesnot sorts the number arrays [But sorted in the above case when single digit but not in multidigit numbers]
    // However, if numbers are sorted as strings "25" is bigger than "100" because "2" is bigger than "1"
    // Because of this, the sort() method will produce an incorrect result when sorting numbers

// How to Insert, Add, Replace, Delete Elements in Array (CRUD) :
/* Array.prototype.push();
    ~ The push() method adds one or more elements to the end of an array and returns the new length of the array.    
*/

// Example
    // const animals = ['pigs', 'goats', 'sheep'];
    // animals.push('chicken');
    // console.log(animals);

    // const count = animals.push('hen');
    // console.log(count); //gives new length of the array

/* Array.prototype.unshift();
    ~ The unshift() method adds one or more elements to the beginning of an array and returns new length of the array.
*/

// Example
    // const animals = ['pigs', 'goats', 'sheep'];
    // const count = animals.unshift('chicken');
    // console.log(animals); 
    // console.log(count); 
    // animals.unshift('chicken', 'cats', 'cow') adds chicken, cats, cow to the beginning of an array

// More Examples
    // const myNumbers = [1, 2, 3, 5];
    // console.log(myNumbers.unshift(4, 6));
    
    // const myNumbers1 = [2, 4, 5, 8, 9];
    // myNumbers1.unshift(3, 7);
    // console.log(myNumbers1);


/* Array.prototype.pop();
    ~ The pop() method removes the last element from an array and returns that element. This method changes the length
    of the array.
*/

// Example:
    // const plants = ['brocoli', 'cabbage', 'brinjal', 'tomato', 'cauli'];
    // console.log(plants.pop()); //removes cauli
    // console.log(plants);  //shows only upto tomato

/* Array.prototype.shift();
    ~ The shift() method removes the first element from an array and returns that removed element. This method changes
    the length of the array.
*/

// Example:
    const plants = ['brocoli', 'cabbage', 'brinjal', 'tomato', 'cauli'];
    console.log(plants.shift()); //removes brocollo
    console.log(plants); //returns from cabbage to cauli

/* Challenge Time:
        const months = ['Jan', 'march', 'April', 'June', 'July'];
    01. Add Dec at the end of an array?
    02. What is the return value of splice method?
    03. Update 'march' to 'March' (update)?
    04. Delete june from an array?
*/

/* *************** CRUD OPERATION using only one method *************** */
    
    
    

    
    
    

    
    





    
    
    
    


