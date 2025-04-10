// Problem 1
function introduce(name) {
  console.log(this.name); // Output: Alex
  // Q: What is printed? Why does this.name work (or not) in this context?
  // A: It prints "Alex" since `this` in a regular function it refers to the global object.

}
this.name = "Alex"; // global assignment
introduce();


// Problem 2
function runArrow(greeting) {
  const arrowFunc = () => {
    console.log(this.greeting); // Output: Hello!
    // Q: What does this.greeting refer to here? Why doesn't it refer to the parameter anymore?
    // A: Arrow functions don't have their own `this` they have to use the surrounding context's `this`.
 
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
    // A: `this` is refering to `display` object because `show` is a regular method.

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
  // A: In the regular function, `this` refers to the element, but `handleClick()` uses it's own `this`, so it prints undefined.

};

document.getElementById("myBtn").onclick = () => {
  this.text = "Clicked!";
  handleClick(); 
  // A: In the arrow function, `this` refers to the outer scope (`window`), so both assignment and `handleClick()` use `window.text`, which is "Clicked!".
};
