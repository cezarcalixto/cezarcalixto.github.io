export default function  date() {
    
};

const funcionamento = document.querySelector('[data-semana]');

const diasAberto = funcionamento.dataset.semana.split(',').map(Number);

const horarioAberto = funcionamento.dataset.horario.split(',').map(Number);

const dia = new Date();

const diaHoje = dia.getDay();

const horarioHoje = dia.getHours();

const SemanaAberto = diasAberto.indexOf(diaHoje) !== -1;

const horarioAbertoFunc = (horarioHoje >= horarioAberto[0] && horarioHoje < horarioAberto[1]);



if( SemanaAberto && horarioAbertoFunc){
    funcionamento.classList.add('aberto');
};

console.log(horarioAbertoFunc)




 const contato = document.querySelector('#contato');
 console.log(contato)