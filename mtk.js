let currentInput = '';

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator) {
    currentInput += ' ' + operator + ' ';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function calculateLog() {
    currentInput = Math.log(Number(currentInput)).toString();
    updateDisplay();
}

function calculateSquareRoot() {
    currentInput = Math.sqrt(Number(currentInput)).toString();
    updateDisplay();
}

function calculateExponent() {
    currentInput = currentInput.split(' ');
    let base = Number(currentInput[0]);
    let exponent = Number(currentInput[2]);
    currentInput = Math.pow(base, exponent).toString();
    updateDisplay();
}

function calculateSin() {
    currentInput = Math.sin(Number(currentInput) * (Math.PI / 180)).toString(); // Convert to radians
    updateDisplay();
}

function calculateCos() {
    currentInput = Math.cos(Number(currentInput) * (Math.PI / 180)).toString(); // Convert to radians
    updateDisplay();
}

function calculateTan() {
    currentInput = Math.tan(Number(currentInput) * (Math.PI / 180)).toString(); // Convert to radians
    updateDisplay();
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (e) {
        currentInput = 'Error';
        updateDisplay();
    }
}

// Function to handle keyboard input
document.addEventListener('keydown', function(event) {
    if (event.key >= '0' && event.key <= '9') {
        appendNumber(event.key);
    } else if (event.key === '+') {
        appendOperator('+');
    } else if (event.key === '-') {
        appendOperator('-');
    } else if (event.key === '*') {
        appendOperator('*');
    } else if (event.key === '/') {
        appendOperator('/');
    } else if (event.key === 'Enter') {
        calculateResult();
    } else if (event.key === 'Backspace') {
        currentInput = currentInput.slice(0, -1); // Delete the last character
        updateDisplay();
    } else if (event.key === 'Escape') {
        clearDisplay();
    } else if (event.key === '.') {
        appendNumber('.');
    } else if (event.key === 'l') {  // For log(x)
        calculateLog();
    } else if (event.key === 'r') {  // For square root
        calculateSquareRoot();
    } else if (event.key === 's') {  // For sin
        calculateSin();
    } else if (event.key === 'c') {  // For cos
        calculateCos();
    } else if (event.key === 't') {  // For tan
        calculateTan();
    }
});
