/***** DOM (Document Oject Model) in JS *****/
// DOM is used inorder to perform any operations related to the HTML elements.

/***** Window vs Document *****/

/*
            Window                                              Document
01  Window is the main container or we can say the          Whereas DOM is the child of window object.
    global object and any operations related to entire
    browser window can be a part of window object.

02  All the members like objects, methods or properties,    Whereas in the DOM, we need to refer the document,
    if they are the part of window object then we do not    if we want to use the document object, methods or properties.
    refer the window object.

04  Window has methods, properties and object.               Document is just the object of the global object that is
    Example: setTimeout() or setInterval() are the          Window, which deals with the document the HTML
    methods, whereas Document is the object of the          elements themselves.
    window and it also has a 'SCREEN' object with properties
    describing the physical display such as innerHeight,
    innerWidth and more.
*/

/***** Use Diagrams to Explain Window Global Object *****/
/*
                                                            Window
                                                              | (Down Arrow)

                                DOM                 BOM                         Javascript

                                Document            Navigator                   Object
                                
                                <HTML>              Screen                      Array

                               <BODY> <HEAD>        Location                    Function

                               <a>    <p>           Frames
                                                    History
                                                    XML HTTP Request
*/

/*
        ***** DOM vs BOM *****
    The DOM is the Document Object Model which deals with the document, the HTML elements themselves,
    eg: document and all traversal you would do in it, events, etc.
        For eg. change the background color to red
        document.body.style.background = "red"

    The BOM is the Browser Object Model, which deals with browser components aside from the document,
    like history/location, navigator and screen (as well as some others that vary by broswer) 
    Or,
    In simple meaning, all the Window Operations which comes under BOM are performed using BOM.

    Functions LIKE alert/confirm/prompt are also a part of BOM they are directly not related to the document
    but represent pure browser methods of communicating with the users.

    alert(location.href) -> shows current url
        if confirm("Want to visit YouTube.com"){
        location href = "https://www.youtube.com/youtube"           -> redirects the browser to the link
        }
*/

/* 
        Navigate through DOM
    01. document.documentElement -> returns the element that is the root element of the document
    02. document.head   -> gives data inside <head> tag
    03. document.body
    04. document.body.childNodes (include tab, enter & whitespaces and will be represented as text)
    05. document.body.children(without textnodes, only regular elements)
    06. document.childNodes.length

    document.body.hasChildNodes() -> returns True if there is child Nodes
*/


// Practice
// How to check whether an element has child nodes or not? -> we will use hasChildNodes()

// How to find the child in DOM tree
// firstChild vs firstElementChild
// lastChild vs lastElementChild

// document.body.firstChild -> gives text
// document.body.firstElementChild -> shows first child element

// document.body.firstElementChild
// document.body.firstElementChild.firstElementChild (first ChildElement of body and that first ChildElement one also firstChildElement)

// const firstChild = document.body.firstElementChild.firstElementChild -> undefined
// firstChild -> <div class = "child-one">Child One</div>
// firstChild.style.color = "red"   -> using CSS Document Style

/* Searching using Query Selector */
/*
    const childTwo = document.querySelector('.child-two')


    document.querySelector('#firstId').innerHTML; // for ID
    
    document.querySelector('ul li.web-class').innerHTML;
    document.querySelector('li.web-class').innerHTML;
    document.querySelector('.web-class').innerHTML;
*/

/*
    Interview Questions

    Differentiate between getElementById and querySelector?

    getElementById:
        syntax: element = document.getElementById(id) returns a reference to the element by its ID. If the element with
        the specified ID is not in the document, it will return null.

    querySelector:
        syntax: element = document.querySelector(selector) returns the first element within the document that matches
        the specified group of selectors, or null if no matches are formed.

        getElementById works for the element having ID attribute but query selector doesnot need ID attribute.
*/

// document.body.parentNode
// document.body.parentElement

// document.body.nextSibling    -> (include tab, enter & whitespaces and will be represented as text) 
// document.body.previousSibling -> (include tab, enter & whitespaces and will be represented as text)
// document.body.nextElementSibling -> doesnot include tab, enter & ..... and gives desired siblingElement
// document.body.previousElementSibling -> doesnot include tab, enter & ..... and gives desired siblingElement

// ID is unique just like Roll No. but same class can be given to multiple elements
// document.getElementById
// document.getElementsByClassName

// Lets learn some code:

/*
    We can directly write:
    document.getElementById("heading").innerHTML = "Welcome";

    By Taking the Reference, heading is the object here
    const headingChange = document.getElementById("heading");
    headingChange.innerHTML = "Welcome";
*/

/*
    Now the same we have is the query selectors
    queryselector returns the first matching value whereas 
    querySelectorAll() will return all the elements

    Example: console.log(document.querySelectorAll('#heading'));
*/