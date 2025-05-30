import { 
    init, 
    addSymbol, 
    isNotButton, 
    showToDisplay, 
    getButtonValue,
    invertSignNumber,
    clearState,
    doOperation,
    calculateResult
} from './functions.js';

const DOM = init();

var state = {
    value: 0,
    displayValue: '0',
    operator: null,
    limitDigits: 10
};

DOM.buttonPanel.addEventListener('click', function(event) {
    
    if (isNotButton(event)) return;
    
    const symbol = getButtonValue(event);

    switch (symbol) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '.':
            addSymbol(state, symbol);
            showToDisplay(state, DOM);
            return;

        case 'plus_minus':
            invertSignNumber(state);
            showToDisplay(state, DOM);
            return;

        case 'ce':
        case 'on_off':
            clearState(state);
            showToDisplay(state, DOM);
            return;

        case 'plus':
        case 'minus':
        case 'mult':
        case 'divide':
            calculateResult(state);
            showToDisplay(state, DOM);
            doOperation(state, symbol);
            return;

        case 'percent':
        case 'sqrt':
            doOperation(state, symbol);
            showToDisplay(state, DOM);
            return;

        case 'equals':
            calculateResult(state);
            showToDisplay(state, DOM);
            return;
    }

});

