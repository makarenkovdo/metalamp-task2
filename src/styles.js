const cache = {}

function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)))
}
importAll(require.context('./components/', true, /\.svg$/))
importAll(require.context('./components/', true, /\.png$/))
importAll(require.context('./pages/', true, /\.svg$/))
importAll(require.context('./components/', true, /\.scss$/))
importAll(require.context('./pages/', true, /\.scss$/))
importAll(require.context('./styles/', true, /\.scss$/))
importAll(require.context('./card-blocks/', true, /\.scss$/))
