/*
    -> Javascript
            -> JS is a Synchronous Language 
                ~ ( In synchronous programming, tasks are executed sequentially, with each operation waiting for 
                the previous one to complete before proceeding.)
            -> JS is a single threaded language
                ~ A single-threaded language is one that can execute only one task at a time. 
                The program will execute the tasks in sequence, and each task must complete before the next task starts.
                JS engine is single threaded by default but it is used with other run time environment.

    -> Execution Context
            ~ execute one line of code at a time
            
            -> This is single threaded (each operation waits for the last one to complete before executing)
            ~ console.log(1)
            ~ console.log(2)

            ~ Call Stack & Memory Heap (Learn Global Execution Context)

    -> Blocking Code                Vs      Non-Blocking Code
            |                                   |
        Block the flow of program           Does not block execution
            |                                   |
        Read File Sync                      Read File Async
    e.g. I will bring water till then       e.g. I will bring water till then
    wait here, you arenot allowed to        you use your mobile or watch TV 
    do anything
                
*/