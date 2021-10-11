import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
var ctx = document.getElementById('myChart').getContext('2d')

new Chart(document.getElementById('myChart'), {
    type: 'doughnut',
    data: {
        labels: ['Великолепно', 'Хорошо', 'Удовлетворен', 'Разочарован'],
        datasets: [
            {
                label: 'Впечатления от номера)',
                backgroundColor: ['#C4C4C4', '#C4C4C4', '#3cba9f', '#e8c3b9'],
                data: [50, 25, 25, 0],
            },
        ],
    },
    options: {
        title: {
            display: true,
            text: 'Predicted world population (millions) in 2050',
        },
        cutoutPercentage: 10,
    },
})
