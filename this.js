// Problem 1
function introduce(name) {
  console.log(this.name); // Output: Alex
  // Q: What is printed? Why does this.name work (or not) in this context?
  // A: It prints "Alex" because `this` in a regular function (in global scope) refers to the global object (window).
  // Since we assigned this.name = "Alex" globally, it works.
}
this.name = "Alex"; // global assignment
introduce();


// Problem 2
function runArrow(greeting) {
  const arrowFunc = () => {
    console.log(this.greeting); // Output: Hello!
    // Q: What does this.greeting refer to here? Why doesn't it refer to the parameter anymore?
    // A: Arrow functions don't have their own `this`; they use the surrounding context's `this`.
    // Since we assigned this.greeting = "Hello!" in the global scope, that's what it uses.
  };
  arrowFunc();
}
this.greeting = "Hello!"; // global assignment
runArrow();


// Problem 3
const display = {
  message: "This is from the object",
  show: function (param) {
    console.log(this.message); // Output: This is from the object
    // Q: What is printed now? Why does this refer to the object? What happened to the argument?
    // A: `this` refers to the `display` object because `show` is a regular method call.
    // The argument is no longer used since we replaced it with this.message.
  }
};
display.show();


// Problem 4
function handleClick(text) {
  console.log(this.text); // Output: undefined (with regular function), "Clicked!" (with arrow function)
}

document.getElementById("myBtn").onclick = function () {
  this.text = "Clicked!";
  handleClick(); 
  // Q: What does this.text refer to in each case? Why does the arrow function behave differently?
  // A: In the regular function, `this` refers to the element (button), but `handleClick()` runs with its own `this` (global), so it prints undefined.
  // In the arrow function, `this` is lexically inherited from the outer (global) scope, so both the assignment and logging happen on the same `this` (global).
};

document.getElementById("myBtn").onclick = () => {
  this.text = "Clicked!";
  handleClick(); 
  // A: In the arrow function, `this` refers to the outer scope (`window`), so both assignment and `handleClick()` use `window.text`, which is "Clicked!".
};
