// import 'jquery'
import './components/test/test.scss'
// import './components/checkbox2/checkbox2.scss'
import './components/checkbox/checkbox.scss'
import './components/buttons/buttons.scss'
import './components/rate-button/rate-button.scss'

import './components/datepicker/js/air-datepicker.js'
import './components/datepicker/datepicker'
import './components/dropdown-guests/dropdown-guests.js'

// const cache = {}

// function importAll(r) {
//     r.keys().forEach(r)
// }
// importAll(require.context('./components/', true, /\.js$/))
// importAll(require.context('./styles/', true, /\.scss$/))
// importAll(require.context('./components/', true, /\.scss$/))
importAll(require.context('./components/', true, /\.svg$/))

// importAllFiles(require.context('./components/', true, /\.(scss|svg)$/))
