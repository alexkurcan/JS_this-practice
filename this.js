// Problem 1
function introduce(name) {
    console.log(name);
  }
  introduce("Alex");
 
// Task:
// Replace the name reference inside the function with this.name. 
// Then assign this.name = "Alex" in the global scope before calling the function (ignore the parameter when testing this).

// Q: What is printed? Why does this.name work (or not) in this context?

// Problem 2

function runArrow(greeting) {
    const arrowFunc = () => {
      console.log(greeting);
    };
    arrowFunc();
  }
  runArrow("Hello!");

  
//   Task:
//   Replace greeting with this.greeting and assign this.greeting = "Hello!"; before calling the outer function.
  
//   Q: What does this.greeting refer to here? Why doesn't it refer to the parameter anymore? 

// Problem 3

const display = {
    message: "This is from the object",
    show: function (param) {
      console.log(param);
    }
  };
  display.show("Passed argument");

//   Task:
// Replace param with this.message inside the function.

// Q: What is printed now? Why does this refer to the object? What happened to the argument?

// Problem 4

  function handleClick(text) {
    console.log(text);
  }

  document.getElementById("myBtn").onclick = function () {
    handleClick("Clicked!");
  };

// Task:
// Instead of passing "Clicked!", change handleClick() to use this.text, and assign this.text = "Clicked!"; inside the event function. Also try the same with an arrow function.

// Q: What does this.text refer to in each case? Why does the arrow function behave differently?