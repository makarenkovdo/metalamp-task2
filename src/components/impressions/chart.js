import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
const ctx = document.getElementById('myChart').getContext('2d')
ctx.height = 300
ctx.width = 300

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

// new Chart(document.getElementById('myChart'), {
//     type: 'doughnut',
//     data: {
//         labels: ['Великолепно', 'Хорошо', 'Удовлетворительно', 'Разочарован'],
//         datasets: [
//             {
//                 label: 'Впечатления от номера',
//                 backgroundColor: [gradientA, gradientB, gradientC, gradientD],
//                 data: [130, 65, 65, 0],
//             },
//         ],
//     },
//     options: {
//         cutout: '90%',
//         responsive: false,
//         rotation: 180,
//         radius: '90%',
//         layout: {
//             padding: {
//                 right: 50,
//                 top: 5,
//             },
//         },
//         title: {
//             display: true,
//             text: 'Month sdfsd fsd fsdfsdf',
//         },
//         plugins: {
//             legend: {
//                 position: 'right',
//                 align: 'end',
//                 title: {
//                     display: true,
//                     text: 'Legend Title',
//                     position: 'left',
//                     padding: {
//                         right: 50,
//                     },
//                 },
//                 plugins: {
//                     title: {
//                         display: true,
//                         text: 'Custom Chart Title',
//                     },
//                 },
//                 labels: {
//                     boxWidth: 8,
//                     boxHeight: 8,
//                     borderRadius: '50%',
//                     usePointStyle: true,
//                     pointStyle: 'circle',
//                     textAlign: 'left',
//                     font: {
//                         family: 'Montserrat',
//                         style: 'normal',
//                         weight: 'normal',
//                         size: 14,
//                         lineHeight: 24,
//                         color: 'rgba(31, 32, 65, 0.75)',
//                     },
//                 },
//             },
//         },
//     },
// })

const voices = [130, 65, 65, 0]
const voiceQuantity = voices.reduce((acc, v) => (acc += v))
var data = {
    labels: ['Великолепно', 'Хорошо', 'Удовлетворительно', 'Разочарован'],
    datasets: [
        {
            label: 'Впечатления от номера',
            backgroundColor: [gradientA, gradientB, gradientC, gradientD],
            data: voices,
        },
    ],
}

var promisedDeliveryChart = new Chart(document.getElementById('myChart'), {
    type: 'doughnut',
    data: data,
    options: {
        cutout: '90%',
        responsive: true,
        rotation: 180,
        radius: '90%',
        // layout: {
        //     padding: {
        //         right: 50,
        //         top: 5,
        //     },
        // },
        title: {
            display: true,
            text: 'Month sdfsd fsd fsdfsdf',
        },
        plugins: {
            legend: {
                position: 'right',
                align: 'end',

                labels: {
                    boxWidth: 8,
                    boxHeight: 8,
                    borderRadius: '50%',
                    usePointStyle: true,
                    pointStyle: 'circle',
                    textAlign: 'left',
                    font: {
                        family: 'Montserrat',
                        style: 'normal',
                        weight: 'normal',
                        size: 14,
                        lineHeight: 24,
                        color: 'rgba(31, 32, 65, 0.75)',
                    },
                },
            },
        },
    },
    plugins: [
        {
            id: 'text',
            beforeDraw: function (chart, a, b) {
                var width = chart.width,
                    height = chart.height,
                    ctx = chart.ctx

                ctx.restore()
                var fontSize = (height / 114).toFixed(2)
                ctx.font = fontSize + 'em sans-serif'
                ctx.textBaseline = 'middle'

                var text = `${voiceQuantity}`,
                    textX = Math.round(
                        (width - ctx.measureText(text).width) / 2 - 50
                    ),
                    textY = height / 2

                ctx.fillText(text, textX, textY)
                var text2 = 'голосов',
                    text2X = Math.round(
                        (width - ctx.measureText(text).width) / 2 - 50
                    ),
                    text2Y = height / 2 + 20

                ctx.fillText(text2, text2X, text2Y)
                ctx.save()
            },
        },
    ],
})
