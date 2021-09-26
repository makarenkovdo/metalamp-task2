const $checkboxListContainer = document.querySelector(
    '.js-checkbox-expandable-list'
)
const $checkboxListPopup = document.querySelector(
    '.js-checkbox-expandable-list-popup'
)
const $checkboxListText = document.querySelector(
    '.js-checkbox-expandable-list-text'
)
const $checkboxListIconSelector = document.querySelector(
    'js-checkbox-expandable-list-icon'
)
const $checkboxListIconBox = document.querySelector(
    '.js-checkbox-expandable-list-icon-box'
)

$checkboxListIconBox.addEventListener('click', handleCheckboxListClick)

function handleCheckboxListClick() {
    $checkboxListPopup.classList.contains('hide')
        ? openCheckboxList()
        : closeCheckboxList()
    function closeCheckboxList() {
        $checkboxListPopup.classList.add('hide')
        $checkboxListIconSelector.src =
            './img/close-checkbox-expandable-list.svg'
    }
    function openCheckboxList() {
        const x = $checkboxListContainer.getBoundingClientRect().x
        const y =
            $checkboxListContainer.getBoundingClientRect().y +
            $checkboxListContainer.getBoundingClientRect().height
        $checkboxListPopup.classList.remove('hide')
        $checkboxListPopup.style.cssText = `left:${x}px; top: ${y}px; `
        $checkboxListIconSelector.src =
            './img/open-checkbox-expandable-list.svg'
    }
}
