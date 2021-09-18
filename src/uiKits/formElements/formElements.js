import './formElements.scss'
import someSvg from './../../components/dropdown-guests/dropdown-guests.svg'

let isOpen = false
const $dropdownContainerImg = document.querySelector('.js-img-box')
const $dropdownContainer = document.querySelector('.js-dropdown-guests')
const $dropdownBoxContainer = document.querySelector(
    '.js-dropdown-box-container'
)
$dropdownContainerImg.addEventListener('click', handleClick)

function handleClick() {
    console.log(isOpen)
    isOpen ? closeDropdownBox() : openDropdownBox()
    function closeDropdownBox() {
        const $dropdownBox = document.querySelector('dropdown-box')
        console.log($dropdownBox)
        $dropdownBoxContainer.innerHTML = ''
        console.log('CLOSE!!')
        isOpen = false
    }
    function openDropdownBox() {
        const dropdownBox = document.createElement('div')
        dropdownBox.classList.add('dropdown-box')
        // $dropdownContainer.insertAdjacentElement('beforeend', <div>asd</div>)
        console.log('CLICK!')
        const x = $dropdownContainer.getBoundingClientRect().x
        const y =
            $dropdownContainer.getBoundingClientRect().y +
            $dropdownContainer.getBoundingClientRect().height
        console.log(x, y)
        // dropdownBox.style.left = x
        // dropdownBox.style.top = y
        dropdownBox.style.cssText = `left:${x}px; top: ${y}px; `
        $dropdownBoxContainer.insertAdjacentElement('beforeend', dropdownBox)

        isOpen = true
    }
}
