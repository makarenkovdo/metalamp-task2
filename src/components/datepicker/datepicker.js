import './datepicker.scss'

$('#start_one').datepicker({
    onSelect: function (fd, d, picker) {
        $('#start_one').val(fd.split('-')[0])
        $('#end_one').val(fd.split('-')[1])
    },
})
$('#end_one').datepicker({
    onSelect: function (fd, d, picker) {
        $('#start_one').val(fd.split('-')[0])
        $('#end_one').val(fd.split('-')[1])
    },
})

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
