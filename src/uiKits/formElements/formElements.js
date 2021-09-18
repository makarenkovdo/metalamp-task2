import './formElements.scss'
import someSvg from './../../components/dropdown-guests/dropdown-guests.svg'

console.log('formElements here')
const $dropdownBoxImg = document.querySelector('.js-img-box')
$dropdownBoxImg.addEventListener('click', dropdownBoxCreate)

function dropdownBoxCreate() {
    const $dropdownContainer = document.querySelector('.js-dropdown-guests')
    // $dropdownContainer.insertAdjacentElement('beforeend', <div>asd</div>)
    console.log('CLICK!')
}
