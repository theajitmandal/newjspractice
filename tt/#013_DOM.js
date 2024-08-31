/***** DOM in JS *****/

/***** Window vs Document *****/

/*
            Window                                              Document
01  Window is the main container or we can say the          Whereas DOM is the child of window object.
    global object and any operations related to entire
    browser window can be a part of window object.

02  All the members like objects, methods or properties,    Whereas in the DOM, we need to refer the document 
    if they are the part of window object then we do not    if we want to use the document object, methods or properties.
    refer the window object.

04  Window has methods properties and object.               Document is just the object of the global object that is
    Example: setTimeout() or setInterval() are the          Window, which deals with the document the HTML
    methods, whereas Document is the object of the          elements themselves.
    window and it also has a screen object with properties
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
    The DOM is the Document Object MOdel which deals with the document, the HTML elements themselves,
    eg: document and all traversal your would do in it, events, etc.
        For eg. change the background color to red
        document.body.style.background = "red"

*/

