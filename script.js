var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'),
    item = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.carousel .timeRunning')


let timeAutoNext = 7000
let runTimeOut

nextBtn.onclick = function() {
    showSlider('next')
}

prevBtn.onclick = function(){
    showSlider('prev')
}

let runNextAuto = setTimeout( () =>{
    nextBtn.click()
}, timeAutoNext)


function restTimeAnimation() {
    runningTime.style.animation = 'none'
    runningTime.offsetHeight
    runningTime.style.animation = null
    runningTime.style.animation = 'runningTime 7s linear 1 forwards'    
}


function showSlider(type) {
    let sliderItemDom = list.querySelectorAll('.carousel .list .item')
    if(type === 'next'){
        list.appendChild(sliderItemDom[0])
        carousel.classList.add('next')
    } else{
        list.prepend(sliderItemDom[sliderItemDom.length - 1])
        carousel.classList.add('prev')
    }

    clearTimeout(runNextAuto)
    runNextAuto = setTimeout( () =>{
        nextBtn.click()
    }, timeAutoNext)

    restTimeAnimation()
}



















