/*-------------------------------- Constants --------------------------------*/


/*-------------------------------- Variables --------------------------------*/
let equation = ''
/*------------------------ Cached Element References ------------------------*/
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const clearBtn = document.querySelector('.clear')
const equalBtn = document.querySelector('.equals')
const display = document.querySelector(`.display`)

/*----------------------------- Event Listeners -----------------------------*/
/*numbers.forEach(number => {
    number.addEventListener("click", (event) => {
      // This log is for testing purposes to verify we're getting the correct value
      console.log(event.target.innerText);
      // Future logic to capture the button's value goes here...
      append(event.target.innerText} 
      display.innerText.display
    });
  });
  */

  // create array for `numbers` containing the number buttons
numbers.forEach(number => {
    number.addEventListener("click", (event) => {
      // Capture the clicked number
      const clickedNumber = event.target.innerText;
      
      // Append the clicked number to the display
      appendToDisplay(clickedNumber);
    });
  });
  
  operators.forEach(operator => {
    operator.addEventListener("click", (event) => {
      // Capture the clicked number
      const clickedOperator = event.target.innerText;
      
      // Append the clicked operator to the display
      appendToDisplay(clickedOperator);
    });
  });

   /// Add eventListener to register the clear function

   clearBtn.addEventListener("click", clear)

   equalBtn.addEventListener("click", equal)
  
  
  /*-------------------------------- Functions --------------------------------*/
  
  function appendToDisplay(value) {
    // Get the current display value
    let currentValue = display.innerText;
    
    // Concatenate the clicked number to the current value
    currentValue += value;
    
    // Update the display with the new value
    display.innerText = currentValue;
  }

  //create a function for the operators

const append = (inpute) => {
    equation = equation + inpute
}

function clear() {
    display.innerText = ""
    equation = ""
};

// Converts what's on the display into a mathematic equation using an Eval function.

function equal() {
    if (display.innerText == "") {return}
    display.innerText = eval(display.innerText)
}


///// Assisted by Will Isenberg, Jo Slempa, Tanner Gilliam, 