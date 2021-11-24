const cache = {}

function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)))
}
importAll(require.context('./components/', true, /\.(svg|png)$/))
importAll(require.context('./card-blocks/', true, /\.(svg|png|jpg)$/))
importAll(require.context('./pages/', true, /\.(svg|png|jpg)$/))

importAll(require.context('./components/', true, /\.scss$/))
importAll(require.context('./pages/', true, /\.(scss|css)$/))
importAll(require.context('./styles/', true, /\.scss$/))
importAll(require.context('./card-blocks/', true, /\.scss$/))
