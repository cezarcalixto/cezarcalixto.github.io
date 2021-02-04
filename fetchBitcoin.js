export default function  initfetchBitcoin() {
    
}
fetch('https://blockchain.info/ticker')
.then(response => response.json())
.then(body =>{
    const span  = document.querySelector('.btc-preco')
    span.innerText = (1000 / (body.BRL.sell)).toFixed(4);
    console.log(body.BRL.buy)
}).catch(erro => {
    console.log(Error(erro))
})