// Build confidence to perform tasks in programming
// Build projects after completion of basics
// Until and Unless you don't build projects, you'll not build confidence to crack interviews

/*
    *** Learning to code is not so easy, but there is nothing 'not so easy' for me. So Coding is easy, very easy ***

    How to stay motivated while learning to code?
        01 Set goals
        02 Make a routine
        03 Find a mentor
        04 Learn to self-motivate
        05 Be realistic
        06 Enjoy the process
        07 Take breaks
        08 Seek support
        09 Challenge yourself
        10 Keep up with new technologies

    *** The only way to become a clever programmer is to: Practice. Practice. Practice. Code. Code. Code ! ***
                        Practice. Practice. Practice. Code. Code. Code !
    *** The only way to become a clever programmer is to: Practice. Practice. Practice. Code. Code. Code ! ***
*/

/*
    *** JS Introduction ***
    
    JavaScript is the world's most popular programming language.
    JavaScript is the programming language of the Web.
    JavaScript is easy to learn.

    Summary Definition of JS:
        JavaScript (JS) is the most popular lightweight, scripting, and interpreted programming language. 
        It was developed by Brendan Eich in 1995. JavaScript is popular as a scripting language for web pages, 
        mobile apps, web servers, and many other platforms. It is essential for both front-end and 
        back-end developers. It is also called as browser's language. It is the third layer of the layer cake of 
        standard web technologies, two of which (HTML and CSS). JS enables to:
            1. create dynamically updating contents
            2. control multimedia
            3. animate images
            4. display interactive maps
            5. animate 2D/3D graphics
        For Example,
            JS can change the HTML Content
            JS can change the HTML attribute values
            JS can change the HTML Styles (CSS)
            JS can hide/show the HTML elements

    A scripting language is a type of programming language in which the instructions are interpreted 
    individually at runtime.

    Markup language is a system that uses tags or codes to define the structure and presentation of a 
    document or web page.
            
    JavaScript (JS) is the most popular lightweight, scripting, and interpreted programming language. 
    It was developed by Brendan Eich in 1995. JavaScript is well-known as a scripting language for web pages, 
    mobile apps, web servers, and many other platforms. It is essential for both front-end and back-end developers 
    to have a strong command of JavaScript, as many job roles require fluency in this language. It is also called
    browser's language.

    JavaScript is a scripting or programming language that allows you to implement complex features on web pages — 
    every time a web page does more than just sit there and display static information for you to look at — 
    displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — 
    you can bet that JavaScript is probably involved. It is the third layer of the layer cake of 
    standard web technologies, two of which (HTML and CSS).

    HTML is the markup language that we use to structure and give meaning to our web content, 
    for example defining paragraphs, headings, and data tables, or embedding images and videos in the page.

    CSS is a language of style rules that we use to apply styling to our HTML content, for example setting 
    background colors and fonts, and laying out our content in multiple columns.

    JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, 
    animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve 
    with a few lines of JavaScript code.)

    *** Why JS? ***
        JavaScript is one of the 3 languages all web developers must learn:

        1. HTML to define the content of web pages
        2. CSS to specify the layout of web pages
        3. JavaScript to program the behavior of web pages:
            It improves the user experience of a web page by converting it from a static page into an interactive one
            and adds behaviour to the web page.

   Here we will learn every version of JavaScript:

        The Original JavaScript ES1 ES2 ES3 (1997-1999)
        The First Main Revision ES5 (2009)
        The Second Revision ES6 (2015)
        The Yearly Additions (2016, 2017 ... 2021, 2022)
    
    *** The only way to become a clever programmer is to: Practice. Practice. Practice. Code. Code. Code ! ***

    Commonly Asked Questions / CAQ / FAQ:
        How do I get JavaScript?
        Where can I download JavaScript?
        Is JavaScript Free?

    You don't have to get or download JavaScript.
    JavaScript is already running in your browser on your computer, on your tablet, and on your smart-phone.
    JavaScript is free to use for everyone.

    JavaScript References:
        W3Schools maintains a complete JavaScript reference, including all HTML and browser objects.
        The reference contains examples for all properties, methods and events, and is continuously updated 
        according to the latest web standards.

        MDN Web Docs:
            https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript

    *** To run JS codes ***
        VS Code Download
        Babel JS Download Extension
        Make one folder and open it with code
        To run JS 'index.js' file in VS code, type node index.js, for this node should be installed
        Comment Shortcut ~ Ctrl + ?

    *** What can JS do? ***
        1. JavaScript Can Change HTML Content
        
            One of many JavaScript HTML methods is getElementById().
            The example below "finds" an HTML element (with id="demo"), 
            and changes the element content (innerHTML) to "Hello JavaScript":

            Example:

            <!DOCTYPE html>
            <html>
            <body>
                <h2>What Can JavaScript Do?</h2>
                <p id="demo">JavaScript can change HTML content.</p>
                <button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>
                    Click Me!
                </button>
            </body>
            </html>

            JavaScript accepts both double and single quotes:

            document.getElementById('demo').innerHTML = 'Hello JavaScript';

        2. JavaScript Can Change HTML Attribute Values
            
            In this example JavaScript changes the value of the src (source) attribute of an <img> tag:

            <!DOCTYPE html>
            <html>
            <body>
                <h2>What Can JavaScript Do?</h2>
                <p>JavaScript can change HTML attribute values.</p>
                <p>In this case JavaScript changes the value of the src (source) attribute of an image.</p>
                <button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>
                <img id="myImage" src="pic_bulboff.gif" style="width:100px">
                <button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>
            </body>
            </html>

        3. JavaScript Can Change HTML Styles (CSS)

            Changing the style of an HTML element, is a variant of changing an HTML attribute:

            <!DOCTYPE html>
            <html>
            <body>
                <h2>What Can JavaScript Do?</h2>
                <p id="demo">JavaScript can change the style of an HTML element.</p>
                <button type="button" onclick="document.getElementById('demo').style.fontSize='35px'">Click Me!</button>
            </body>
            </html> 

        4. JavaScript Can Hide HTML Elements
        
            Hiding HTML elements can be done by changing the display style:

            <!DOCTYPE html>
            <html>
            <body>
                <h2>What Can JavaScript Do?</h2>
                <p id="demo">JavaScript can hide HTML elements.</p>
                <button type="button" onclick="document.getElementById('demo').style.display='none'">Click Me!</button>
            </body>
            </html> 

        5. JavaScript Can Show HTML Elements
        
            Showing hidden HTML elements can also be done by changing the display style:

            <!DOCTYPE html>
            <html>
            <body>
                <h2>What Can JavaScript Do?</h2>
                <p>JavaScript can show hidden HTML elements.</p>
                <p id="demo" style="display:none">Hello JavaScript!</p>
                <button type="button" onclick="document.getElementById('demo').style.display='block'">Click Me!</button>
            </body>
            </html> 

    *** Did You Know? ***

        JavaScript and Java are completely different languages, both in concept and design.
        JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997.
        ECMA-262 is the official name of the standard. ECMAScript is the official name of the language.

    *** Where to inser JS codes ? ***
        
        The <script> Tag
            In HTML, JavaScript code is inserted between <script> and </script> tags.

            Example: 
            <script>
                document.getElementById("demo").innerHTML = "My First JavaScript";
            </script>

        Old JavaScript examples may use a type attribute: <script type="text/javascript">.
        The type attribute is not required. JavaScript is the default scripting language in HTML.

    *** JavaScript Functions and Events ***

        A JavaScript function is a block of JavaScript code, that can be executed when "called" for.
        For example, a function can be called when an event occurs, like when the user clicks a button.
        We will learn much more about functions and events in later chapters.

    *** JavaScript in <head> or <body> ***

        You can place any number of scripts in an HTML document.
        Scripts can be placed in the <body>, or in the <head> section of an HTML page, or in both.

    *** JavaScript in <head> ***
        
        In this example, a JavaScript function is placed in the <head> section of an HTML page.
        The function is invoked (called) when a button is clicked:

            <!DOCTYPE html>
            <html>
            <head>
            <script>
                function myFunction() {
                    document.getElementById("demo").innerHTML = "Paragraph changed.";
                }
            </script>
            </head>
            <body>

            <h2>Demo JavaScript in Head</h2>

            <p id="demo">A Paragraph.</p>

            <button type="button" onclick="myFunction()">Try it</button>

            </body>
            </html> 

    *** JavaScript in <body> ***

        In this example, a JavaScript function is placed in the <body> section of an HTML page.
        The function is invoked (called) when a button is clicked:

            <!DOCTYPE html>
            <html>
            <body>

            <h2>Demo JavaScript in Body</h2>

            <p id="demo">A Paragraph.</p>

            <button type="button" onclick="myFunction()">Try it</button>

            <script>
            function myFunction() {
                document.getElementById("demo").innerHTML = "Paragraph changed.";
            }
            </script>

            </body>
            </html> 

    Note: Placing scripts at the bottom of the <body> element improves the display speed, 
    because script interpretation slows down the display.

    *** External JavaScript ***

        Scripts can also be placed in external files:

        External file: myScript.js
        function myFunction() {
            document.getElementById("demo").innerHTML = "Paragraph changed.";
        }

        External scripts are practical when the same code is used in many different web pages.
        JavaScript files have the file extension .js.
        To use an external script, put the name of the script file in the src (source) attribute of a <script> tag:

        <script src="myScript.js"></script>

        You can place an external script reference in <head> or <body> as you like.
        The script will behave as if it was located exactly where the <script> tag is located.
        External scripts cannot contain <script> tags.

    *** External JavaScript Advantages ***

        Placing scripts in external files has some advantages:

        It separates HTML and code
        It makes HTML and JavaScript easier to read and maintain
        Cached JavaScript files can speed up page loads

        To add several script files to one page  - use several script tags:
        
        <script src="myScript1.js"></script>
        <script src="myScript2.js"></script>

    *** External References ***
        An external script can be referenced in 3 different ways:

            With a full URL (a full web address)
            With a file path (like /js/)
            Without any path

        This example uses a full URL to link to myScript.js:
            <script src="https://www.w3schools.com/js/myScript.js"></script>

        This example uses a file path to link to myScript.js:
            <script src="/js/myScript.js"></script>

        This example uses no path to link to myScript.js:
            <script src="myScript.js"></script>

        We can read more about file paths in the chapter HTML File Paths.









        


*/