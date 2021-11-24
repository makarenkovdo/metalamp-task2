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
    inline: true, //FOR SECOND DATEPICKER WE SET INLINE VIEW
    onSelect: function (fd, d, picker) {
        $('.js-datepicker-input_instance-2').val(fd.split('-')[0])
        $('.js-datepicker-second-input_instance-2').val(fd.split('-')[1])
    },
})
$('.js-datepicker-input_instance-1').datepicker({ inline: true })

$('.js-datepicker-second-input').click(function (e) {
    e.preventDefault()
    var par = $(event.target).parent().parent()
    par.find('.datepicker__input-box').focus()
    par.find('.datepicker-here').focus()
})

$('#minMaxExample').datepicker({
    // Можно выбрать тольо даты, идущие за сегодняшним днем, включая сегодня
    minDate: new Date(),
})
