"use strict";
const display = document.getElementById("display");
// Add numbers/operators to display
function append(value) {
    if (display.value === "Error") {
        display.value = "";
    }
    display.value += value;
}
// Clear all
function clearDisplay() {
    display.value = "";
}
// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}
// Calculate result
function calculate() {
    try {
        if (display.value.trim() === "") {
            return;
        }
        let expression = display.value.replace(/%/g, "/100");
        let result = eval(expression);
        if (result === Infinity || isNaN(result)) {
            display.value = "Error";
        }
        else {
            display.value = result.toString();
        }
    }
    catch {
        display.value = "Error";
    }
}
// Keyboard Support
document.addEventListener("keydown", (event) => {
    const key = event.key;
    if ((key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "." ||
        key === "%") {
        append(key);
    }
    else if (key === "Enter") {
        event.preventDefault();
        calculate();
    }
    else if (key === "Backspace") {
        deleteLast();
    }
    else if (key === "Escape") {
        clearDisplay();
    }
});
// Make functions available to HTML buttons
window.append = append;
window.calculate = calculate;
window.clearDisplay = clearDisplay;
window.deleteLast = deleteLast;
