"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseChart = require("./baseChart");

var _default = {
  props: ['data'],
  extends: _baseChart.Doughnut,
  mounted: function mounted() {
    this.renderChart({
      labels: ['', '', '', ''],
      datasets: [{
        backgroundColor: ['#8DDC59', '#00BD7D', '#009E9B', '#00526C'],
        data: this.data,
        borderWidth: 0
      }]
    }, {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      cutoutPercentage: 70
    });
  }
};
exports.default = _default;