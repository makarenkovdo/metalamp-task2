import 'jquery'
import 'air-datepicker'
import './../node_modules/air-datepicker/dist/css/datepicker.css'

$('#minMaxExample').datepicker({
    // Можно выбрать тольо даты, идущие за сегодняшним днем, включая сегодня
    minDate: new Date()
})

$(function () {
    $('#calendar').datepicker({range: true})
})