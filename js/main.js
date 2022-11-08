
// Service Menu
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
const downloadBtn = document.querySelector('.our-work-load-button');
const loader = document.querySelector('.loader');
amount=12;
let checkGroup = 'All';
function filterImg (name){
    for (item of workMenuImgItem) {
        item.style.display ='none'; 
    }
    downloadBtn.style.display = 'flex';
    let i = 0;
    if(name === 'All'){
        for (item of workMenuImgItem) {
                item.style.display ='block'; 
                i++;
                if(i === amount){
                    return;
                }
        }
        }else{
            for (let index = 0; index < workMenuImgItem.length; index++) {
                if(name === workMenuImgItem[index].dataset.index){
                    workMenuImgItem[index].style.display ='block';
                    i++;
                    if(i === amount){
                        downloadBtn.style.display = 'flex';
                        return;
                    }
                    if(i<amount){
                        downloadBtn.style.display = 'none';
                    }
                }
        
            }
        }

}
filterImg (checkGroup);
workMenu.addEventListener('click', (event) =>{
    for(tab of workMenu.children){
        tab.classList.remove('active-item');     
    }
   event.target.classList.add('active-item');
   amount=12;
   filterImg(event.target.textContent);
   checkGroup = event.target.textContent;
   console.log(checkGroup);
})

console.log(checkGroup);

downloadBtn.addEventListener('click', () => {
    amount= amount + 12;
    loader.classList.add('active');   
    downloadBtn.style.display = 'none';
    setTimeout(function(){ 
    filterImg(checkGroup);
    loader.classList.remove('active')
    loader.classList.add('disable')
    }, 2000)
    setTimeout(function(){ 
    if(amount === 36){
        downloadBtn.style.display = 'none';
    } else{
        downloadBtn.style.display = 'flex';
    }},2100);
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