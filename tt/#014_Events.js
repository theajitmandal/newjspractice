/*
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
    Ofthen, when events happen, you may want to do something.

    Javascript lets you execute the code when the events are detected. HTML allows event handler attributes 
    with JS code to be added to HTML elements.

    Thirdway overrides the function but the fourth way doesnot override the function. Fourhway -> EventListener can
    be used for multiple times i.e. EventLister

    EventObject: EventOject is the parent of the event object.
    For Example: MouseEvent, focusEvent, KeyboardEvent, etc.

    console.log(event);
    console.log(event.target);  -> HTML Element
    console.log(event.type);    -> click

    It provides the type of event, event target element, and other related information about the event.
*/