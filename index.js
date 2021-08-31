let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValues = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'X') {
            buttonText = '*';
            screenValues += buttonText;
            screen.value = screenValues;
        }
        else if (buttonText == 'AC') {
            screenValues = "";
            screen.value = screenValues;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValues);
        }
        else {
            screenValues += buttonText;
            screen.value = screenValues;
        }

    })
}
