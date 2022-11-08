
// Service Menu
const servicesMenu = document.querySelector('.second-page-service-menu-content');
const servicesMenuContent = document.querySelector('.second-page-service-opinion-content').children;
const downloadBtn = document.querySelector('.our-work-load-button');
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

function filterImg (name){
    for (item of workMenuImgItem) {
        item.style.display ='none'; 
    }
    downloadBtn.style.opacity = '1';
    let i = 0;
    if(name === 'All'){
        for (item of workMenuImgItem) {
                item.style.display ='block'; 
                i++;
                if(i === 12){
                    return;
                }
        }
            return;
        }
    for (let index = 0; i < workMenuImgItem.length; index++) {
        if(name === workMenuImgItem[index].dataset.index){
            workMenuImgItem[index].style.display ='block';
            i++;
            if(i === 12){
                downloadBtn.style.opacity = '1';
                return;
            }
            if(i<12){
                downloadBtn.style.opacity = '0';
            }
        }

    }
}
filterImg ('All');
workMenu.addEventListener('click', (event) =>{
    for(tab of workMenu.children){
        tab.classList.remove('active-item');     
    }
   event.target.classList.add('active-item');
   filterImg(event.target.textContent);
})



downloadBtn.addEventListener('click', () => {
    flag = 24
    loader.classList.add(active)   
    downloadBtn.style.opacity = '0';
    setTimeout(function(){ workBlog.forEach((i)=>{
        i.classList.add(active)
        i.classList.remove(disable)
    })
    amazingTabs.forEach((elem)=>{
        if(elem.dataset.article === 'all'){
            elem.classList.add(active)
        }else{
            elem.classList.remove(active)
        }
        
    })
    loader.classList.remove(active)
    loader.classList.add(disable)
    }, 3000)
})

// say abou us

const clientDots =document.querySelector('.say-about-us-dots');
const clientDot =document.querySelectorAll('.say-about-us-img-dot');
const clientComment = document.querySelectorAll('.say-about-us-item');

const prevBtn = document.querySelector('.prev-arrow');
const nextBtn = document.querySelector('.next-arrow');

number = 0;
clientDots.addEventListener('click', clickDots); 
function clickDots(event){    
    for(let a = 0; a < clientDot.length; a++){
        clientDot[a].classList.remove('active');
    }
   event.target.classList.add('active');
    for (let i = 0; i < clientComment.length; i++) {
       if(event.target.dataset.index === clientComment[i].dataset.index){
           number = i;
       }
    }
    activeContent (number, clientComment);
}



prevBtn.addEventListener('click',() =>{ 
    if (number === 0 ){
        number=clientComment.length-1;
    } else{
        number--;
    }
    for(let a = 0; a < clientDot.length; a++){
        clientDot[a].classList.remove('active');
    }
    clientDot[number].classList.add('active');
    activeContent(number, clientComment);
})
nextBtn.addEventListener('click',() =>{
    if (number === clientComment.length-1){
        number= 0;
    } else{
        number++;
    }
    for(let a = 0; a < clientDot.length; a++){
        clientDot[a].classList.remove('active');
    }
    clientDot[number].classList.add('active');
    activeContent(number, clientComment);
    
})