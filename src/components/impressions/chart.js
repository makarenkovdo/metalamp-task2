import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
var ctx = document.getElementById('myChart').getContext('2d')

var gradientA = ctx.createLinearGradient(0, 0, 0, 600)
gradientA.addColorStop(0, 'rgb(255, 186, 156)')
gradientA.addColorStop(1, 'rgb(255, 228, 156)')
var gradientB = ctx.createLinearGradient(0, 0, 0, 600)
gradientB.addColorStop(0, 'rgb(187, 156, 255)')
gradientB.addColorStop(1, 'rgb(164,160,253)')
var gradientC = ctx.createLinearGradient(0, 0, 0, 600)
gradientC.addColorStop(0, 'rgb(111,207,153)')
gradientC.addColorStop(1, 'rgb(107,209,192)')

new Chart(document.getElementById('myChart'), {
    type: 'doughnut',
    data: {
        labels: ['Великолепно', 'Хорошо', 'Удовлетворен', 'Разочарован'],
        datasets: [
            {
                label: 'Впечатления от номера',
                backgroundColor: [gradientA, gradientB, gradientC, '#e8c3b9'],
                data: [50, 25, 25, 0],
            },
        ],
    },
    options: {
        cutout: 150,
        responsive: false,
        rotation: 180,
    },
})
