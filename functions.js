export function init() {
    
    const calculator = document.getElementById('calculator');
    const display = document.getElementById('display');
    const monitor = document.getElementById('monitor');
    const memorySymbol = document.getElementById('memory-symbol');
    const buttonPanel = document.getElementById('button-panel');

    calculator.addEventListener('mousemove', function(event) {
        event.preventDefault();
        if (isButton(event)) return;
        if (event.buttons === 1) {
            // Move the calculator
            calculator.style.left = (calculator.offsetLeft + event.movementX) + 'px';
            calculator.style.top = (calculator.offsetTop + event.movementY) + 'px';
        }
    });

    buttonPanel.addEventListener('mousedown', function(event) {
        if (isNotButton(event)) return;
        event.target.classList.add('pressed');
    });

    buttonPanel.addEventListener('mouseup', function(event) {
        if (isNotButton(event)) return;
        event.target.classList.remove('pressed');
    });

    return {
        calculator,
        display,
        monitor,
        memorySymbol,
        buttonPanel
    };
}

export function isButton(e) {
    return e.target.hasAttribute('data-button');
}

export function isNotButton(e) {
    return !e.target.hasAttribute('data-button');
}

export function addDigit(currentValue, symbol) {

    let limit = currentValue.includes('.') ? 11 : 10;

    if (currentValue.length >= limit) {
        return currentValue;
    }

    if (
        (currentValue === '0' && symbol === '0') ||
        (currentValue === '0' && symbol !== '0' && symbol !== '.')
    ) {
        return symbol;
    }

    return currentValue + symbol;
}


export function showToDisplay(data, display) {
   display.innerText = data;
}

