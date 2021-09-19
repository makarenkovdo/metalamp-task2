$('#start_one').datepicker({
    onSelect: function (fd, d, picker) {
        $('#start_one').val(fd.split('-')[0])
        $('#end_one').val(fd.split('-')[1])
    },
})

$('#minMaxExample').datepicker({
    // Можно выбрать тольо даты, идущие за сегодняшним днем, включая сегодня
    minDate: new Date(),
})

$(function () {
    $('#calendar').datepicker({ range: true })
})
