class Dropdown {
    constructor(number) {
        this.isDropdownOpen = false

        this.$dropdownInstanceNumber = document.querySelector(
            `.js-dropdown_instance-number`
        )
        this.instance = number
        this.$type = document.querySelector(
            `.js-dropdown_instance-${number}_type`
        ).innerHTML
        this.$dropdownContainer = document.querySelector(
            `.js-dropdown_instance-${this.instance}`
        )
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
            const x = this.$buttonSelector.offsetLeft
            const y =
                this.$buttonSelector.offsetTop +
                this.$buttonSelector.offsetHeight
            this.$dropdownPopupContainer.style.cssText = `left:${x}px; top: ${y}px; `
            this.$dropdownPopupContainer.classList.remove('hide')
            this.isDropdownOpen = true
        }
    }
    makeDropdownCounter() {
        let counter = [0, 0, 0, 0] //counter[0] is a sum of counters

        let guestWordEnding = 'ь'
        let bedroomWordEnding = 'ен'
        let bedWordEnding = 'ей'
        let bathWordEnding = ['ая', 'а']
        let babyWordEnding = 'ец'

        function setWordEnding(
            counter,
            guestWordEnding,
            bedroomWordEnding,
            bedWordEnding,
            bathWordEnding,
            babyWordEnding
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
            if (counter[3] > 1 && counter[3] < 5) {
                bathWordEnding = ['ые', 'ы']
                babyWordEnding = 'ца'
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
            if (counter[3] >= 5 || counter[3] < 1) {
                bathWordEnding = ['ых', '']
                babyWordEnding = 'цев'
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
            if (counter[3] === 1) {
                bathWordEnding = ['ая', 'а']
                babyWordEnding = 'ец'
            }
            return [
                guestWordEnding,
                bedroomWordEnding,
                bedWordEnding,
                bathWordEnding,
                babyWordEnding,
            ]
        }

        return function (shift, j) {
            if (shift === 0) {
                counter = [0, 0, 0, 0]
            }
            if (counter[j] === 0 && shift < 0) {
                return counter[j]
            } else {
                counter[j] += shift
                if (j < 3) {
                    counter[0] += shift
                }
                ;[
                    guestWordEnding,
                    bedroomWordEnding,
                    bedWordEnding,
                    bathWordEnding,
                    babyWordEnding,
                ] = [
                    ...setWordEnding(
                        counter,
                        guestWordEnding,
                        bedroomWordEnding,
                        bedWordEnding,
                        bathWordEnding,
                        babyWordEnding
                    ),
                ]

                this.$counterSelector1.innerHTML = counter[1]
                this.$counterSelector2.innerHTML = counter[2]
                this.$counterSelector3.innerHTML = counter[3]

                if (this.$type === '_room') {
                    this.$dropdownText.innerHTML = `${counter[1]} спал${bedroomWordEnding}, ${counter[2]} кроват${bedWordEnding}...`
                } else {
                    if (counter[0] > 0 || counter[3] > 0) {
                        this.$dropdownClearSelector.classList.remove(
                            'invisible'
                        )
                    } else {
                        this.$dropdownClearSelector.classList.add('invisible')
                    }
                    if (counter[3] > 0) {
                        this.$dropdownText.innerHTML = `${counter[0]} гост${guestWordEnding}, ${counter[3]} младен${babyWordEnding} `
                    } else {
                        this.$dropdownText.innerHTML = `${counter[0]} гост${guestWordEnding}`
                    }
                }
            }
        }
    }
}
let $quantityArray = $(`.dropdown__button`)

function createDropdowns(n) {
    const dropdownArray = new Array(n)
    for (let i = 0; i < n; i++) {
        dropdownArray[i] = new Dropdown(i + 1)
    }
    return dropdownArray
}
const dropdownArray = createDropdowns($quantityArray.length)

for (let i = 0; i < dropdownArray.length; i++) {
    dropdownArray[i].$buttonSelector.addEventListener('click', () =>
        dropdownArray[i].handleDropdownClick.call(dropdownArray[i])
    )
    for (let j = 1; j <= 3; j++) {
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
