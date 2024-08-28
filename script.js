const avanca = document.querySelectorAll('.b-avanca');

avanca.forEach = (button => {
  button.addEventListener('click', function(){
    const atual = document.querySelector('.ativo');
    const proximoPasso = 'passo-' + this.getAtribute('data-avancar');

    atual.classList.remove('ativo');
    document.getElementById('proximoPasso').classList.add('ativo');
  })
})
