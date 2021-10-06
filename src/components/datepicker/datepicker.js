import './../../vendor/air-datepicker/scss/datepicker.scss'
import './../../vendor/air-datepicker/scss/cell.scss'
import './../../vendor/air-datepicker/scss/navigation.scss'
import './../../vendor/air-datepicker/js/air-datepicker.js'

$('.js-datepicker-input_instance-1').datepicker({
    onSelect: function (fd, d, picker) {
        $('.js-datepicker-input_instance-1').val(fd.split('-')[0])
        $('.js-datepicker-second-input_instance-1').val(fd.split('-')[1])
    },
})

$('.js-datepicker-input_instance-2').datepicker({
    onSelect: function (fd, d, picker) {
        $('.js-datepicker-input_instance-2').val(fd.split('-')[0])
        $('.js-datepicker-second-input_instance-2').val(fd.split('-')[1])
    },
})

$('.js-datepicker-second-input').click(function (e) {
    e.preventDefault()
    var par = $(event.target).parent().parent()
    par.find('.datepicker__input-box').focus()
    par.find('.datepicker-here').focus()
    // $('.js-datepicker-input_second').css('background', 'yellow')
    // $('.datepicker-here').prev().focus()
})

//OLD OLD VERSIONS
// $('#end_one').datepicker({
//     onSelect: function (fd, d, picker) {
//         $('#start_one').val(fd.split('-')[0])
//         $('#end_one').val(fd.split('-')[1])
//     },
// })

// var $start = $('#start'),
//     $end = $('#end')

// $start.datepicker({
//     onSelect: function (fd, date) {
//         $end.data('datepicker').update('minDate', date)

//         $end.focus()
//     },
// })
// $end.datepicker({
//     onSelect: function (fd, date) {
//         $start.data('datepicker').update('maxDate', date)
//     },
// })

$('#minMaxExample').datepicker({
    // Можно выбрать тольо даты, идущие за сегодняшним днем, включая сегодня
    minDate: new Date(),
})

// $(function () {
//     $('#calendar').datepicker({ range: true })
// })
