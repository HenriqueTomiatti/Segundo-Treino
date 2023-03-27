function exibirMensagem() {
    let nome = document.getElementById('nome').value;
    document.write(`Olá ${nome}! Seja Bem Vindo!`);
  }

let campoNome = document.getElementById('nome')
campoNome.addEventListener('keydown', function(event) {
    if(event.keyCode === 13){
        event.preventDefault();
        exibirMensagem();
  }
});

window.prompt('Insira o seu nome', 'digite o seu nome');

