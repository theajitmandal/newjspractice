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

    *** Exercises ***
        1. What is a correct syntax for assigning a value to a variable? -> x = 5
        2. Which one is NOT a legal variable name? -> -firstName
        3. True or False: JavaScript variable names are case in-sensitive, meaning name is the same as NAME -> F

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

    *** Exercise***

        1. True or False: JAVA is short for JavaScript. -> False
        2. Who invented JavaScript? -> Brendan Eich
        3. Select the correct JavaScript method for finding the specified HTML element.
            -> document.getElementById("demo").innerHTML

    *** Where to insert JS codes ? ***
        
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

    *** Exercises ***
        1. In HTML, JavaScripts must be inserted inside which HTML tags? -> <script> and </script> tag
        2. What is the correct file extension for JavaScript files? -> .js
        3. What is a correct syntax for including a JavaScript in an HTML document? 
            -> <script src="index.js"></script>

    *** JavaScript Output ***
    
        *** JavaScript Display Possibilities ***
        
            JavaScript can "display" data in different ways:

                Writing into an HTML element, using innerHTML.
                Writing into the HTML output using document.write().
                Writing into an alert box, using window.alert().
                Writing into the browser console, using console.log().

        1. Using innerHTML:

            To access an HTML element, JavaScript can use the document.getElementById(id) method.
            The id attribute defines the HTML element. The innerHTML property defines the HTML content:

            Example:
                <!DOCTYPE html>
                <html>
                <body>

                <h2>My First Web Page</h2>
                <p>My First Paragraph.</p>

                <p id="demo"></p>

                <script>
                document.getElementById("demo").innerHTML = 5 + 6;
                </>

                </body>
                </html> 

            Changing the innerHTML property of an HTML element is a common way to display data in HTML.

        2. Using document.write()
            
            For testing purposes, it is convenient to use document.write():
                <!DOCTYPE html>
                <html>
                <body>

                <h2>My First Web Page</h2>
                <p>My first paragraph.</p>

                <p>Never call document.write after the document has finished loading.
                It will overwrite the whole document.</p>

                <script>
                document.write(5 + 6);
                </script>

                </body>
                </html> 
            
            Note: Using document.write() after an HTML document is loaded, will delete all existing HTML:
            Run and check up the below code:
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                </head>
                <body>
                    <h1>Heading 1</h1>
                    <p id="demo">Welcome</p>
                    <h1>Heading 2</h1>
                    <button onclick="display()">Clicke Here</button>

                    <script>
                        function display() {
                            document.write("Start Again");
                        }     
                    </script>
                </body>
                </html>
            
            So, The document.write() method should only be used for testing.

        3. Using window.alert()

            You can use an alert box to display data:
                <!DOCTYPE html>
                <html>
                <body>

                <h2>My First Web Page</h2>
                <p>My first paragraph.</p>

                <script>
                window.alert(5 + 6);
                </script>

                </body>
                </html> 
            
            You can skip the window keyword.
            In JavaScript, the window object is the global scope object. 
            This means that variables, properties, and methods by default belong to the window object. 
            This also means that specifying the window keyword is optional:

            window.alert(5 + 6); can also be written as alert(5 + 6);

        4. Using console.log()
            
            For debugging purposes, you can call the console.log() method in the browser to display data.
                <!DOCTYPE html>
                <html>
                <body>

                <h2>Activate Debugging</h2>

                <p>F12 on your keyboard will activate debugging.</p>
                <p>Then select "Console" in the debugger menu.</p>
                <p>Then click Run again.</p>

                <script>
                console.log(5 + 6);
                </script>

                </body>
                </html> 

        5. JavaScript Print

            JavaScript does not have any print object or print methods.
            You cannot access output devices from JavaScript.
            The only exception is that you can call the window.print() method in the browser to print the 
            content of the current window.

    *** Exercises ***
        What is NOT a correct syntax for writing output in JavaScript? -> body.html()
        True or False: alert(8); is the same as window.alert(8);.       -> true
        Select the correct syntax for writing 'Hello': document.write("Hello")

    *** JavaScript Statements ***
        *** Statements ***
            let x, y, z;    // Statement 1
            x = 5;          // Statement 2
            y = 6;          // Statement 3
            z = x + y;      // Statement 4

    *** JavaScript Programs ***
        A computer program is a list of "instructions" to be "executed" by a computer.
        In a programming language, these programming instructions are called statements.
        A JavaScript program is a list of programming statements.
        
        In HTML, JavaScript programs are executed by the web browser.

    *** JavaScript Statements ***
        JavaScript statements are composed of:
            Values, Operators, Expressions, Keywords, and Comments.
            
        This statement tells the browser to write "Hello Dolly." inside an HTML element with id="demo":
        Example:
            document.getElementById("demo").innerHTML = "Hello Dolly.";

        Most JavaScript programs contain many JavaScript statements.
        The statements are executed, one by one, in the same order as they are written.
        JavaScript programs (and JavaScript statements) are often called JavaScript code.

    *** Semicolons ; ***
        Semicolons separate JavaScript statements.
        Add a semicolon at the end of each executable statement:

        Examples:
            let a, b, c;  // Declare 3 variables
            a = 5;        // Assign the value 5 to a
            b = 6;        // Assign the value 6 to b
            c = a + b;    // Assign the sum of a and b to c

        When separated by semicolons, multiple statements on one line are allowed:
            a = 5; b = 6; c = a + b;
        
        On the web, you might see examples without semicolons.
        Ending statements with semicolon is not required, but highly recommended.

    *** JavaScript White Space ***
        JavaScript ignores multiple spaces. 
        You can add white space to your script to make it more readable.

        The following lines are equivalent:
            let person = "Hege";
            let person="Hege";

        A good practice is to put spaces around operators ( = + - * / ):
            let x = y + z;

    *** JavaScript Line Length and Line Breaks ***
        For best readability, programmers often like to avoid code lines longer than 80 characters.
        If a JavaScript statement does not fit on one line, the best place to break it is after an operator:

        Example:
            document.getElementById("demo").innerHTML =
            "Hello Dolly!";

    *** JavaScript Code Blocks ***
        JavaScript statements can be grouped together in code blocks, inside curly brackets {...}.
        The purpose of code blocks is to define statements to be executed together.
        One place you will find statements grouped together in blocks, is in JavaScript functions:
        
        Example:
            function myFunction() {
                document.getElementById("demo1").innerHTML = "Hello Dolly!";
                document.getElementById("demo2").innerHTML = "How are you?";
            }

        In this tutorial we use 2 spaces of indentation for code blocks.

    *** JavaScript Keywords ***
        JavaScript statements often start with a keyword to identify the JavaScript action to be performed.
        Here is a list of some of the keywords you will learn about in this tutorial:

        var	            Declares a variable
        let	            Declares a block variable
        const	        Declares a block constant
        if	            Marks a block of statements to be executed on a condition
        switch	        Marks a block of statements to be executed in different cases
        for	            Marks a block of statements to be executed in a loop
        function	    Declares a function
        return	        Exits a function
        try	            Implements error handling to a block of statements

        JavaScript keywords are reserved words. Reserved words cannot be used as names for variables.

    *** Exercise ***
        1. How many statements can you find in this line of code:
            let a = 5; let b = 6; c = a + b;
            -> 3
        2. True or False: A semicolons is required after a statement in JavaScript. 
            -> False, not necessary but recommended
        3. How many statements are present inside the function block?
            function genie() {
                let a, b, c;
                a = 5;
                b = 9;
                c = a + b;
            }
            -> 4

    *** JavaScript Syntax ***
            JavaScript syntax is the set of rules, how JavaScript programs are constructed:
            // How to create variables:
                var x;
                let y;

            // How to use variables:
                x = 5;
                y = 6;
                let z = x + y;

    *** JavaScript Values ***
        The JavaScript syntax defines two types of values:

        Fixed values
        Variable values
        
        Fixed values are called Literals.
        Variable values are called Variables

    *** JavaScript Literals ***
        The two most important syntax rules for fixed values are:
            1. Numbers are written with or without decimals: 
                    10.50
                    1001
            2. Strings are text, written within double or single quotes:
                    "John Doe"
                    'John Doe'

    *** JavaScript Variables ***
        In a programming language, variables are used to store data values.
        JavaScript uses the keywords var, let and const to declare variables.
        An equal sign is used to assign values to variables.
        In this example, x is defined as a variable. Then, x is assigned (given) the value 6:
            let x;
            x = 6;

    *** JavaScript Operators ***
        JavaScript uses arithmetic operators ( + - * / ) to compute values:
            (5 + 6) * 10
        JavaScript uses an assignment operator ( = ) to assign values to variables:
            let x, y;
            x = 5;
            y = 6;

    *** JavaScript Expressions ***
        An expression is a combination of values, variables, and operators, which computes to a value.
        The computation is called an evaluation.

        For example, 5 * 10 evaluates to 50:
            5 * 10
        Expressions can also contain variable values:
            x * 10
        The values can be of various types, such as numbers and strings.

        For example, 
            "John" + " " + "Doe", evaluates to "John Doe":
            "John" + " " + "Doe"

    *** JavaScript Keywords ***
        JavaScript keywords are used to identify actions to be performed.
        The let keyword tells the browser to create variables:
            let x, y;
            x = 5 + 6;
            y = x * 10;

        The var keyword also tells the browser to create variables:
            var x, y;
            x = 5 + 6;
            y = x * 10;

        In these examples, using var or let will produce the same result.
        We will learn more about var and let later in this tutorial.

    *** JavaScript Comments ***
        Not all JavaScript statements are "executed".
        Code after double slashes // or between /* and */                  /* ( this comment is for commenting)
        is treated as a comment.
        Comments are ignored, and will not be executed:

            let x = 5;   // I will be executed
            // x = 6;   I will NOT be executed

    *** JavaScript Identifiers / Names ***
        Identifiers are JavaScript names.
        Identifiers are used to name variables and keywords, and functions.
        The rules for legal names are the same in most programming languages.

        A JavaScript name must begin with:
            A letter (A-Z or a-z)
            A dollar sign ($)
            Or an underscore (_)
            Subsequent characters may be letters, digits, underscores, or dollar signs.

        Note : Numbers are not allowed as the first character in names. 
                This way JavaScript can easily distinguish identifiers from numbers.

    *** JavaScript is Case Sensitive ***
        All JavaScript identifiers are case sensitive. 
        The variables lastName and lastname, are two different variables:
            
            let lastname, lastName;
            lastName = "Doe";
            lastname = "Peterson";

        JavaScript does not interpret LET or Let as the keyword let.

    *** JavaScript and Camel Case ***
        Historically, programmers have used different ways of joining multiple words into one variable name:

        Hyphens: first-name, last-name, master-card, inter-city.
            Hyphens are not allowed in JavaScript. They are reserved for subtractions.
        
        
        Underscore: first_name, last_name, master_card, inter_city.
        Upper Camel Case (Pascal Case): FirstName, LastName, MasterCard, InterCity.
        Lower Camel Case: JavaScript programmers tend to use camel case that starts with a lowercase letter:
                        firstName, lastName, masterCard, interCity.

    *** JavaScript Character Set ***
        JavaScript uses the Unicode character set.
        Unicode covers (almost) all the characters, punctuations, and symbols in the world.

    *** JavaScript Comments ***
        JavaScript comments can be used to explain JavaScript code, and to make it more readable.
        JavaScript comments can also be used to prevent execution, when testing alternative code.

        Single Line Comments
        Multi-line Comments or Block comments

        It is most common to use single line comments.
        Block comments are often used for formal documentation.

    *** Using Comments to Prevent Execution ***
        Using comments to prevent execution of code is suitable for code testing.
        Adding // in front of a code line changes the code lines from an executable line to a comment.

    *** Exercises ***
        1. What is a correct syntax for creating a comment in JavaScript?
            -> // This is a comment
        2. Select the correct syntax for commenting out the entire section of the code.   
        3. What will be the value of x?            -> 5
                    x = 5
                    // x = 7






    




            

        







































        


*/