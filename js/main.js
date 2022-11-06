

const servicesMenu = document.querySelector('.second-page-service-menu-content');
const servicesMenuContent = document.querySelector('.second-page-service-opinion-content').children;
let index = 0;

servicesMenu.addEventListener('click', (event) =>{
     for(tab of servicesMenu.children){
         tab.classList.remove('active');     
     }
    event.target.classList.add('active');
     for (let i = 0; i < servicesMenuContent.length; i++) {
        if(event.target.textContent === servicesMenuContent[i].dataset.index){
            index = i;
        }
     }
     activeContent (index, servicesMenuContent);
})

function activeContent (index, array){
    for(tab of array){
        tab.classList.remove('active');
    }
    array[index].classList.add('active');
}


// work

const workMenu = document.querySelector('.our-work-list');
const workMenuImgItem =document.querySelectorAll(".our-work-img-item");

console.log(workMenuImgItem);

function filterImg (name){
    for (item of workMenuImgItem) {
        item.style.display ='none'; 
    }
    if(name === 'All'){
        let i = 0;
        for (item of workMenuImgItem) {
                item.style.display ='block'; 
                i++;
                if(i === 12){
                    return;
                }
        }
            return;
        }

    for (let i = 0; i < workMenuImgItem.length; i++) {
        if(name === workMenuImgItem[i].dataset.index){
            workMenuImgItem[i].style.display ='block';
        }
    }
}

workMenu.addEventListener('click', (event) =>{
    for(tab of workMenu.children){
        tab.classList.remove('active-item');     
    }
   event.target.classList.add('active-item');
   filterImg(event.target.textContent);
})



