const $burgerIcon = document.querySelector('.js-header__hamburger-icon')
const $burgerMenu = document.querySelector('.js-header__hamburger-menu')
console.log($burgerMenu);
let isOpen = false;
const handleClick = function handleBurgerClick() {
    if (!isOpen) $burgerMenu.classList.remove('js-hider')
    if (isOpen) $burgerMenu.classList.add('js-hider')
    isOpen = !isOpen;

}

$burgerIcon.addEventListener('click', handleClick)