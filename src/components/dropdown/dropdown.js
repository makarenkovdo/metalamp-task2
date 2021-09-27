class Drodpown {
    constructor() {
        this.isDropdownOpen = false
        this.$dropdownInstanceNumber = document.querySelector(
            `.js-dropdown_instance-number`
        )
        this.instance = this.$dropdownInstanceNumber.innerHTML

        this.$dropdownContainerImg = document.querySelector(
            `.js-dropdown_instance-${this.instance}__img-box`
        )
        this.$dropdownContainer = document.querySelector(
            `.js-dropdown_instance-${this.instance}-guests`
        )
        this.$dropdownPopupContainer = document.querySelector(
            `.js-dropdown_instance-${this.instance}__popup`
        )
        this.$dropdownText = document.querySelector(
            `.js-dropdown_instance-${this.instance}__text`
        )
        this.$counterSelector1 = document.querySelector(
            `.js-dropdown_instance-${this.instance}__counter1`
        )
        this.$counterSelector2 = document.querySelector(
            `.js-dropdown_instance-${this.instance}__counter2`
        )
        this.$counterSelector3 = document.querySelector(
            `.js-dropdown_instance-${this.instance}__counter3`
        )
        this.$decreaseSelector1 = document.querySelector(
            `.js-dropdown_instance-${this.instance}__decrease1`
        )
        this.$increaseSelector1 = document.querySelector(
            `.js-dropdown_instance-${this.instance}__increase1`
        )
        this.$decreaseSelector2 = document.querySelector(
            `.js-dropdown_instance-${this.instance}__decrease2`
        )
        this.$increaseSelector2 = document.querySelector(
            `.js-dropdown_instance-${this.instance}__increase2`
        )
        this.$decreaseSelector3 = document.querySelector(
            `.js-dropdown_instance-${this.instance}__decrease3`
        )
        this.$increaseSelector3 = document.querySelector(
            `.js-dropdown_instance-${this.instance}__increase3`
        )
        this.dropdownCounter = this.makeDropdownCounter()
    }
    handleDropdownClick() {
        console.log('something new ')
        console.log(this)
        this.isDropdownOpen
            ? closeDropdownBox.call(this)
            : openDropdownBox.call(this)
        function closeDropdownBox() {
            this.$dropdownPopupContainer.classList.add('hide')

            this.isDropdownOpen = false
        }
        function openDropdownBox() {
            console.log(this)

            const x = this.$dropdownContainer.getBoundingClientRect().x
            const y =
                this.$dropdownContainer.getBoundingClientRect().y +
                this.$dropdownContainer.getBoundingClientRect().height
            this.$dropdownPopupContainer.classList.remove('hide')
            this.$dropdownPopupContainer.style.cssText = `left:${x}px; top: ${y}px; `

            this.isDropdownOpen = true
        }
    }
    makeDropdownCounter() {
        console.log('some log!')

        let commonCounter = 0
        let counter1 = 0
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
                case `dropdown__counter js-dropdown_instance-${instance}__counter1`:
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
                        this.$dropdownText.innerHTML = `${commonCounter} гост${guestWordEnding}`
                    }
                    break
                case `dropdown__counter js-dropdown_instance-${instance}__counter2`:
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
                        this.$dropdownText.innerHTML = `${commonCounter} гост${guestWordEnding}`
                    }
                    break
                case `dropdown__counter js-dropdown_instance-${instance}__counter3`:
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
                        this.$dropdownText.innerHTML = `${commonCounter} гост${guestWordEnding}`
                    }
                    break
                default:
                    return false
            }
        }
    }
}

const dropdown1 = new Drodpown()
console.log(dropdown1)
dropdown1.$dropdownContainerImg.addEventListener(
    'click',
    dropdown1.handleDropdownClick.bind(dropdown1)
)
console.log(dropdown1.dropdownCounter)
console.log(dropdown1.handleDropdownClick)

dropdown1.$increaseSelector1.addEventListener('click', () =>
    this.dropdownCounter(1, this.$counterSelector1)
)
dropdown1.$decreaseSelector1.addEventListener('click', () =>
    this.dropdownCounter(-1, this.$counterSelector1)
)
dropdown1.$increaseSelector2.addEventListener('click', () =>
    this.dropdownCounter(1, this.$counterSelector2)
)
dropdown1.$decreaseSelector2.addEventListener('click', () =>
    this.dropdownCounter(-1, this.$counterSelector2)
)
dropdown1.$increaseSelector3.addEventListener('click', () => {
    this.dropdownCounter(1, this.$counterSelector3)
})
dropdown1.$decreaseSelector3.addEventListener('click', () =>
    this.dropdownCounter(-1, this.$counterSelector3)
)
// dropdown1.$dropdownContainer.addEventListener('click', () =>
//     console.log('CLASSES WORKS')
// )
