import './formElements.scss'
import someSvg from './../../components/dropdown-guests/dropdown-guests.svg'

const $dropdownContainerImg = document.querySelector('.js-img-box')
const $dropdownContainer = document.querySelector('.js-dropdown-guests')

$dropdownContainerImg.addEventListener('click', createDropdownBox)

function createDropdownBox() {
    const dropdownBox = document.createElement('div')
    dropdownBox.classList.add('dropdown-box')
    // $dropdownContainer.insertAdjacentElement('beforeend', <div>asd</div>)
    console.log('CLICK!')
    $dropdownContainer.insertAdjacentElement('beforeend', dropdownBox)
}
