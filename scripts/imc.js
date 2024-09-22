const btn = document.getElementById('calcular');

function imc () {
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');

    if (peso == '' || altura == '') {
        alert ("Preencha todos os campos!");
    } else {
        const imc = (peso / (altura * altura)).toFixed(2);
        let classificacao;

        if (imc < 18.5)
            classificacao = "Baixo peso";
        else if (imc < 25)
            classificacao = "Peso normal";
        else if (imc < 30)
            classificacao = "Sobrepeso";
        else
            classificacao = "Obesidade";
        resultado.textContent = imc + " " + classificacao;
    }
}

btn.addEventListener('click', imc);