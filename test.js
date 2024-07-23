// JavaScript Program: Simple Calculator

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        console.log("Error: Division by zero is not allowed.");
        return 0;
    }
    return a / b;
}

// Main function to execute the calculator operations
function calculator() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Enter the operation (add, subtract, multiply, divide): ', (operation) => {
        readline.question('Enter the first number: ', (firstNumber) => {
            readline.question('Enter the second number: ', (secondNumber) => {
                const a = parseFloat(firstNumber);
                const b = parseFloat(secondNumber);

                switch (operation) {
                    case 'add':
                        console.log(`The result is: ${add(a, b)}`);
                        break;
                    case 'subtract':
                        console.log(`The result is: ${subtract(a, b)}`);
                        break;
                    case 'multiply':
                        console.log(`The result is: ${multiply(a, b)}`);
                        break;
                    case 'divide':
                        console.log(`The result is: ${divide(a, b)}`);
                        break;
                    default:
                        console.log('Invalid operation.');
                }
                readline.close();
            });
        });
    });
}

// Run the calculator
calculator();