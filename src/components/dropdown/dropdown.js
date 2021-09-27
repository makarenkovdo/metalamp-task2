class Dropdown {
    constructor(number) {
        this.isDropdownOpen = false
        this.$type = document.querySelector(
            `.js-dropdown_instance-${number}_type`
        ).innerHTML
        this.$dropdownInstanceNumber = document.querySelector(
            `.js-dropdown_instance-number`
        )
        this.instance = number

        this.$dropdownClearSelector = document.querySelector(
            `.js-dropdown_instance-${this.instance}__clear`
        )
        this.$dropdownApplySelector = document.querySelector(
            `.js-dropdown_instance-${this.instance}__apply`
        )
        this.$buttonSelector = document.querySelector(
            `.js-dropdown_instance-${this.instance}__button`
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
        this.$decreaseSelector = [
            '', //for starting since 1st index
            document.querySelector(
                `.js-dropdown_instance-${this.instance}__decrease1`
            ),
            document.querySelector(
                `.js-dropdown_instance-${this.instance}__decrease2`
            ),
            document.querySelector(
                `.js-dropdown_instance-${this.instance}__decrease3`
            ),
        ]
        this.$increaseSelector = [
            '', //for starting since 1st index
            document.querySelector(
                `.js-dropdown_instance-${this.instance}__increase1`
            ),
            document.querySelector(
                `.js-dropdown_instance-${this.instance}__increase2`
            ),
            document.querySelector(
                `.js-dropdown_instance-${this.instance}__increase3`
            ),
        ]
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

        return function (shift, j) {
            console.log(j, counter[j])
            if (shift === 0) {
                console.log(this)
                counter = [0, 0, 0, 0]
            }
            if (counter[j] === 0 && shift < 0) {
                return counter[j]
            } else {
                counter[j] += shift
                counter[0] += shift
                ;[guestWordEnding, bedroomWordEnding, bedWordEnding] = [
                    ...setWordEnding(
                        counter,
                        guestWordEnding,
                        bedroomWordEnding,
                        bedWordEnding
                    ),
                ]

                this.$counterSelector1.innerHTML = counter[1]
                this.$counterSelector2.innerHTML = counter[2]
                this.$counterSelector3.innerHTML = counter[3]
                if (counter[0] > 0) {
                    this.$dropdownClearSelector.classList.remove('hide')
                } else {
                    this.$dropdownClearSelector.classList.add('hide')
                }
                if (this.$type === 'room') {
                    this.$dropdownText.innerHTML = `${counter[1]} спал${bedroomWordEnding}, ${counter[2]} кроват${bedWordEnding}`
                } else {
                    this.$dropdownText.innerHTML = `${counter[0]} гост${guestWordEnding}`
                }
            }
        }
    }
}

function createDropdowns(n) {
    const dropdownArray = new Array(n)
    for (let i = 0; i < n; i++) {
        dropdownArray[i] = new Dropdown(i + 1)
    }
    return dropdownArray
}
const dropdownArray = createDropdowns(5)
console.log(dropdownArray[1].$increaseSelector[1])

for (let i = 0; i < dropdownArray.length; i++) {
    dropdownArray[i].$buttonSelector.addEventListener('click', () =>
        dropdownArray[i].handleDropdownClick.call(dropdownArray[i])
    )
    for (let j = 1; j <= 3; j++) {
        console.log(dropdownArray[i].$increaseSelector[j])

        dropdownArray[i].$increaseSelector[j].addEventListener('click', () =>
            dropdownArray[i].dropdownCounter.call(dropdownArray[i], 1, j)
        )
        dropdownArray[i].$decreaseSelector[j].addEventListener('click', () =>
            dropdownArray[i].dropdownCounter.call(dropdownArray[i], -1, j)
        )
    }
    if (!dropdownArray[i].$type) {
        dropdownArray[i].$dropdownClearSelector.addEventListener('click', () =>
            dropdownArray[i].dropdownCounter.call(dropdownArray[i], 0, 0)
        )
        dropdownArray[i].$dropdownApplySelector.addEventListener('click', () =>
            dropdownArray[i].handleDropdownClick.call(dropdownArray[i])
        )
    }
}
