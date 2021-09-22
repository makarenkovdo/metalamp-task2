console.log('something')
const $likeButtonSelector = document.querySelector('.js-like-button')
const $likeIconSelector = document.querySelector('.js-like-button-icon')
const $likeButtonCounter = document.querySelector('.js-like-button-counter')
$likeButtonSelector.addEventListener('click', () =>
    handleLikeButtonClick(twoLikesButton)
)
function likeButtonCounter(n) {
    let counter = n
    return function changeLikeButtonCounter(shift) {
        counter += shift
        $likeButtonCounter.innerHTML = counter
    }
}
const twoLikesButton = likeButtonCounter(2)
const elevenLikesButton = likeButtonCounter(11)

function handleLikeButtonClick(currentButton) {
    console.log('CLICK')
    if ($likeButtonSelector.classList.contains('like-button-active')) {
        $likeButtonSelector.classList.remove('like-button-active')
        $likeIconSelector.src = './img/like-border.svg'
        currentButton(-1)
    } else {
        console.log('ADD CLASS')
        $likeButtonSelector.classList.add('like-button-active')
        $likeIconSelector.src = './img/like-active.svg'
        currentButton(+1)
    }
}
// $(document).ready(function () {
//     console.log('ready!')
// })
