// Variables for operation
let firstNumber;
let operator;
let secondNumber;

// Functions for different operations

const add = (num1, num2) => {
    let sum = num1 + num2;
    return sum;
}

const subtract = (num1, num2) => {
    let difference = num1 - num2;
    return difference;
}

const multiply = (num1, num2) => {
    let product = num1 * num2;
    return product;
}

const divide = (num1, num2) => {
    let quotient = num1 / num2;
    return quotient;
}

//

const operate = (operator, firstOperand, secondOperand) => {
    if (operator === "+") {
        return add(firstOperand, secondOperand);
    } else if (operator === "-") {
        return subtract(firstOperand, secondOperand);
    } else if (operator === "x") {
        return multiply(firstOperand, secondOperand);
    } else if (operator === "/") {
        return divide(firstOperand, secondOperand);
    }
}

// When a number is pressed, it appears in the display
// Each consecutive number attaches to the previous number in the display (concatenation)
// When an operator is pressed, assign the #display.textContent to firstOperand
// Change background color of the operator
// When a number is pressed again
// Clear the display
// The number appears in the display again and consecutive numbers concatenate

// Added event listeners to buttons using event delegation on #button-container
//const btnContainer = document.querySelector("#button-container");
const display = document.querySelector("#display");

console.log(typeof display.textContent);

/*btnContainer.addEventListener("click", event => {
    let target = event.target;

    //console.log(target.value);
    if (target.classList.contains("clear")) {
        display.textContent = 0;
    } else if (target.classList.contains("decimal")) {

        // Check to see if the display value already includes a decimal
        if (display.textContent.includes(".") === false)

        // Appends a decimal to the display value
        display.textContent += target.value;
    } else if (target.classList.contains("number")) {
        
        // If the display value is "0"
        // Change the value to the number that is pressed
        if (display.textContent === "0") {  
            display.textContent = target.value;

            // If the display value is anything other than 0
            // Append the number pressed to the display value
        } else if (display.textContent !== "0") {
            display.textContent += target.value;
        }
        //display.textContent = parseInt(display.textContent) + target.value;
        console.log(display.textContent);
    } else if (target.classList.contains("operator")) {
        firstNumber = parseFloat(display.textContent);
        console.log(typeof firstNumber);
    }
})*/

const clearBtn = document.querySelector(".clear");
const decimalBtn = document.querySelector(".decimal");
const numberBtns = document.querySelectorAll(".number");

clearBtn.addEventListener("click", () => {
    display.textContent = 0;
})

decimalBtn.addEventListener("click", (event) => {
    let target = event.target;
    // Check to see if the display value already includes a decimal
    if (display.textContent.includes(".") === false)

        // Appends a decimal to the display value
        display.textContent += target.value;
})

for (btn of numberBtns) {
    btn.addEventListener("click", (event) => {
        let target = event.target;
        // If the display value is "0"
        // Change the value to the number that is pressed
        if (display.textContent === "0") {  
            display.textContent = target.value;

            // If the display value is anything other than 0
            // Append the number pressed to the display value
        } else if (display.textContent !== "0") {
            display.textContent += target.value;
        }
        //display.textContent = parseInt(display.textContent) + target.value;
        console.log(display.textContent);
    })
}



