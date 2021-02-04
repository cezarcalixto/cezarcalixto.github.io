import animaNumero from './anima-numero.js';
export default function initfetchAnimais() {
    
}

async function fetchAnimais(url) {
    const responseAnimais = await fetch(url);
    const jsonAnimais = await responseAnimais.json();
    const numeros = document.querySelector('.numeros-grid')
    jsonAnimais.forEach((animal) => {
       const divAnimal = createAnimal(animal);
       numeros.appendChild(divAnimal)
    })
    animaNumero();
}

    function createAnimal(animal) {
        const div = document.createElement('div')
        div.classList.add('.numero-animal');
        div.innerHTML = `<h3>${animal.especie}</h3><span>${animal.total}</span>`;
        return div;
    }

fetchAnimais('./animaisapi.json')