import { 
    init, 
    addSymbol, 
    isNotButton, 
    showOnDisplay,
    doOperation,
    getButtonValue,
    invertSignNumber,
    clearState,
    calculateResult,
    debug
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
            showOnDisplay(state, DOM);
            
            break;

        case 'plus_minus':
            invertSignNumber(state);
            showOnDisplay(state, DOM);

            break;

        case 'ce':
        case 'on_off':
            clearState(state)
            showOnDisplay(state, DOM);

            break;

        case 'plus':
        case 'minus':
        case 'mult':
        case 'divide':
            calculateResult(state);
            showOnDisplay(state, DOM);
            doOperation(state, symbol);

            break;
        case 'percent':
        case 'sqrt':
            doOperation(state, symbol);
            showOnDisplay(state, DOM);

            break;

        case 'equals':
            calculateResult(state);
            showOnDisplay(state, DOM);

            break;
    }


    debug(state, symbol);
});

