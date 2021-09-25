import 'jquery'

import './components/checkbox-list/checkbox-list.scss'
// import './components/checkbox-list/checkbox-list.js' //вставляем сюда и checkbox тухнет

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
import './pages/ui-kit-template/ui-kit-template.scss'

import './components/checkbox-list/checkbox-list.js'
import './components/datepicker/js/air-datepicker.js'
import './components/datepicker/datepicker.js'
import './components/like-button/like-button.js'
import './components/checkbox/checkbox.js'
import './components/dropdown-guests/dropdown-guests.js'

const cache = {}

function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)))
}
importAll(require.context('./components/', true, /\.svg$/))
importAll(require.context('./pages/', true, /\.svg$/))
