// import './components/radio-button/radio-button.scss'
// import './components/checkbox-list/checkbox-list.scss'
// import './components/test/test.scss'
// import './components/checkbox/checkbox.scss'
// import './components/buttons/buttons.scss'
// import './components/rate-button/rate-button.scss'
// import './components/toggle/toggle.scss'
// import './components/like-button/like-button.scss'
// import './components/dropdown-guests/dropdown-guests.scss'
// import './components/color-block/color-block.scss'
// import './pages/color-and-type/color-and-type.scss'
// import './pages/ui-kit-template/ui-kit-template.scss'

const cache = {}

function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)))
}
importAll(require.context('./components/', true, /\.svg$/))
importAll(require.context('./pages/', true, /\.svg$/))
importAll(require.context('./components/', true, /\.sass$/))
importAll(require.context('./pages/', true, /\.sass$/))
// importAll(require.context('./components/', true, /\.js$/))
// importAll(require.context('./pages/', true, /\.js$/))
