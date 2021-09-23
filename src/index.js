import 'jquery'

import './components/checkbox/checkbox.js'
import './components/test/test.scss'
import './components/checkbox/checkbox.scss'
import './components/buttons/buttons.scss'
import './components/rate-button/rate-button.scss'
import './components/toggle/toggle.scss'
import './components/radio-button/radio-button.scss'
import './components/like-button/like-button.scss'
import './components/dropdown-guests/dropdown-guests.scss'
import './components/color-block/color-block.scss'
import './pages/color-and-type/color-and-type.scss'

import './components/datepicker/js/air-datepicker.js'
import './components/datepicker/datepicker.js'
import './components/like-button/like-button.js'
// import './components/dropdown-guests/dropdown-guests'

const cache = {}

function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)))
}
importAll(require.context('./components/', true, /\.svg$/))
