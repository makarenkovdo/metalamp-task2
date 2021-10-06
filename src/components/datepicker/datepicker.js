import './../../vendor/air-datepicker/scss/datepicker.scss'
import './../../vendor/air-datepicker/scss/cell.scss'
import './../../vendor/air-datepicker/scss/navigation.scss'
import './../../vendor/air-datepicker/js/air-datepicker.js'

// //second version
// $('.js-datepicker-input').datepicker({
//     onSelect: function (fd, d, picker) {
//         $('#start_one').val(fd.split('-')[0])
//         $('#end_one').val(fd.split('-')[1])
//     },
// })

// good!
// $('#start_one').click(function (e) {
//     e.preventDefault()
//     var par = $(event.target).parent().parent()
//     // par.find('#start_one').css('background', 'yellow')
//     // $('.js-datepicker-input_second').css('background', 'yellow')
//     // $('.datepicker-here').prev().focus()
// })

$('.datepicker-here').datepicker({
    onSelect: function (fd, d, picker) {
        $('.datepicker-here').val(fd.split('-')[0])
        $('.js-datepicker-input_second').val(fd.split('-')[1])
    },
})

// $("button").click(function(){
//     var closest_ones = $(this).prev("button").add($(this).next("button"));
//     closest_ones.text(++counter);
// });

$('.js-datepicker-input_second').click(function (e) {
    e.preventDefault()
    var par = $(event.target).parent().parent()
    par.find('#start_one').focus()
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
