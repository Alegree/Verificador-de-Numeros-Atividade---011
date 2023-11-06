function checkNumber() {
    const numberInput = document.getElementById('numberInput');
    const resultDiv = document.getElementById('resultado');

    if (numberInput.checkValidity()) {
        const number = parseInt(numberInput.value);

        if (number % 2 === 0 && number > 0) {
            document.body.style.backgroundColor = 'blue';
            resultDiv.textContent = `O número ${number} é PAR!`;
        } else if (number % 2 !== 0 && number >= 0) {
            document.body.style.backgroundColor = 'orange';
            resultDiv.textContent = `O número ${number} é ÍMPAR!`;
        } else {
            alert('Apenas números positivos são permitidos.');
        }
    } else {
        alert('Por favor, insira um número válido.');
    }
}
