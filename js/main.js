

const servicesMenu = document.querySelector('.second-page-service-menu-content');
const servicesMenuContent = document.querySelector('.second-page-service-opinion-content').children;
let index = 0;

servicesMenu.addEventListener('click', (event) =>{
    console.log(event);
     for(tab of servicesMenu.children){
         tab.classList.remove('active');     
     }
    event.target.classList.add('active');
     for (let i = 0; i < servicesMenuContent.length; i++) {
        if(event.target.textContent === servicesMenuContent[i].dataset.index){
            index = i;
        }
     }
     activeContent (index);
})

function activeContent (index){
    for(tab of servicesMenuContent){
        tab.classList.remove('active');
    }
    servicesMenuContent[index].classList.add('active');
}