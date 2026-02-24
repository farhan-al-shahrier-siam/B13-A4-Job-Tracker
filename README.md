<h2>1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?</h2>
<p>Answer: <p/>
<p>getElementById() → Used to select a single element because IDs are unique in HTML.</p>
<p>getElementsByClassName() → Used to select multiple elements having the same class name.</p>
<p>querySelector() → Used to select the first element that matches a CSS selector.</p>
<p>querySelectorAll() → Used to select all elements that match a CSS selector.</p>

<h2>2. How do you create and insert a new element into the DOM?</h2>
<p>Answer:</p>
<p>To create and insert a new element into the DOM:</p>
<p>Create the element using document.createElement() then add content to the element using innerHTML. Now insert the element into the DOM using method appendChild()</p>
<h2>What is Event Bubbling? And how does it work?</h2>
<p>Answer:</p>
<p>Event bubbling is a process in JavaScript where an event starts from the target element (where the event happened) and then moves upward to its parent elements in the DOM tree.</p>
<p>When you click an element, the event is first handled by that element.Then the event moves to its parent, grandparent, and so on until it reaches the document object.</p>
<p>Simple Meaning: The event “bubbles up” from child → parent → parent’s parent.</p>
<h2>4. What is Event Delegation in JavaScript? Why is it useful?</h2>
<p>Answer:</p>
<p>Event delegation is a technique in JavaScript where you add one event listener to a parent element instead of adding many event listeners to child elements.</p>
<h4>Usefulness:</h4>
<p>Improves performance because fewer event listeners are used.</p>
<p>Works well for dynamic elements (elements added later).</p>
<p>Makes code cleaner and easier to manage.</p>
<h2>5. What is the difference between preventDefault() and stopPropagation() methods?</h2>
<p>Answer:</p>
<p>preventDefault() → Used to stop things like form submission or link navigation</p>
<p>stopPropagation() → Used to stop event bubbling,Stops the event from bubbling up to parent elements</p>
