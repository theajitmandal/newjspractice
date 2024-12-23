/*
    What is Event propagation, capturing, bubbling ?
        Event Propagation determines in which order the elements receive the event. There are two ways to handle 
        this event propagation order of HTML DOM is Event Bubbling and Event Capturing.

        The event propagation mode determines in which order the elements receive the event.

        By default is the event bubbling phase.

        event.stopPropagation(): to stop propagation 

        Third argument decides bubbling or capturing.
        By default is false, so bubbling phase. But if third argument is true, then capturing phase.

        Propagation is categorized into 3 main types:
            The Capture Phase               The Target Phase                The Bubble Phase
        Going from the window to         It is the target phase.     From the event target,
        the event target phase.                                      Parent back to the window.

        Event Bubbling: With the event bubbling the event is first captured and handled by the innermost 
            element and then propagated to outer elements.
        
        Event Capturing: With the event capturing, the event is first captured by the outermost element and propagated
        to the inner elements.

        For example, suppose there are three components namely component1, component2, component3. 
        Inside these components, we attached the onClickEventListener event handlers. Now when we click on 
        component3 the event handler for all the three components will be executed. Now here the question is 
        in which order the event will execute. Now at this point event bubbling and capturing comes into the picture.

    Bubbling:
        When an event happens on a component, it first runs the event handler on it, then on its parent component, 
        then all the way up on other ancestors’ components. By default, all event handles through this order from 
        center component event to outermost component event.

        Example: In this example, we will create three div components and each component will have an event handler. 
        When we click on component 3, it will give an alert as “component 3 event clicked” then all the way up 
        “component 2 event clicked” and “component 1 event clicked” alerts will display. This is how event bubbling 
        happens from the “bottom to top”.

        <!-- Propagation Example Starts Here -->

        <!DOCTYPE html>
        <html>

        <head>
            <style>
                #div1 {
                    background-color: lightgreen;
                    padding: 24px;
                    border: 1px solid black;
                }

                #div2 {
                    background-color: yellow;
                    padding: 18px;
                    border: 1px solid black;

                }

                #div3 {
                    background-color: orange;
                    border: 1px solid black;
                }
            </style>
        </head>

        <body>
            <h1 style="color: green">GeeksForGeeks</h1>
            <h3>What is Event propagation, capturing, bubbling?</h3>

            <div id="div1">
                Component 1
                <div id="div2">
                    component 2
                    <div id="div3">
                        component 3
                    </div>
                </div>
            </div>

            <!-- Javascript code for event bubbling -->
            <script>
                let div1 = document.querySelector("#div1");
                let div2 = document.querySelector("#div2");
                let div3 = document.querySelector("#div3");

                div1.addEventListener("click", function (event) {
                    alert("Component 1 event clicked");
                });

                div2.addEventListener("click", function (event) {
                    alert("Component 2 event clicked");
                });

                div3.addEventListener("click", function (event) {
                    alert("Component 3 event clicked");
                });
            </script>
        </body>

        </html>

        <!-- Propagation Example Ends Here -->

    Capturing
        It is the opposite of bubbling. The event handler is first on its parent component and then on the 
        component where it was actually wanted to fire that event handler. In short, it means that the event is 
        first captured by the outermost element and propagated to the inner elements. It is also called trickle down.

        Example: In this example, we will create three div components and each component will have an event handler. 
        When we click on div component 3 event, it will give an alert as “component 1 event clicked” and then all the 
        way down  “component 2 event clicked” and then “component 3 event clicked” alerts will display. 
        This is how event capturing or trickling happens from the “top to bottom”.

        <!-- Capturing Example Starts Here -->

        <!DOCTYPE html>
        <html>

        <head>
            <style>
                #div1 {
                    background-color: lightgreen;
                    padding: 24px;
                    border: 1px solid black;
                }

                #div2 {
                    background-color: yellow;
                    padding: 18px;
                    border: 1px solid black;

                }

                #div3 {
                    background-color: orange;
                    border: 1px solid black;
                }
            </style>
        </head>

        <body>
            <h1 style="color: green">GeeksForGeeks</h1>
            <h3>What is Event propagation, capturing, bubbling?</h3>

            <div id="div1">
                Component 1
                <div id="div2">
                    component 2
                    <div id="div3">
                        component 3
                    </div>
                </div>
            </div>

            <!-- Javascript code for event capturing -->
            <script>
                let div1 = document.querySelector("#div1");
                let div2 = document.querySelector("#div2");
                let div3 = document.querySelector("#div3");

                div1.addEventListener("click", function (event) {
                    alert("Component 1 event clicked");
                }, true);

                div2.addEventListener("click", function (event) {
                    alert("Component 2 event clicked");
                }, true);

                div3.addEventListener("click", function (event) {
                    alert("Component 3 event clicked");
                }, true);
            </script>
        </body>
        </html>

        <!-- Capturing Example Ends Here -->
*/