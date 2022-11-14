import { LightningElement, track, api } from 'lwc';
import chartjs from '@salesforce/resourceUrl/ChartJs';
import chartJsPluginDatalabels from '@salesforce/resourceUrl/ChartJsPluginDatalabels';
import { loadScript } from 'lightning/platformResourceLoader';

export default class BarGraphSample extends LightningElement {
  
  @track isChartJsInitialized = false;
  chart;

  async connectedCallback() {

    await Promise.all([
      loadScript(this, chartjs),
      loadScript(this, chartJsPluginDatalabels),
    ]).then(() => {
      this.isChartJsInitialized = true;
    }).catch(e => console.error(e));

    if (!this.isChartJsInitialized) return;

    const config = {
      type: "bar",
      data: {
        labels: ["1月", "2月", "3月", "4月", "5月", "6月"],
        datasets: [
          {
            label: "売上",
            data: [120, 80, 97, 105, 94, 110],
            backgroundColor: "#E1BEE7",
          },
        ],
      },
      options: {
        plugins: {
          tooltip: {
            enabled: false,
          },
          datalabels: {
            font: {
              size: 13,
            },
            formatter: function (value, context) {
              return value.toString() + "万円";
            },
          },
        },
      },
      plugins: [ChartDataLabels],
    };

    const ctx = this.template.querySelector('canvas.linechart').getContext('2d');
    this.chart = new window.Chart(ctx, config);
    // サイズ設定
    this.chart.canvas.parentNode.style.height = '100%';
    this.chart.canvas.parentNode.style.width = '100%';
  }
}