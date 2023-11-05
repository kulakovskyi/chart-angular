import {Component, Input, OnInit} from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels, ApexFill,
  ApexLegend,
  ApexTitleSubtitle, ApexTooltip,
  ApexXAxis,
  ApexYAxis
} from "ng-apexcharts";

@Component({
  selector: 'app-multiple-y-axis-chart',
  templateUrl: './multiple-y-axis-chart.component.html',
  styleUrls: ['./multiple-y-axis-chart.component.scss']
})
export class MultipleYAxisChartComponent implements OnInit{

  @Input() series!: ApexAxisChartSeries;
  @Input() chart!: ApexChart;
  @Input() xaxis!: ApexXAxis;
  @Input() markers: any; //ApexMarkers;
  @Input() stroke: any; //ApexStroke;
  @Input() yaxis!: ApexYAxis | ApexYAxis[];
  @Input() dataLabels!: ApexDataLabels;
  @Input() title!: ApexTitleSubtitle;
  @Input() legend!: ApexLegend;
  @Input() fill!: ApexFill;
  @Input() tooltip!: ApexTooltip;
  @Input() colors!: any;

  ngOnInit() {
    this.initialChart()
  }

  initialChart(){
    this.series = [
      {
        name: "Favbet",
        type: "column",
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
      },
      {
        name: "Cosmolot",
        type: "column",
        data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
      },
      {
        name: "Parimatch",
        type: "line",
        data: [20, 29, 37, 36, 44, 45, 50, 58]
      }
    ];

    this.chart = {
      height: 'auto',
      width: "100%",
      type: "line",
      stacked: false
    };

    this.colors = ['#005', '#FF267E', '#fffb26']

    this.dataLabels = {
      enabled: false
    };

    this.stroke = {
      width: [1, 1, 4]
    };

    this.title = {
      text: "Analysis casinos",
      align: "left",
      offsetX: 110
    };

    this.xaxis = {
      categories: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]
    };

    this.yaxis = [
      {
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#008FFB"
        },
        labels: {
          style: {
            colors: "#008FFB"
          }
        },
        title: {
          text: "Line Y",
          style: {
            color: "#008FFB"
          }
        },
        tooltip: {
          enabled: true
        }
      },
      {
        seriesName: "Income",
        opposite: true,
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#00E396"
        },
        labels: {
          style: {
            colors: "#00E396"
          }
        },
        title: {
          text: "Operating Cashflow",
          style: {
            color: "#00E396"
          }
        }
      },
      {
        seriesName: "Revenue",
        opposite: true,
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#fe1919"
        },
        labels: {
          style: {
            colors: "#fe1919"
          }
        },
        title: {
          text: "Revenue",
          style: {
            color: "#fe1919"
          }
        }
      }
    ];

    this.tooltip = {
      fixed: {
        enabled: true,
        position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60
      }
    };
    this.legend = {
      horizontalAlign: "left",
      offsetX: 40
    };
  }

}
