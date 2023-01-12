const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if(url.includes(href)) {
    link.classList.add('ativo');
  }
}


links.forEach(ativarLink) //quando se quer passar a msm funcao pra cada item, no caso os 3 As dentro do header-menu