const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if(url.includes(href)) {
    link.classList.add('ativo');
  }
}

links.forEach(ativarLink) //quando se quer passar a msm funcao pra cada item, no caso os 3 As dentro do header-menu.
// a fucao acima adiciona uma classe ao html chamada ativo, essa classe ativo faz com que o hover (barrinha animada abaixo dos titulos) no header fique fixo apos um ser selecionado.