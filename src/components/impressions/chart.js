import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
const ctx = document.getElementById('myChart').getContext('2d')

const gradientA = ctx.createLinearGradient(0, 0, 0, 600)
gradientA.addColorStop(0, 'rgb(255, 228, 156)')
gradientA.addColorStop(1, 'rgb(255, 186, 156)')
const gradientB = ctx.createLinearGradient(0, 0, 0, 600)
gradientB.addColorStop(0, 'rgb(187, 156, 255)')
gradientB.addColorStop(1, 'rgb(164,160,253)')
const gradientC = ctx.createLinearGradient(0, 0, 0, 600)
gradientC.addColorStop(0, 'rgb(107,209,192)')
gradientC.addColorStop(1, 'rgb(111,207,153)')
const gradientD = ctx.createLinearGradient(0, 0, 0, 600)
gradientD.addColorStop(0, '#919191')
gradientD.addColorStop(1, '#8BA4F9')

new Chart(document.getElementById('myChart'), {
    type: 'doughnut',
    data: {
        labels: ['Великолепно', 'Хорошо', 'Удовлетворен', 'Разочарован'],
        datasets: [
            {
                label: 'Впечатления от номера',
                backgroundColor: [gradientA, gradientB, gradientC, gradientD],
                data: [130, 65, 65, 0],
            },
        ],
    },
    options: {
        cutout: 150,
        responsive: false,
        rotation: 180,
    },
})
