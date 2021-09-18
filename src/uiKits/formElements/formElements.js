import './formElements.scss'
import someSvg from './../../components/dropdown-guests/dropdown-guests.svg'

let isOpen = false
const $dropdownContainerImg = document.querySelector('.js-img-box')
const $dropdownContainer = document.querySelector('.js-dropdown-guests')
const $dropdownBoxContainer = document.querySelector('.js-dropdown-popup')

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
