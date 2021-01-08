export default function initTooltip(){   

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


const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const tempo = document.querySelector('.tempo');

iniciar.addEventListener('click', iniciarTempo);

pausar.addEventListener('click', pausarTempo);

pausar.addEventListener('dblclick', resetarTempo);

let i = 0;
let timer;

function iniciarTempo() {
    timer = setInterval(()=>{
       if( i<30){ tempo.innerText = `O tempo está correndo ${i++}`}
       else{tempo.innerText = `O tempo está no fim ${i++}`};
    }, 1000);
    iniciar.setAttribute('disabled', '');
    
};

function pausarTempo() {
   clearInterval(timer)
   iniciar.removeAttribute('disabled')
};

function resetarTempo() {
    tempo.innerText = 0;
    i = 0;
}
