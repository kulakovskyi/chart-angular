import {Component, Input, OnInit} from '@angular/core';
import {ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexStroke, ApexTooltip, ApexXAxis} from "ng-apexcharts";

@Component({
  selector: 'app-spline-chart',
  templateUrl: './spline-chart.component.html',
  styleUrls: ['./spline-chart.component.scss']
})
export class SplineChartComponent implements OnInit {

  @Input() chart!: ApexChart;
  @Input() series!: ApexAxisChartSeries;
  @Input() xaxis!: ApexXAxis;
  @Input() stroke!: ApexStroke;
  @Input() tooltip!: ApexTooltip;
  @Input() dataLabels!: ApexDataLabels;
  @Input() colors!: any;

  ngOnInit() {
    this.initialChart()
  }

  initialChart() {

    this.series = [
      {
        name: "Dmitrii Shalaev",
        data: [31, 40, 28, 51, 42, 109, 100]
      },
      {
        name: "Vladidir Zelenskiy",
        data: [11, 32, 45, 32, 34, 52, 41]
      },
    ];

    this.chart = {
      height: 'auto',
      width: "100%",
      type: "area",
    };

    this.colors = ["purple", '#14d9d9'];

    this.dataLabels = {
      enabled: false
    };

    this.stroke = {
      curve: "smooth"
    };

    this.xaxis = {
      type: "datetime",
      categories: [
        "2023-09-21T00:00:00.000Z",
        "2023-09-22T01:30:00.000Z",
        "2023-09-23T02:30:00.000Z",
        "2023-09-24T03:30:00.000Z",
        "2023-09-25T04:30:00.000Z",
        "2023-09-26T05:30:00.000Z",
        "2023-09-26T06:30:00.000Z"
      ]
    };

    this.tooltip = {
      x: {
        format: "dd/MM/yy HH:mm"
      }
    };
  }
}
