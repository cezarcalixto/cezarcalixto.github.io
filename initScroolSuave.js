export default function initScroolSuave(){
    const linkInterno = document.querySelectorAll('.js-menu a[href^="#"]');
    function scroolToSection (event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
      const topo = section.offsetTop;
      window.scrollTo({
        top: topo,
        behavior: 'smooth',
      });
    }
    
    linkInterno.forEach((link) => {
    link.addEventListener('click',scroolToSection);
    })
    }
   