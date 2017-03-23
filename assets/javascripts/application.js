// 23/03/2017 - Everaldo Gomes - everaldo.gomes@ifpr.edu.br

//Use este código caso o Javascript esteja embaixo do CSS
document.addEventListener('DOMContentLoaded', function () {
  alert('O DOM foi carregado');
});

//Use este código, caso contrário
window.onload =function(){
  alert('Todos os elementos foram carregados;')
};
