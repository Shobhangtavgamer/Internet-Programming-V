import * as readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 === 0) {
                return "Error: Cannot divide by zero";
            }
            return num1 / num2;
        case "%":
            return num1 % num2;
        default:
            return "Error: Invalid operator";
    }
}
rl.question("Enter first number: ", (input1) => {
    const num1 = Number(input1);
    rl.question("Enter operator (+, -, *, /, %): ", (operator) => {
        rl.question("Enter second number: ", (input2) => {
            const num2 = Number(input2);
            if (isNaN(num1) || isNaN(num2)) {
                console.log("Error: Please enter valid numbers.");
            }
            else {
                const result = calculate(num1, operator, num2);
                console.log("Result:", result);
            }
            rl.close();
        });
    });
});
