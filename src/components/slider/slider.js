// $(document).ready(function () {
//     let $quantityArray = $(`.slider`)

// })
//  let $sliderQuantityArray = $(`.slider-block`)
//  let $imgQuantityArray = $(`.slider__item`)

// function imageSwitcher() {
//     let index = 0
// }

// let $sliderImage = document.addEventListener('click',()=> imageSwitcher)
import jquery from 'jquery'
import '../../../node_modules/@splidejs/splide/dist/css/splide.min.css'
import Splide from '@splidejs/splide'

// new Splide('.splide', {
//     classes: {
//         arrows: 'splide__arrows splide__new-arrows',
//         arrow: 'splide__arrow splide__new-arrow',
//         prev: 'splide__arrow--prev splide__new-arrows_prev',
//         next: 'splide__arrow--next splide__new-arrows_next',
//     },
// }).mount()

var elms = document.getElementsByClassName('splide')

for (var i = 0; i < elms.length; i++) {
    new Splide(elms[i]).mount()
}

/* <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.578125 1.40625L1.98438 2.38311e-07L7.98438 6L1.98438 12L0.578125 10.5938L5.17188 6L0.578125 1.40625Z" fill="white"/>
</svg> */
