export default function openMenu() {
    
}

const menuButton = document.querySelector('[data-menu="button"]');
const menuList = document.querySelector('[data-menu="list"]');

menuButton.addEventListener('click', ativandoMenu);

function ativandoMenu(event) {
    menuList.classList.toggle('active');
    menuButton.classList.toggle('active');

}

