import jquery from 'jquery'
import '../../../node_modules/@splidejs/splide/dist/css/splide.min.css'
import Splide from '@splidejs/splide'

var elms = document.getElementsByClassName('splide')

for (var i = 0; i < elms.length; i++) {
    new Splide(elms[i]).mount()
}
