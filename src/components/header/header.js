const $burgerIcon = document.querySelector('.js-header__hamburger-icon')
const $burgerMenu = document.querySelector('.js-header__hamburger-menu')
console.log($burgerMenu);
let isOpen = false;
const handleClick = function handleBurgerClick() {
    if (!isOpen) {
        $burgerMenu.classList.remove('js-hider')
        $burgerMenu.classList.add('js-header__hamburger_animate')
    }
    if (isOpen) {
        $burgerMenu.classList.add('js-hider')
        $burgerMenu.classList.remove('js-header__hamburger_animate')
    }
    isOpen = !isOpen;

}

$burgerIcon.addEventListener('click', handleClick)