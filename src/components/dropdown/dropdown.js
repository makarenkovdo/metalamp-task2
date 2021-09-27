class Dropdown {
    constructor(number) {
        this.isDropdownOpen = false
        this.$dropdownType = document.querySelector(
            `.js-dropdown_instance-${number}_type`
        ).innerHTML
        this.$dropdownInstanceNumber = document.querySelector(
            `.js-dropdown_instance-number`
        )
        this.instance = number

        this.$dropdownClearSelector = document.querySelector(
            `.js-dropdown_instance-${this.instance}__clear`
        )

        this.$dropdownContainerImg = document.querySelector(
            `.js-dropdown_instance-${this.instance}__img-box`
        )
        this.$dropdownContainer = document.querySelector(
            `.js-dropdown_instance-${this.instance}`
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
        this.isDropdownOpen
            ? closeDropdownBox.call(this)
            : openDropdownBox.call(this)
        function closeDropdownBox() {
            this.$dropdownPopupContainer.classList.add('hide')

            this.isDropdownOpen = false
        }
        function openDropdownBox() {
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
        let counter = [0, 0, 0, 0] //counter[0] is a sum of counters

        let guestWordEnding = 'ь'
        let bedroomWordEnding = 'ен'
        let bedWordEnding = 'ей'

        function setWordEnding(
            counter,
            guestWordEnding,
            bedroomWordEnding,
            bedWordEnding
        ) {
            if (counter[0] > 1 && counter[0] < 5) {
                guestWordEnding = 'я'
            }
            if (counter[1] > 1 && counter[1] < 5) {
                bedroomWordEnding = 'ьни'
            }
            if (counter[2] > 1 && counter[2] < 5) {
                bedWordEnding = 'и'
            }

            if (counter[0] >= 5 || counter[0] < 1) {
                guestWordEnding = 'ей'
            }
            if (counter[1] >= 5 || counter[1] < 1) {
                bedroomWordEnding = 'ен'
            }
            if (counter[2] >= 5 || counter[2] < 1) {
                bedWordEnding = 'ей'
            }
            if (counter[0] === 1) {
                guestWordEnding = 'ь'
            }
            if (counter[1] === 1) {
                bedroomWordEnding = 'ьня'
            }
            if (counter[2] === 1) {
                bedWordEnding = 'ь'
            }
            return [guestWordEnding, bedroomWordEnding, bedWordEnding]
        }

        return function (shift, counterSelector) {
            if (shift === 0) {
                console.log(this)
                counter = [0, 0, 0, 0]
            }
            switch (counterSelector.attributes.class.value) {
                case `dropdown__counter js-dropdown_instance-${this.instance}__counter1`:
                    if (counter[1] === 0 && shift < 0) {
                        return counter[1]
                    } else {
                        counter[1] += shift
                        counter[0] += shift
                        ;[guestWordEnding, bedroomWordEnding, bedWordEnding] = [
                            ...setWordEnding(
                                counter,
                                guestWordEnding,
                                bedroomWordEnding,
                                bedWordEnding
                            ),
                        ]

                        counterSelector.innerHTML = counter[1]
                        if (counter[0] > 0) {
                            this.$dropdownClearSelector.classList.remove('hide')
                        } else {
                            this.$dropdownClearSelector.classList.add('hide')
                        }
                        if (this.$dropdownType === 'room') {
                            this.$dropdownText.innerHTML = `${counter[1]} спал${bedroomWordEnding}, ${counter[2]} кроват${bedWordEnding}`
                        } else {
                            this.$dropdownText.innerHTML = `${counter[0]} гост${guestWordEnding}`
                        }
                    }
                    break
                case `dropdown__counter js-dropdown_instance-${this.instance}__counter2`:
                    if (counter[2] === 0 && shift < 0) {
                        return counter[2]
                    } else {
                        counter[2] += shift
                        counter[0] += shift
                        ;[guestWordEnding, bedroomWordEnding, bedWordEnding] = [
                            ...setWordEnding(
                                counter,
                                guestWordEnding,
                                bedroomWordEnding,
                                bedWordEnding
                            ),
                        ]
                        counterSelector.innerHTML = counter[2]
                        if (counter[0] > 0) {
                            this.$dropdownClearSelector.classList.remove('hide')
                        } else {
                            this.$dropdownClearSelector.classList.add('hide')
                        }
                        if (this.$dropdownType === 'room') {
                            this.$dropdownText.innerHTML = `${counter[1]} спал${bedroomWordEnding}, ${counter[2]} кроват${bedWordEnding}`
                        } else {
                            this.$dropdownText.innerHTML = `${counter[0]} гост${guestWordEnding}`
                        }
                    }
                    break
                case `dropdown__counter js-dropdown_instance-${this.instance}__counter3`:
                    if (counter[3] === 0 && shift < 0) {
                        return counter[3]
                    } else {
                        counter[3] += shift
                        counter[0] += shift
                        ;[guestWordEnding, bedroomWordEnding, bedWordEnding] = [
                            ...setWordEnding(
                                counter,
                                guestWordEnding,
                                bedroomWordEnding,
                                bedWordEnding
                            ),
                        ]
                        counterSelector.innerHTML = counter[3]
                        if (counter[0] > 0) {
                            this.$dropdownClearSelector.classList.remove('hide')
                        } else {
                            this.$dropdownClearSelector.classList.add('hide')
                        }

                        if (this.$dropdownType === 'room') {
                            this.$dropdownText.innerHTML = `${counter[1]} спал${bedroomWordEnding}, ${counter[2]} кроват${bedWordEnding}`
                        } else {
                            this.$dropdownText.innerHTML = `${counter[0]} гост${guestWordEnding}`
                        }
                    }
                    break
                default:
                    return false
            }
        }
    }
}

// const dropdownArray[i] = new Dropdown(1)
// const dropdown2 = new Dropdown(2)
function createDropdowns(n) {
    const dropdownArray = new Array(n)
    for (let i = 0; i < n; i++) {
        dropdownArray[i] = new Dropdown(i + 1)
    }
    return dropdownArray
}
const dropdownArray = createDropdowns(5)

for (let i = 0; i < dropdownArray.length; i++) {
    dropdownArray[i].$dropdownContainerImg.addEventListener(
        'click',
        dropdownArray[i].handleDropdownClick.bind(dropdownArray[i])
    )

    dropdownArray[i].$increaseSelector1.addEventListener('click', () =>
        dropdownArray[i].dropdownCounter.call(
            dropdownArray[i],
            1,
            dropdownArray[i].$counterSelector1
        )
    )
    dropdownArray[i].$decreaseSelector1.addEventListener('click', () =>
        dropdownArray[i].dropdownCounter.call(
            dropdownArray[i],
            -1,
            dropdownArray[i].$counterSelector1
        )
    )
    dropdownArray[i].$increaseSelector2.addEventListener('click', () =>
        dropdownArray[i].dropdownCounter.call(
            dropdownArray[i],
            1,
            dropdownArray[i].$counterSelector2
        )
    )
    dropdownArray[i].$decreaseSelector2.addEventListener('click', () =>
        dropdownArray[i].dropdownCounter.call(
            dropdownArray[i],
            -1,
            dropdownArray[i].$counterSelector2
        )
    )
    dropdownArray[i].$increaseSelector3.addEventListener('click', () =>
        dropdownArray[i].dropdownCounter.call(
            dropdownArray[i],
            1,
            dropdownArray[i].$counterSelector3
        )
    )
    dropdownArray[i].$decreaseSelector3.addEventListener('click', () =>
        dropdownArray[i].dropdownCounter.call(
            dropdownArray[i],
            -1,
            dropdownArray[i].$counterSelector3
        )
    )
    if (!dropdownArray[i].$dropdownType) {
        dropdownArray[i].$dropdownClearSelector.addEventListener('click', () =>
            dropdownArray[i].dropdownCounter.call(
                dropdownArray[i],
                0,
                dropdownArray[i].$counterSelector3
            )
        )
    }

    // dropdownArray[i].$dropdownClearSelector.addEventListener('click', () =>
    //     console.log('SHIT')
    // )
}
// dropdownArray[i].$dropdownContainer.addEventListener('click', () =>
//     console.log('CLASSES WORKS')
// )
