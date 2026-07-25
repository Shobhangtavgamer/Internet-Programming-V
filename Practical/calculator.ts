const display = document.getElementById("display") as HTMLInputElement;

// Add numbers/operators to display
function append(value: string): void {
    if (display.value === "Error") {
        display.value = "";
    }
    display.value += value;
}

// Clear all
function clearDisplay(): void {
    display.value = "";
}

// Delete last character
function deleteLast(): void {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate(): void {
    try {
        if (display.value.trim() === "") {
            return;
        }

        let expression = display.value.replace(/%/g, "/100");

        let result = eval(expression);

        if (result === Infinity || isNaN(result)) {
            display.value = "Error";
        } else {
            display.value = result.toString();
        }

    } catch {
        display.value = "Error";
    }
}

// Keyboard Support
document.addEventListener("keydown", (event: KeyboardEvent) => {

    const key = event.key;

    if (
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "." ||
        key === "%"
    ) {
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
(window as any).append = append;
(window as any).calculate = calculate;
(window as any).clearDisplay = clearDisplay;
(window as any).deleteLast = deleteLast;