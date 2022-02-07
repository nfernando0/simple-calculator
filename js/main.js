let display = document.getElementById('display');
let button = Array.from(document.getElementsByClassName('button'));

button.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText) {

                // Clear Button
            case 'C':
                display.innerText = '';
                break;
                // Deleted button
            case '←':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
                // Equal button
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error!';
                }
                break;
                // Display Calculator
            default:
                display.innerText += e.target.innerText;
        }
    });
})