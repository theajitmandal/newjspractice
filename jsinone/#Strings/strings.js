/*
    *** JavaScript Strings ***
        A string is a sequence of characters that represents text in computer programming. 
        Strings are often used to store human-readable data, such as words or sentences. 

        Strings are for storing text
        Strings are written with quotes

    *** Using Quotes ***
        A JavaScript string is zero or more characters written inside quotes.

        Example:
            let text = "John Doe";

    You can use single or double quotes:

        Example:
            let carName1 = "Volvo XC60";  // Double quotes
            let carName2 = 'Volvo XC60';  // Single quotes

    Note: Strings created with single or double quotes work the same.

    There is no difference between the two.

    *** Quotes Inside Quotes ***
        You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

        Example:
            let answer1 = "It's alright";
            let answer2 = "He is called 'Johnny'";
            let answer3 = 'He is called "Johnny"';

    *** Template Strings ***
        Templates were introduced with ES6 (JavaScript 2016).
        Templates are strings enclosed in backticks (`This is a template string`).
        Templates allow single and double quotes inside a string:

        Example:
            let text = `He's often called "Johnny"`;

    Note: Templates are not supported in Internet Explorer.

    *** String Length ***
        To find the length of a string, use the built-in length property:

        Example:
            let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let length = text.length;

    *** Escape Characters ****
        Because strings must be written within quotes, JavaScript will misunderstand this string:

            let text = "We are the so-called "Vikings" from the north.";
        
        The string will be chopped to "We are the so-called".

        To solve this problem, you can use an backslash escape character.
        The backslash escape character (\) turns special characters into string characters:    

                Code	    Result	        Description
            \'	                '	            Single quote
            \"	                "	            Double quote
            \\	                \	            Backslash

        Examples:
        
        \" inserts a double quote in a string:
        let text = "We are the so-called \"Vikings\" from the north.";

        \' inserts a single quote in a string:
        let text= 'It\'s alright.';

        \\ inserts a backslash in a string:
        let text = "The character \\ is called backslash.";

        Six other escape sequences are valid in JavaScript:

            Code	            Result
            \b	            Backspace
            \f	            Form Feed
            \n	            New Line
            \r	            Carriage Return
            \t	            Horizontal Tabulator
            \v	            Vertical Tabulator

        Note: The 6 escape characters above were originally designed to control typewriters, 
              teletypes, and fax machines. They do not make any sense in HTML.

    *** Breaking Long Lines ***
        For readability, programmers often like to avoid long code lines.
        A safe way to break up a statement is after an operator:

        Example:
            document.getElementById("demo").innerHTML =
            "Hello Dolly!";

        A safe way to break up a string is by using string addition:

        Example:
            document.getElementById("demo").innerHTML = "Hello " +
            "Dolly!";

    *** Template Strings ***
        Templates were introduced with ES6 (JavaScript 2016).
        Templates are strings enclosed in backticks (`This is a template string`).

        Templates allow multiline strings:

        Example:
            let text =
            `The quick
            brown fox
            jumps over
            the lazy dog`;

    Note: Templates are not supported in Internet Explorer.

    *** JavaScript Strings as Objects ***
        Normally, JavaScript strings are primitive values, created from literals:

            let x = "John";

        But strings can also be defined as objects with the keyword new:

            let y = new String("John");

        Example:
            let x = "John";
            let y = new String("John");

        Do not create String objects.
        The new keyword complicates the code and slows down execution speed.
        String objects can produce unexpected results:

        When using the == operator, x and y are equal:

            let x = "John";
            let y = new String("John");

        When using the === operator, x and y are not equal:

            let x = "John";
            let y = new String("John");

        Note the difference between (x==y) and (x===y).

        (x == y) true or false?

            let x = new String("John");
            let y = new String("John");

        (x === y) true or false?

            let x = new String("John");
            let y = new String("John");

        Comparing two JavaScript objects always returns false.

    *** Complete String Reference ***
        For a complete String reference, go to our:

            Complete JavaScript String Reference.

        The reference contains descriptions and examples of all string properties and methods.

    *** Exercise ***
        1. Which one of the following is not a legal JavaScript String?
                "Hello world!"
                ""Hello world!""
                'Hello world!'
                `Hello world!`

                    -> ""Hello world!""

        2. Use the length property to alert the length of txt.
                let txt = "Hello World!";
                let x = _______;
                alert(x);

                    -> txt.length

        3. Use escape characters to alert We are "Vikings".
        
                let txt = "_______";
                alert(txt);

                Use escape characters to alert We are "Vikings".

                let txt = "We are \"Vikings\"";
                alert(txt);

        Concatenate the two strings to alert "Hello World!".

                let str1 = "Hello ";
                let str2 = "World!";
                alert(_____________);

                    -> alert(str1 + str2);

    *** JavaScript String Methods ***
    Javascript strings are primitive and immutable: All string methods produce a new string without altering the original string.

    
    String length                                   String toUpperCase()
    String charAt()                                 String toLowerCase()
    String charCodeAt()                             String concat()
    String at()                                     String trim()
    String [ ]                                      String trimStart()
    String slice()                                  String trimEnd()
    String substring()                              String padStart()
    String substr()                                 String padEnd()
                                                    String repeat()  
                                                    String replace()   
                                                    String replaceAll()
                                                    String split()

    See Also:
        String Search Methods
        String Templates

    *** JavaScript String Length ***
        The length property returns the length of a string:

        Example:
            let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let length = text.length;

    *** Extracting String Characters ***
            There are 4 methods for extracting string characters:

            The at(position) Method
            The charAt(position) Method
            The charCodeAt(position) Method
            Using property access [] like in arrays

    *** JavaScript String charAt() ***
            The charAt() method returns the character at a specified index (position) in a string:

            Example:
                let text = "HELLO WORLD";
                let char = text.charAt(0);

    *** JavaScript String charCodeAt() ***
        The charCodeAt() method returns the code of the character at a specified index in a string:
        The method returns a UTF-16 code (an integer between 0 and 65535).

            Example:
                let text = "HELLO WORLD";
                let char = text.charCodeAt(0);

    *** JavaScript String at() ***
        ES2022 introduced the string method at():

        Examples:
            Get the third letter of name:
                const name = "W3Schools";
                let letter = name.at(2);

            Get the third letter of name:

                const name = "W3Schools";
                let letter = name[2];

        The at() method returns the character at a specified index (position) in a string.
        The at() method is supported in all modern browsers since March 2022:

    Note: 
        The at() method is a new addition to JavaScript.
        It allows the use of negative indexes while charAt() do not.

        Now you can use myString.at(-2) instead of charAt(myString.length-2).

    *** Browser Support ***
        at() is an ES2022 feature.
        JavaScript 2022 (ES2022) is supported in all modern browsers since March 2023:

    *** Property Access [ ] ***
        Example:
            let text = "HELLO WORLD";
            let char = text[0];

        Note:
            Property access might be a little unpredictable:

            It makes strings look like arrays (but they are not)
            If no character is found, [ ] returns undefined, while charAt() returns an empty string.
            It is read only. str[0] = "A" gives no error (but does not work!)

        Example:
            let string = "Mandal";
            console.log(string.charAt(2));
            console.log(string.charCodeAt(2));
            console.log(string.at(3));
            console.log(string[4]);

            console.log(string.at(8));                  -> undefined
            console.log(string.charAt(8));              -> empty string
            console.log(string[8]);                     -> undefined




*/