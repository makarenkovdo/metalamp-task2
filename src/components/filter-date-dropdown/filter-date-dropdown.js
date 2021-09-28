import './../../vendor/air-datepicker/scss/datepicker.scss'
import './../../vendor/air-datepicker/scss/cell.scss'
import './../../vendor/air-datepicker/scss/navigation.scss'
// import './../../vendor/air-datepicker/scss/timepicker.scss'
import '../../vendor/air-datepicker/js/air-datepicker.js'

$('#minMaxExample').datepicker({
    // Можно выбрать тольо даты, идущие за сегодняшним днем, включая сегодня
    minDate: new Date(),
})
