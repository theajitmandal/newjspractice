/*
    11:57

    ECMASCRIPT 2020/ES2020:

    BigInt: is used to solve calculation greater than this number (Number.MAX_SAFE-INTEGER)

        let oldNum = Number.MAX_SAFE_INTEGER;
        console.log(oldNum);        -> gives 9007199254740991

        console.log(9007199254740991n+12n);
        let newNum = 9007199254740991n + 12n;   
        console.log(newNum);                        -> gives 9007199254741003n
        console.log(typeof(newNum));                -> bigint

    Nullish Coalescing:
        The nullish coalescing assignment (??=) operator, also known as the logical nullish assignment operator,
        only evaluates the right operand and assigns to the left if the left operand is nullish (null or undefined).

        const myNames = {fName: 'Ajit'};

        myNames.fName ??=  'AjitMandal';
        console.log(myNames.fName);

        myNames.lName ??= 'Mandal';
        console.log(myNames.lName);

        Syntax: x ??= y
        
        Description:
            Nullish coalescing assignment short-circuits, meaning that x ??= y is equivalent to x ?? (x = y), 
            except that the expression x is only evaluated once.

            No assignment is performed if the left-hand side is not nullish, due to short-circuiting of the 
            nullish coalescing operator. For example, the following does not throw an error, despite x being const:
            
            const x = 1;
            x ??= 2;

            In fact, if x is not nullish, y is not evaluated at all.

            const x = 1;
            x ??= console.log("y evaluated");
            // Logs nothing

        Examples:
            Using nullish coalescing assignment
            You can use the nullish coalescing assignment operator to apply default values to object properties. 
            Compared to using destructuring and default values, ??= also applies the default value if the property 
            has value null.

            function config(options) {
                options.duration ??= 100;
                options.speed ??= 25;
                return options;
            }

                config({ duration: 125 }); // { duration: 125, speed: 25 }
                console.log(config({})); // { duration: 100, speed: 25 }

            Try to Learn Different Scenarios from the following code:
                function config(options) {
                    options.duration ??= 100;
                    options.speed ??= 25;
                    console.log(options);
                    return options;
                }

                config({ duration: 125 }); 
                config({});
                console.log(config({}));





*/