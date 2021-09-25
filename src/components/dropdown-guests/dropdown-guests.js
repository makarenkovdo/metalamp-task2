let isDropdownOpen = false
const $dropdownContainerImg = document.querySelector('.js-dropdown__img-box')
const $dropdownContainer = document.querySelector('.js-dropdown-guests')
const $dropdownBoxContainer = document.querySelector('.js-dropdown__popup')
const $dropdownText = document.querySelector('.js-dropdown__text')

const $counterSelector1 = document.querySelector('.js-dropdown__counter1')
const $counterSelector2 = document.querySelector('.js-dropdown__counter2')
const $counterSelector3 = document.querySelector('.js-dropdown__counter3')

const $decreaseSelector1 = document.querySelector('.js-dropdown__decrease1')
const $increaseSelector1 = document.querySelector('.js-dropdown__increase1')
const $decreaseSelector2 = document.querySelector('.js-dropdown__decrease2')
const $increaseSelector2 = document.querySelector('.js-dropdown__increase2')
const $decreaseSelector3 = document.querySelector('.js-dropdown__decrease3')
const $increaseSelector3 = document.querySelector('.js-dropdown__increase3')

$dropdownContainerImg.addEventListener('click', handleDropdownClick)

function handleDropdownClick() {
    isDropdownOpen ? closeDropdownBox() : openDropdownBox()
    function closeDropdownBox() {
        $dropdownBoxContainer.classList.add('hide')

        isDropdownOpen = false
    }
    function openDropdownBox() {
        const x = $dropdownContainer.getBoundingClientRect().x
        const y =
            $dropdownContainer.getBoundingClientRect().y +
            $dropdownContainer.getBoundingClientRect().height
        $dropdownBoxContainer.classList.remove('hide')
        $dropdownBoxContainer.style.cssText = `left:${x}px; top: ${y}px; `

        isDropdownOpen = true
    }
}

function makeDropdownCounter() {
    console.log('some log!')

    let commonCounter = 0
    let counter1 = 0
    console.log(counter1)
    let counter2 = 0
    let counter3 = 0
    let guestWordEnding = 'ь'

    function setGuestWordEnging(guestWordEnding, commonCounter) {
        if (commonCounter > 1 && commonCounter < 5) {
            return (guestWordEnding = 'я')
        }
        if (commonCounter > 5 || commonCounter < 1) {
            return (guestWordEnding = 'ей')
        }
        if (commonCounter === 1) {
            return (guestWordEnding = 'ь')
        }
        return guestWordEnding
    }

    return function (shift, counterSelector) {
        switch (counterSelector.attributes.class.value) {
            case 'dropdown__counter js-dropdown__counter1':
                if (counter1 === 0 && shift < 0) {
                    return counter1
                } else {
                    counter1 += shift
                    commonCounter += shift
                    guestWordEnding = setGuestWordEnging(
                        guestWordEnding,
                        commonCounter
                    )

                    counterSelector.innerHTML = counter1
                    $dropdownText.innerHTML = `${commonCounter} гост${guestWordEnding}`
                }
                break
            case 'dropdown__counter js-dropdown__counter2':
                if (counter2 === 0 && shift < 0) {
                    return counter2
                } else {
                    counter2 += shift
                    commonCounter += shift
                    guestWordEnding = setGuestWordEnging(
                        guestWordEnding,
                        commonCounter
                    )
                    counterSelector.innerHTML = counter2
                    $dropdownText.innerHTML = `${commonCounter} гост${guestWordEnding}`
                }
                break
            case 'dropdown__counter js-dropdown__counter3':
                if (counter3 === 0 && shift < 0) {
                    return counter3
                } else {
                    counter3 += shift
                    commonCounter += shift
                    guestWordEnding = setGuestWordEnging(
                        guestWordEnding,
                        commonCounter
                    )
                    counterSelector.innerHTML = counter3
                    $dropdownText.innerHTML = `${commonCounter} гост${guestWordEnding}`
                }
                break
            default:
                return false
        }
    }
}

const dropdownCounter = makeDropdownCounter()

$increaseSelector1.addEventListener('click', () =>
    dropdownCounter(1, $counterSelector1)
)
$decreaseSelector1.addEventListener('click', () =>
    dropdownCounter(-1, $counterSelector1)
)
$increaseSelector2.addEventListener('click', () =>
    dropdownCounter(1, $counterSelector2)
)
$decreaseSelector2.addEventListener('click', () =>
    dropdownCounter(-1, $counterSelector2)
)
$increaseSelector3.addEventListener('click', () => {
    dropdownCounter(1, $counterSelector3)
})
$decreaseSelector3.addEventListener('click', () =>
    dropdownCounter(-1, $counterSelector3)
)
