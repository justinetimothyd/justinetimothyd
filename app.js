const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

// Toggle mobile menu
menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun= setTimeout(() => {
    nextDom.click();
}, timeAutoNext);

nextDom.onclick = function(){
    showSlider('next');
}
function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    }
    // } else{
    //     let positionLastItem = itemSlider.length - 1;
    //     listItemDom.prepend(itemSlider[positionLastItem]);
    //     thumbnailDom.prepend(itemThumbnail[positionLastItem]);
    //     carouselDom.classList.add('prev');
    // }
    
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning)

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);
}