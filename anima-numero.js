export default function animaNumero() {
    
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