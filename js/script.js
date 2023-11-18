/* ====================== alterar icon da barra de navegação =================== */
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active')
}

/* ====================== Ativado/Desativando click na navegação =================== */
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY
    let offset = sec.offsetTop - 150
    let height = sec.offsetHeight
    let id = sec.getAttribute('id')

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active')
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active')
      })
    }
  })
  /* ====Barra de navegação=== */
  let header = document.querySelector('header')

  header.classList.toggle('sticky', window.scrollY > 100)

  /* ====================== removendo icone de alteração ao clicar no link da barra de navegação (scroll) =================== */
  menuIcon.classList.remove('bx-x')
  navbar.classList.remove('active')
}

/* ====================== revelação de rolagem =================== */
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
})

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' }) //faz texto saindo de cima para baixo
ScrollReveal().reveal(
  '.home-img, .technology-container, .img1, .portfolio-box, .contact form', // faz imagem sair de baixo para cima
  { origin: 'bottom' }
)
ScrollReveal().reveal('.home-content h1, #img1', { origin: 'left' }) // faz nome e foto do sobre sair da esquerda para direita
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' }) // faz texto sair da direita para esquerda

/* ====================== JS typado =================== */
const typed = new Typed('.text-animation', {
  strings: ['Desenvolvedor Front-End'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
})
