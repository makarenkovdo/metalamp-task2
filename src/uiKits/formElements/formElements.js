import './formElements.scss'
import dropdownSvg from './../../components/dropdown-guests/dropdown-guests.svg'
import minusSvg from './../../components/dropdown/minus.svg'
import plusSvg from './../../components/dropdown/plus.svg'

let isOpen = false
const $dropdownContainerImg = document.querySelector('.js-img-box')
const $dropdownContainer = document.querySelector('.js-dropdown-guests')
const $dropdownBoxContainer = document.querySelector('.js-dropdown-popup')
const $dropdownText = document.querySelector('.js-dropdown-text')

const $counterSelector1 = document.querySelector('.js-counter1')
const $counterSelector2 = document.querySelector('.js-counter2')
const $counterSelector3 = document.querySelector('.js-counter3')

const $decreaseSelector1 = document.querySelector('.js-decrease1')
const $increaseSelector1 = document.querySelector('.js-increase1')
const $decreaseSelector2 = document.querySelector('.js-decrease2')
const $increaseSelector2 = document.querySelector('.js-increase2')
const $decreaseSelector3 = document.querySelector('.js-decrease3')
const $increaseSelector3 = document.querySelector('.js-increase3')

$dropdownContainerImg.addEventListener('click', handleClick)

function handleClick() {
    isOpen ? closeDropdownBox() : openDropdownBox()
    function closeDropdownBox() {
        $dropdownBoxContainer.classList.add('hide')

        isOpen = false
    }
    function openDropdownBox() {
        const x = $dropdownContainer.getBoundingClientRect().x
        const y =
            $dropdownContainer.getBoundingClientRect().y +
            $dropdownContainer.getBoundingClientRect().height
        $dropdownBoxContainer.classList.remove('hide')
        $dropdownBoxContainer.style.cssText = `left:${x}px; top: ${y}px; `

        isOpen = true
    }
}

function makeCounter() {
    let commonCounter = 0
    let counter1 = 0
    let counter2 = 0
    let counter3 = 0
    let guestWordEnding = 'ь'

    function setGuestWordEnging(guestWordEnding, commonCounter) {
        if (commonCounter > 1 && commonCounter < 5) {
            return (guestWordEnding = 'я')
        }
        if (commonCounter > 5 || commonCounter < 1) {
            return (guestWordEnding = 'ей')
        }
        if (commonCounter === 1) {
            return (guestWordEnding = 'ь')
        }
        return guestWordEnding
    }

    return function (shift, counterSelector) {
        switch (counterSelector.attributes.class.value) {
            case 'counter js-counter1':
                if (counter1 === 0 && shift < 0) {
                    return counter1
                } else {
                    counter1 += shift
                    commonCounter += shift
                    guestWordEnding = setGuestWordEnging(
                        guestWordEnding,
                        commonCounter
                    )

                    counterSelector.innerHTML = counter1
                    $dropdownText.innerHTML = `${commonCounter} гост${guestWordEnding}`
                }
                break
            case 'counter js-counter2':
                if (counter2 === 0 && shift < 0) {
                    return counter2
                } else {
                    counter2 += shift
                    commonCounter += shift
                    guestWordEnding = setGuestWordEnging(
                        guestWordEnding,
                        commonCounter
                    )
                    counterSelector.innerHTML = counter2
                    $dropdownText.innerHTML = `${commonCounter} гост${guestWordEnding}`
                }
                break
            case 'counter js-counter3':
                if (counter3 === 0 && shift < 0) {
                    return counter3
                } else {
                    counter3 += shift
                    commonCounter += shift
                    guestWordEnding = setGuestWordEnging(
                        guestWordEnding,
                        commonCounter
                    )
                    counterSelector.innerHTML = counter3
                    $dropdownText.innerHTML = `${commonCounter} гост${guestWordEnding}`
                }
                break
            default:
                return false
        }
    }
}

//closures implementation
// const counter1 = makeCounter($counterSelector1)
// const counter2 = makeCounter($counterSelector2)
// const counter3 = makeCounter($counterSelector3)

// // counter1(0)
// $increaseSelector1.addEventListener('click', () => counter1(1))
// $decreaseSelector1.addEventListener('click', () => counter1(-1))
// $increaseSelector2.addEventListener('click', () => counter2(1))
// $decreaseSelector2.addEventListener('click', () => counter2(-1))
// $increaseSelector3.addEventListener('click', () => counter3(1))
// $decreaseSelector3.addEventListener('click', () => counter4(-1))

const counter = makeCounter()

$increaseSelector1.addEventListener('click', () =>
    counter(1, $counterSelector1)
)
$decreaseSelector1.addEventListener('click', () =>
    counter(-1, $counterSelector1)
)
$increaseSelector2.addEventListener('click', () =>
    counter(1, $counterSelector2)
)
$decreaseSelector2.addEventListener('click', () =>
    counter(-1, $counterSelector2)
)
$increaseSelector3.addEventListener('click', () =>
    counter(1, $counterSelector3)
)
$decreaseSelector3.addEventListener('click', () =>
    counter(-1, $counterSelector3)
)
