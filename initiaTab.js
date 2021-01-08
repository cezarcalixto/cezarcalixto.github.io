export default function initTabNav() {
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
    