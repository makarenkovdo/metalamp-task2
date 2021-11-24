let $quantityArray = $(`.like-button`)
const $likeButtonSelector = []
const $likeIconSelector = []
const $likeButtonCounter = []
for (let i = 1; i <= $quantityArray.length; i++) {
    $likeButtonSelector[i] = document.querySelector(
        `.js-like-button_instance-${i}`
    )
    $likeIconSelector[i] = document.querySelector(
        `.js-like-button__icon_instance-${i}`
    )
    $likeButtonCounter[i] = document.querySelector(
        `.js-like-button__counter_instance-${i}`
    )
    $likeButtonSelector[i].addEventListener('click', function (e) {
        handleLikeButtonClick(likeButtonCounter, e)
    })
}

// $likeButtonSelector.addEventListener('click', () =>
//     handleLikeButtonClick(twoLikesButton)
// )

function likeButtonCounter(shift, currentId) {
    let counter = +$likeButtonCounter[currentId].innerHTML
    counter += shift
    $likeButtonCounter[currentId].innerHTML = counter
}
// const twoLikesButton = likeButtonCounter(2)
// const elevenLikesButton = likeButtonCounter(11)

function handleLikeButtonClick(currentButton, e) {
    let currentId = e.target.id

    if (
        $likeButtonSelector[currentId].classList.contains('like-button_active')
    ) {
        $likeButtonSelector[currentId].classList.remove('like-button_active')
        $likeButtonCounter[currentId].classList.remove(
            'like-button__counter-active'
        )
        $likeIconSelector[currentId].src = './img/like-border.svg'
        currentButton(-1, currentId)
    } else {
        $likeButtonSelector[currentId].classList.add('like-button_active')
        $likeButtonCounter[currentId].classList.add(
            'like-button__counter-active'
        )
        $likeIconSelector[currentId].src = './img/like-active.svg'
        currentButton(+1, currentId)
    }
}
