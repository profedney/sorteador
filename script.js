document.addEventListener('DOMContentLoaded', () => {
    const minInput = document.getElementById('min');
    const maxInput = document.getElementById('max');
    const sortearBtn = document.getElementById('sortear');
    const resultadoDiv = document.getElementById('resultado');

    sortearBtn.addEventListener('click', () => {
        const min = parseInt(minInput.value);
        const max = parseInt(maxInput.value);

        if (isNaN(min) || isNaN(max) || min >= max) {
            resultadoDiv.textContent = 'Por favor, insira um intervalo válido.';
        } else {
            const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
            resultadoDiv.textContent = `Número Sorteado: ${numeroSorteado}`;
        }
    });
});
