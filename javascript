function animaNumero() {
    
}
function initiNumero() {
    

const numero = document.querySelectorAll('[data-numero]');

numero.forEach((numero)=>{

const total = +numero.innerText;
    let start = 0;
    const tempo = setInterval(()=>{
        const incremento = Math.floor(total / 100);
        start = start + incremento;
        numero.innerText = start;
        if(start > total){
        numero.innerText = total
            clearInterval(tempo)
        }
    }, 25);
    

})
};

function handleMutation(mutation) {
    if(mutation[0].target.classList.contains('ativo')){
        observador.disconnect()
        initiNumero();
    }
}

const observadorTarget = document.querySelector('.numeros')

const observador = new MutationObserver(handleMutation);
observador.observe(observadorTarget, {attributes: true});

function dropdown(){

}

const dropdownMenu = document.querySelectorAll('[data-dropdown]')

dropdownMenu.forEach(menu => {
    ['touchstart', 'click', 'mouseover'].forEach(userEvent => {
        menu.addEventListener(userEvent, handleClickMenu)
    })
    
})

function handleClickMenu(event){
    event.preventDefault();
    this.classList.add('active')
    outsideClick(this, ['touchstart', 'click', 'mouseover'], () => {
        this.classList.remove('active')
    });
    console.log(event)
};

function outsideClick(element, events, callback) {
    const outSide = 'data-outside'
    const html = document.documentElement;
    events.forEach (userEvent => {
    html.addEventListener(userEvent, handleOutside)
    })
    element.setAttribute('outSide', '')

    function handleOutside(event){
        if(!element.contains(event.target)){
            events.forEach (userEvent => {
                html.removeEventListener(userEvent, handleOutside)
                })
                callback();
        }
        
    }
}

function initAccordionList(){
    const accordionList = document.querySelectorAll('.js-accordion dt');
    if(accordionList.length) {
    accordionList[0].nextElementSibling.classList.add('ativo');
    function activeAccordion(){
      this.classList.toggle('ativo');
      this.nextElementSibling.classList.toggle('ativo');
    }
    accordionList.forEach((item) => {
      item.addEventListener('click',activeAccordion);
    });
    }
    }
     function initAnimacaoScrool(){
    const sections = document.querySelectorAll('[data-anime="scroll"]');
    if(sections.length){
    const windowMetade = window.innerHeight * 0.6;
    function animaScroll(){
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top-windowMetade;
        if(sectionTop < 0) {
          section.classList.add('ativo');
        }
      })
    }
    animaScroll();
    window.addEventListener('scroll', animaScroll);
    }
    }
    function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    function activeTab(index){
      tabContent.forEach((section) =>{
        section.classList.remove('ativo')
      })
      console.log()
      tabContent[index].classList.add('ativo', tabContent[index].dataset.anime)
    };
    tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click',  () => {
      activeTab(index);
      });
    });
    }
    
    function initScroolSuave(){
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
     function openMenu() {
    
}

const menuButton = document.querySelector('[data-menu="button"]');
const menuList = document.querySelector('[data-menu="list"]');

menuButton.addEventListener('click', ativandoMenu);

function ativandoMenu(event) {
    menuList.classList.toggle('active');
    menuButton.classList.toggle('active');

}
function initModal() {

}
 const botaoAbrir = document.querySelector('[data-modal="abrir"]');
 const botaoFechar = document.querySelector('[data-modal="fechar"]');
 const containerModal = document.querySelector('[data-modal="container"]')


 function abrirModal(event){
     console.log(event)
    event.preventDefault();
    containerModal.classList.add('ativo')
 }

 function fecharModal(event){
     event.preventDefault();
    containerModal.classList.remove('ativo')
 }
 function clicarForaModal(event){
     if(event.target === this){
         fecharModal(event)
     }
 }

 botaoAbrir.addEventListener("click", abrirModal);
 botaoFechar.addEventListener("click", fecharModal);
 containerModal.addEventListener("click", clicarForaModal)
 console.log(containerModal)
 function initTooltip(){   

}

const tooltips = document.querySelectorAll('[data-tooltip]')
console.log(tooltips)
 
tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver)
})

function onMouseOver(event){
   const tooltipBox = criarTooltipBox(this)
   
   onMouseMove.tooltipBox = tooltipBox;
   this.addEventListener("mousemove", onMouseMove)

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave)

}
const onMouseLeave = {
    tooltipBox : '',
    element : '',
    handleEvent(){
        this.tooltipBox.remove();
        this.element.removeEventListener("mouseleave", onMouseLeave)
        
    }
}
const onMouseMove = {
    handleEvent(event){
        this.tooltipBox.style.top = event.pageY + 20 + 'px';
        this.tooltipBox.style.left = event.pageX + 20 + 'px';
    }
}


function criarTooltipBox(element){
    const tootlipBox = document.createElement('div')
    const text = element.getAttribute('aria-label')
    tootlipBox.classList.add('tooltip')
    tootlipBox.innerText = text;
    document.body.appendChild(tootlipBox);
    return tootlipBox;
}
