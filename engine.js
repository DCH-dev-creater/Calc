import { init, addDigit, isNotButton, showToDisplay} from './functions.js'; 

const DOM = init();

var state = {
    value: 0,
    memoryValue: 0,
    displayValue: '0',
};

DOM.buttonPanel.addEventListener('click', function(event) {
    
    if (isNotButton(event)) return;
    
    const symbol = event.target.getAttribute('data-button');

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
            state.displayValue = addDigit(state.displayValue, symbol);
            showToDisplay(state.displayValue, DOM.display);
            return;

        case 'dot':
            if (state.displayValue.includes('.')) return;
            state.displayValue = addDigit(state.displayValue, '.');
            showToDisplay(state.displayValue, DOM.display);
            return;

        case 'plus_minus':
            console.log('plus_minus');
            return;

        case 'ce':
        case 'on_off':
            state.displayValue = '0';
            state.value = 0;
            showToDisplay(state.displayValue, DOM.display);
            return;
    }


});