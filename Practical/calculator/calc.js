import * as readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter first number: ", (input1) => {
    const num1 = Number(input1);
    rl.question("Enter operator (+, -, *, /, %): ", (operator) => {
        rl.question("Enter second number: ", (input2) => {
            const num2 = Number(input2);
            let result;
            switch (operator) {
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "*":
                    result = num1 * num2;
                    break;
                case "/":
                    if (num2 === 0) {
                        console.log("Cannot divide by zero");
                        rl.close();
                        return;
                    }
                    result = num1 / num2;
                    break;
                case "%":
                    result = num1 % num2;
                    break;
                default:
                    console.log("Invalid operator");
                    rl.close();
                    return;
            }
            console.log("Result =", result);
            rl.close();
        });
    });
});
