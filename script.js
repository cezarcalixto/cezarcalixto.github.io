








 //const Don = {
 // seletor: 'li',
  ////element() {
 //   return document.querySelector(this.seletor)
 // },
  //ativar(){
 //   this.element().classList.toggle('ativo');
//  }
//};
//Don.seletor = 'p',
//Don.ativar();

//function Dom(seletor) {
 //this.element = function () {
  // return document.querySelector(seletor);
 //}
 //this.ativar = function addevent () {
  // this.element().classList.toggle('testeDeClasse');
// }
//}
//const testeDon = new Dom('li');

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os vaoresl de Recebimento
const transacoes = [
  {
  descricao: 'Taxa do Pão',
  valor: 'R$ 39',
  },
  {
  descricao: 'Taxa do Mercado',
  valor: 'R$ 129',
  },
  {
  descricao: 'Recebimento de Cliente',
  valor: 'R$ 99',
  },
  {
  descricao: 'Taxa do Banco',
  valor: 'R$ 129',
  },
  {
  descricao: 'Recebimento de Cliente',
  valor: 'R$ 49',
  },
 ];
var li = document.querySelectorAll('li');
var liArray = Array.from(li);
console.log(li);
console.log(liArray);

var obj = {
  0: 'carro',
  1:'honrda',
  3: '127.000',
  length: 4,
};
var objArray = Array.from(obj);
console.log(objArray)

const frutas = ['Banana', 'Maçã',  ['Pera', 'Melão']];
frutas.reverse();
console.log(frutas)
const div = document.querySelector('[data-anima-scrool]')
console.log(div)