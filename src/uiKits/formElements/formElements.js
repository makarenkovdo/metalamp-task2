import './formElements.scss'
import dropdownSvg from './../../components/dropdown-guests/dropdown-guests.svg'
import minusSvg from './../../components/dropdown/minus.svg'
import plusSvg from './../../components/dropdown/plus.svg'

let isOpen = false
const $dropdownContainerImg = document.querySelector('.js-img-box')
const $dropdownContainer = document.querySelector('.js-dropdown-guests')
const $dropdownBoxContainer = document.querySelector('.js-dropdown-popup')
const $counterSelector = document.querySelector('.js-counter')
const $decreaseSelector = document.querySelector('.js-decrease')
const $increaseSelector = document.querySelector('.js-increase')

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
function makeCounter(a) {
    console.log(makeCounter)

    let currentCounter = 0
    return function (shift) {
        console.log(currentCounter)
        console.log(shift)
        console.log('inside zamik')
        currentCounter += shift
        $counterSelector.innerHTML = currentCounter
        return currentCounter + shift
    }
}

const counter1 = makeCounter()
// counter1(0)
$increaseSelector.addEventListener('click', () => counter1(1))
$decreaseSelector.addEventListener('click', () => counter1(-1))
