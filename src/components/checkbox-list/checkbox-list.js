let isCheckboxListOpen = false
const $checkboxListContainerImg = document.querySelector(
    '.js-checkbox-list-img-box'
)
const $checkboxListContainer = document.querySelector(
    '.js-checkbox-list-guests'
)
const $checkboxListBoxContainer = document.querySelector(
    '.js-checkbox-list-popup'
)
const $checkboxListText = document.querySelector('.js-checkbox-list-text')
const $checkboxListIconSelector = document.querySelector(
    'js-checkbox-list-icon'
)

$checkboxListContainerImg.addEventListener('click', handleCheckboxListClick)

function handleCheckboxListClick() {
    isCheckboxListOpen ? closeCheckboxList() : openCheckboxList()
    function closeCheckboxList() {
        $checkboxListBoxContainer.classList.add('hide')
        $checkboxListIconSelector.src = './img/close-checkbox-list.svg'

        isCheckboxListOpen = false
    }
    function openCheckboxList() {
        const x = $checkboxListContainer.getBoundingClientRect().x
        const y =
            $checkboxListContainer.getBoundingClientRect().y +
            $checkboxListContainer.getBoundingClientRect().height
        $checkboxListBoxContainer.classList.remove('hide')
        $checkboxListBoxContainer.style.cssText = `left:${x}px; top: ${y}px; `
        $checkboxListIconSelector.src = './img/open-checkbox-list.svg'

        isCheckboxListOpen = true
    }
}
