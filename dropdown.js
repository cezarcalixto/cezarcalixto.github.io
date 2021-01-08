export default function dropdown(){

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


