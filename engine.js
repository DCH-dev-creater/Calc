window.addEventListener('load', function() {

    const calculator = document.getElementById('calculator');
    const display = document.getElementById('display');
    const symbols = document.getElementById('symbols');
    const memorySymbol = document.getElementById('memory-symbol');
    const buttonPanel = document.getElementById('button-panel');

    calculator.addEventListener('mousemove', function(event) {
        if (isButton(event)) return;
        if (event.buttons === 1) {
            calculator.style.left = (calculator.offsetLeft+event.movementX) + 'px';
            calculator.style.top = (calculator.offsetTop+event.movementY) + 'px';
        }
    });

    buttonPanel.addEventListener('mousedown', function(event) {
        if (!isButton(event)) return;
        event.target.classList.add('pressed');
    });

    buttonPanel.addEventListener('mouseup', function(event) {
        if (!isButton(event)) return;
        event.target.classList.remove('pressed');
    });
    

    // General Function
    buttonPanel.addEventListener('click', function(event) {
        if (!isButton(event)) {
            return; 
        }



    })




    function isButton(e) {
        return e.target.hasAttribute('data-button');
    }



});