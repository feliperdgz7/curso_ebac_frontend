const form = document.getElementById('form-numeros');//Constante do formulario

let formValido = false; //Criando variavel FormValido 

function numeroValido(valorA, valorB){ //Função para validar o valor no numero B > A
    return valorB > valorA;
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    let valorA = parseInt(document.getElementById('campo-a').value);//Valor do campo A
    let valorB = parseInt(document.getElementById('campo-b').value);//Valor do camp B

    const messageSuccess = `Parabens, você conseguiu! <b>${valorB}</b> é maior que <b>${valorA}</b>`;//Mensagem caso o objetivo sejá concluido
    const containermessagesuccess = document.querySelector('.success-message');

    formValido = numeroValido(valorA, valorB);

    if (formValido){
        document.querySelector('.error-message').style.display = 'none';
        containermessagesuccess.innerHTML = messageSuccess;
        containermessagesuccess.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';
    }else {
        document.querySelector('.error-message').style.display = 'block';
        containermessagesuccess.style.display = 'none';
    }
})