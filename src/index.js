import 'jquery'
// // import 'air-datepicker'
import './components/datepicker/js/air-datepicker.js'

import './components/datepicker/datepicker'
// import './pages/form-elements/form-elements'
import './components/dropdown-guests/dropdown-guests'
function importAllFiles(v) {
    v.keys().forEach(v)
}
importAllFiles(require.context('./styles/', true, /\.scss$/))
importAllFiles(require.context('./components/', true, /\.(scss|svg)$/))
