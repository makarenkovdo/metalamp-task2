const $checkboxListContainer = document.querySelector('.js-checkbox-list')
const $checkboxListPopup = document.querySelector('.js-checkbox-list-popup')
const $checkboxListText = document.querySelector('.js-checkbox-list-text')
const $checkboxListIconSelector = document.querySelector(
    'js-checkbox-list-icon'
)
const $checkboxListIconBox = document.querySelector(
    '.js-checkbox-list-icon-box'
)

$checkboxListIconBox.addEventListener('click', handleCheckboxListClick)

function handleCheckboxListClick() {
    $checkboxListPopup.classList.contains('hide')
        ? openCheckboxList()
        : closeCheckboxList()
    function closeCheckboxList() {
        $checkboxListPopup.classList.add('hide')
        $checkboxListIconSelector.src = './img/close-checkbox-list.svg'
    }
    function openCheckboxList() {
        const x = $checkboxListContainer.getBoundingClientRect().x
        const y =
            $checkboxListContainer.getBoundingClientRect().y +
            $checkboxListContainer.getBoundingClientRect().height
        $checkboxListPopup.classList.remove('hide')
        $checkboxListPopup.style.cssText = `left:${x}px; top: ${y}px; `
        $checkboxListIconSelector.src = './img/open-checkbox-list.svg'
    }
}
