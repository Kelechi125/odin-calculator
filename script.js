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

// When a number is pressed, it appears in the display
// Each consecutive number attaches to the previous number in the display (concatenation)
// When an operator is pressed, assign the #display.textContent to firstOperand
// Change background color of the operator
// When a number is pressed again
// Clear the display
// The number appears in the display again and consecutive numbers concatenate


const operate = (operator, firstOperand, secondOperand, callback) = {
    if
}