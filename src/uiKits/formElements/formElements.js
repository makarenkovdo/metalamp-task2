import './formElements.scss'
import dropdownSvg from './../../components/dropdown-guests/dropdown-guests.svg'
import minusSvg from './../../components/dropdown/minus.svg'
import plusSvg from './../../components/dropdown/plus.svg'

let isOpen = false
const $dropdownContainerImg = document.querySelector('.js-img-box')
const $dropdownContainer = document.querySelector('.js-dropdown-guests')
const $dropdownBoxContainer = document.querySelector('.js-dropdown-popup')

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
    console.log(isOpen)
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
        console.log(x, y)
        $dropdownBoxContainer.classList.remove('hide')
        $dropdownBoxContainer.style.cssText = `left:${x}px; top: ${y}px; `

        isOpen = true
    }
}

// function counter() {
//     const counter = 0
//     $counterSelector.innerHTML = counter
// }
// counter()

// function makeCounter() {
//     console.log(makeCounter)

//     let currentCounter = 0
//     return function (shift) {
//         console.log(shift)
//         console.log('inside zamik')
//         return currentCounter + shift
//     }
// }
function makeCounter(counterSelector) {
    console.log(makeCounter)

    let currentCounter = 0
    return function (shift) {
        console.log(currentCounter)
        console.log(shift)
        console.log('inside zamik')
        if (currentCounter === 0 && shift < 0) {
            return currentCounter
        } else currentCounter += shift
        counterSelector.innerHTML = currentCounter
        return currentCounter + shift
    }
}

const counter1 = makeCounter($counterSelector1)
const counter2 = makeCounter($counterSelector2)
const counter3 = makeCounter($counterSelector3)

// counter1(0)
$increaseSelector1.addEventListener('click', () => counter1(1))
$decreaseSelector1.addEventListener('click', () => counter1(-1))
$increaseSelector2.addEventListener('click', () => counter2(1))
$decreaseSelector2.addEventListener('click', () => counter2(-1))
$increaseSelector3.addEventListener('click', () => counter3(1))
$decreaseSelector3.addEventListener('click', () => counter4(-1))
