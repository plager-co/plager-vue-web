import {
  Doughnut
} from './baseChart'

export default {
  props: ['data'],
  extends: Doughnut,
  mounted: function() {
    this.renderChart({
      labels: ['', '', '', ''],
      datasets: [{
        backgroundColor: [
          '#8DDC59',
          '#00BD7D',
          '#009E9B',
          '#00526C'
        ],
        data: this.data,
        borderWidth: 0,

      }]
    }, {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      cutoutPercentage: 70
    })
  }
}
