/*
    9:40.....
    Events in JS
    01. Using Inline events alert()
    02. By calling a function (Most commong way of writing)
    03. Using inline events (HTML onclick = "" property and element.onclick)
    04. Using Event Listeners (addEventListener and IE's attachEvent)

    HTML events are the "things" that happen to HTML elements. When JS is used in HTML pages, JS can react on these events.
    
    HTML Events: An HTML event can be something the browser does, or something a user does.

    Some Examples of HTML Events:
    A HTML web page has finished loading
    A HTML input field was changed
    A HTML button was clicked
    Often, when events happen, you may want to do something.

    Javascript lets you execute the code when the events are detected. HTML allows event handler attributes 
    with JS code to be added to HTML elements.

    Thirdway overrides the function but the fourth way doesnot override the function. Fourthway -> EventListener can
    be used for multiple times i.e. EventListner

    EventObject: EventOject is the parent of the event object.
    For Example: MouseEvent, focusEvent, KeyboardEvent, etc.

    console.log(event);
    console.log(event.target);  -> HTML Element
    console.log(event.type);    -> click

    It provides the type of event, event target element, and other related information about the event.

    MouseEvent: The Mouse Event Object
    Events that occur when the mouse interacts with the HTML document belongs to the Mouse Event Object.

    KeyboardEvent: onKeypress, onKeydown, onKeyup
    Events that occur when the user presses a key on the keyboard, belongs to the keyboard Event Object.

    InputEvents in Javascript: The onChange event occurs when the value of an element has been changed.
    For radiobuttons and checkboxes, the onChange event occurs when the checked state has been changed.

    onChange(): 
    Note: It is sued to obtain the values entered by a user on an input field.

    Difference between onClick and addEventListener?
    AddEventListener does not overwrite the existing event handlers whereas onClick overrides any existing
    onClick event handlers.
    The other significant difference of course is that onclick will always work whereas addEventListener
    does not work in IE before 9.

    10:30....
    Timing Based Events:
    setTimeOut()
    setInterval()
    clearTimeOut()
    clearInterval()

    The window object allows the execution of the code at the specified time intervals. These time intervals are called
    timing events.

    The two key methods to use with JS are:
    setTimeOut(function, milliseconds) : Executes a function, after waiting a specified number of milliseconds

    setInterval(function, milliseconds) : same as setTimeOut(), but repeats the execution of the function continuously.

    clearTimeOut(): It clears/stops the setTimeOut function.
    clearInterval(): It stops/clears the setInterval function.

    Difference between setTimeOut and setInterval?
    setTimeOut:
        Execution: Runs a function once after a specified delay.
        Parameters: Takes a function and a delay (in milliseconds).
        Interval Control: No automatic repetition, manual scheduling needed.
        Single Execution: Executes the function only once.
        Clearing: Use clearTimeout() method to stop execution.
        Resource Usage: Consumes fewer resources as it runs only once.
        Precision: Offers better precision for single-time execution.
        Control: Provides control over when the function executes.
        Use Cases: Suitable for one-time events, delays, or timeouts.

    setInterval:
        Execution: Runs a function repeatedly at specified intervals.
        Parameters: Takes a function, a delay, and an optional repetition count.
        Interval Control: Automatically repeats based on the specified interval.
        Single Execution: Can execute the function multiple times until cleared.
        Clearing: Use clearInterval() method to stop repetition.
        Resource Usage: Consumes more resources as it runs repeatedly.
        Precision: May suffer from timing drift over long periods.
        Control: May lack precise control over execution timing.
        Use Cases: Ideal for tasks needing continuous repetition, like animations.
*/