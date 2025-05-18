import { init, isButton, isNotButton} from './functions.js'; 

const DOM = init();

DOM.buttonPanel.addEventListener('click', function(event) {
    
    if (isNotButton(event)) return;
    
    const button = event.target.getAttribute('data-button');
    console.log(button);
    // Add your button click handling logic here
});