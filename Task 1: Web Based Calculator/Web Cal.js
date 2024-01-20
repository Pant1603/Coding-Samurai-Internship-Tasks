function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
// ... (your existing functions)

function toggleSign() {
    const display = document.getElementById('display');
    display.value = parseFloat(display.value) * -1;
}

function memoryRecall() {
    const display = document.getElementById('display');
    display.value = localStorage.getItem('memory') || '';
}

function memoryAdd() {
    const display = document.getElementById('display');
    const currentValue = parseFloat(display.value) || 0;
    const memory = parseFloat(localStorage.getItem('memory')) || 0;
    localStorage.setItem('memory', memory + currentValue);
}

function memorySubtract() {
    const display = document.getElementById('display');
    const currentValue = parseFloat(display.value) || 0;
    const memory = parseFloat(localStorage.getItem('memory')) || 0;
    localStorage.setItem('memory', memory - currentValue);
}

