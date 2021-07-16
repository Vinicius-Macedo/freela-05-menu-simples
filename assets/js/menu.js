// VÁRIAVEIS PARA RECEBER AS TAGS DO HTML //
const breakpoint = 760;
const btnMobile = document.getElementById('btn-mobile'); // MENU HAMBURGUER DO MOBILE
const overlay = document.getElementById('overlay'); // CONTAINER PARA ESCURECER A TELA
const nav = document.getElementsByTagName('nav')[0]; // CONTAINER NAV
const body = document.getElementsByTagName('body')[0]; // BODY TAG
const liitems = document.querySelectorAll('.listname'); // ITENS DA LISTA
const liitemschilds = document.querySelectorAll('.primaryitem ul li a');

// FUNÇÃO PARA FECHAR O MENU //
function closemenu() {
    nav.classList.remove('active'); // REMOVE A CLASSE ACTIVE DA TAG NAV RESPONSÁVEL PELO ESTILO DO MENU ABERTO
    overlay.style.visibility = 'hidden'; // DEIXA INVÍSIVEL O CONTAINER QUE É UTILIZADO PARA ESCURECER A TELA
    body.style.overflow = 'visible'; // DEIXA O SCROLL HABILITADO
    btnMobile.setAttribute('aria-expanded', 'false'); // [ACESSIBILIDADE] DIZ PARA O LEITOR DE TELA QUE A ÁREA PODE EXPANDIR MAS NÃO ESTÁ EXPANDIDA.
    btnMobile.setAttribute('aria-label', 'Abrir menu'); // [ACESSIBILIDADE] DIZ PARA O LEITOR DE TELA A FUNÇÃO DO BOTÃO
}



// QUANDO CLICAR NO BOTÃO MENU HAMBURGUER //
btnMobile.addEventListener('click', function(e) {
  // SE O MENU ESTIVER COM A CLASSE ACTIVE RESPONSÁVEL PELO ESTILO DO MENU ABERTO
  if (nav.classList.contains('active')) {
    closemenu(); // ATIVA A FUNÇÃO PARA FECHAR O MENU
  } 

  // SE NÃO ESTIVER COM A CLASSE ACTIVE RESPONSÁVEL PELO ESTILO DO MENU ABERTO
  else {
    overlay.style.visibility = 'visible'; // DEIXA VISÍVEL O CONTAINER QUE É UTILIZADO PARA ESCURECER A TELA
    nav.classList.add('active'); // A CLASSE ACTIVE DA TAG NAV RESPONSÁVEL PELO ESTILO DO MENU ABERTO
    body.style.overflow = 'hidden'; // DEIXA O SCROLL DESABILITADO
    e.currentTarget.setAttribute('aria-expanded', 'true'); // [ACESSIBILIDADE] DIZ PARA O LEITOR DE TELA QUE A ÁREA PODE EXPANDIR E ESTÁ EXPANDIDA
    btnMobile.setAttribute('aria-label', 'Fechar menu'); // [ACESSIBILIDADE] DIZ PARA O LEITOR DE TELA A FUNÇÃO DO BOTÃO
  }

  // CÓDIGO ENCURTADO
  /*nav.classList.contains('active') ? closemenu() : (overlay.style.visibility = 'visible', nav.classList.add('active', body.style.overflow = 'hidden'), e.currentTarget.setAttribute('aria-expanded', 'true'));*/
});

// FUNÇÃO PQUANDO CLICAR EM QUALQUER LUGAR DA TELA (PARA FECHAR O MENU SE CLICAR FORA DELE)
window.addEventListener('click', function (e) {
    // SE CLICAR EM QUALQUER LUGAR FORA DO CONTAINER NAV E O CONTAINER NAV CONTER A CLASSE 'ACTIVE' ELE IRA EXECUTAR A FUNÇÃO FECHAR O MENU.
    !nav.contains(e.target) && this.window.innerWidth < breakpoint && nav.classList.contains("active") && closemenu();
});


// ADICIONA A FUNÇÃO FECHAR MENU QUANDO CLICAR EM QUALQUER
liitems.forEach(li => {
  li.addEventListener('click', function(e) {
    if (li.nextElementSibling && li.nextElementSibling.constructor.name == "HTMLUListElement") {
      if (li.nextElementSibling.style.display == "block") {
        li.nextElementSibling.style.display = "none";
      }
      else {
        li.nextElementSibling.style.display = "block";
      }
    }

    else {
      if (window.innerWidth < breakpoint) {
        closemenu();
      }
    }
  });
});

liitemschilds.forEach(li => {
  li.addEventListener('click', function(e) {
    if (window.innerWidth < breakpoint) {
      closemenu();
    }
    
  });
});