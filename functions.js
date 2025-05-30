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

export function addSymbol(state, symbol) {

    if (symbol === '.' && state.displayValue.includes('.')) return;

    let limit = state.limitDigits;
    limit += state.displayValue.includes('.') ? 1 : 0;
    limit += state.displayValue.includes('-') ? 1 : 0;

    if (state.displayValue.length >= limit) return;

    if (
        (state.displayValue === '0' && symbol === '0') ||
        (state.displayValue === '0' && symbol !== '0' && symbol !== '.')
    ) {
        state.displayValue = symbol;
        return;
    }

    state.displayValue += symbol;
}

export function showToDisplay(state, dom) {
   dom.display.innerText = state.displayValue;
}

export function getButtonValue(event) {
    return event.target.getAttribute('data-button')
}

export function invertSignNumber(state) {
    if (state.displayValue === '0') return;

    if (state.displayValue.startsWith('-')) {
        state.displayValue = state.displayValue.replace('-', '');
    } else {
        state.displayValue = '-' + state.displayValue;
    }
}

export function clearState(state) {
    state.value = 0;
    state.displayValue = '0';
    state.operator = null;
    state.limitDigits = 10;
}

export function doOperation(state, symbol) {
    switch (symbol) {
        case 'plus':
            state.operator = '+';
            state.value = Number(state.displayValue);
            state.displayValue = '0';
            break;
        case 'minus':
            state.operator = '-';
            state.value = Number(state.displayValue);
            state.displayValue = '0';
            break;
        case 'mult':
            state.operator = '*';
            state.value = Number(state.displayValue);
            state.displayValue = '0';
            break;
        case 'divide':
            state.operator = '/';
            state.value = Number(state.displayValue);
            state.displayValue = '0';
            break;
        case 'percent':
            state.displayValue = String( (state.value * Number(state.displayValue)) / 100);
            break;
        case 'sqrt':
            if (Number(state.displayValue) < 0) {
                state.displayValue = 'Error';
                return;
            }

            let result = String( Math.sqrt(Number(state.displayValue)) );
            let limit = state.limitDigits;
            limit += result.includes('.') ? 1 : 0;

            if (result.length > limit) {
                result = result.slice(0, limit);
            }

            state.displayValue = result;

            break;
    }
}

export function calculateResult(state) {
    if (state.operator === null) return;

    switch (state.operator) {
        case '+':
            state.value += Number(state.displayValue);
            break;
        case '-':
            state.value -= Number(state.displayValue);
            break;
        case '*':
            state.value *= Number(state.displayValue);
            break;
        case '/':
            if (Number(state.displayValue) === 0) {
                state.displayValue = 'Error';
                return;
            }
            state.value /= Number(state.displayValue);
            break;
    }

    state.displayValue = String(state.value);
    state.operator = null;
}
