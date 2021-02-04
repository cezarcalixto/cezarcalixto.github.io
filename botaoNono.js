export default function botaoNovo() {
    
}

class Button {
   constructor(text, color){
      this.text = text;
      this.color = color;
   }
   get element(){
      const type = this._elementType || 'button'
      const buttonElemento = document.createElement(type);
      buttonElemento.innerText = this.text;
      buttonElemento.style.color = this.color;
      return buttonElemento
   }
   set element(type){
      this._elementType = type
      
   }
}

const newButton = new Button("compre agora!", "white");
newButton.type = 'div'
const contato = document.querySelector('.contato')
      contato.appendChild(newButton.element)

console.log(newButton.element)

class Veiculo{
   constructor(rodas, capacete, combustivel){
      this.rodas = rodas;
      this.capacete = capacete;
      this.combustivel = combustivel
   }
   acelerar(){
      super.acelerar()
   }
}

class Moto extends Veiculo {
   empinar() {
      console.log('Moto empinou com' + this.rodas + ' rodas ')
   }
}

const honda = new Moto(2, true, 'gasolina')
console.log(honda.rodas)
