export function init() {
    
    const calculator = document.getElementById('calculator');
    const display = document.getElementById('display');
    const symbols = document.getElementById('symbols');
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
        symbols,
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
