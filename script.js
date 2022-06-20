const slideContainer = document.querySelector('.slide-container')
const slideRight  = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slideLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0

slideLeft.style.top = `-${(slideLength -1) *  100}vh`