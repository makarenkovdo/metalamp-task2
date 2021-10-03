console.log('something')

const $likeButtonSelector = document.querySelector(`.js-like-button`)
const $likeIconSelector = document.querySelector('.js-like-button__icon')
const $likeButtonCounter = document.querySelector('.js-like-button__counter')

// $likeButtonSelector.addEventListener('click', () =>
//     handleLikeButtonClick(twoLikesButton)
// )

par = document.querySelector('.form-elements__like-button-container')
par.addEventListener('click', function (e) {
    handleLikeButtonClick(twoLikesButton, e)
})

function likeButtonCounter(n) {
    let counter = n
    return function changeLikeButtonCounter(shift) {
        counter += shift
        e.target.innerHTML = counter
    }
}
const twoLikesButton = likeButtonCounter(2)
const elevenLikesButton = likeButtonCounter(11)

function handleLikeButtonClick(currentButton, e) {
    console.log(e.target.parentElement)

    if (e.target.classList.contains('like-button_active')) {
        e.target.classList.remove('like-button_active')
        e.target.classList.remove('like-button__counter-active')
        e.currentTarget.querySelector('.js-like-button__icon').src =
            './img/like-border.svg'
        currentButton(-1)
    } else {
        e.target.classList.add('like-button_active')
        e.target.classList.add('like-button__counter-active')

        e.currentTarget.querySelector('.js-like-button__icon').src =
            './img/like-active.svg'
        currentButton(+1)
    }
}
// $(document).ready(function () {
//     console.log('ready!')
// })
