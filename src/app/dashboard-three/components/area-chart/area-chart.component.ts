import {Component, Input, OnInit} from '@angular/core';
import {ApexAxisChartSeries, ApexChart, ApexFill, ApexStroke, ApexTooltip, ApexXAxis} from "ng-apexcharts";

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent implements OnInit {

  @Input() chart!: ApexChart;
  @Input() series!: ApexAxisChartSeries;
  @Input() xaxis!: ApexXAxis;
  @Input() fill!: ApexFill;
  @Input() tooltip!: ApexTooltip;
  @Input() stroke!: ApexStroke;

  ngOnInit() {
    this.initialChart()
  }

  initialChart() {
    this.chart = {
      height: 400,
      width: "100%",
      type: 'area',
      stacked: false,
    };

    this.stroke = {
      curve: 'straight'
    }

    this.series = [
      {
        name: "Dima",
        data: [11, 15, 26, 20, 33, 27],
        color: '#30a839'
      },
      {
        name: "Damir",
        data: [32, 33, 21, 42, 19, 32],
        color: '#3072a8'
      },
      {
        name: "Bratishka",
        data: [20, 39, 52, 11, 29, 43],
        color: '#6c4ba6'
      }
    ];

    this.xaxis = {
      categories: ['2021 Q1', '2021 Q2', '2021 Q3', '2021 Q4', '2022 Q1', '2022 Q2'],
    };

    this.fill = {
      opacity: 1,
    }

    this.tooltip = {
      followCursor: true
    }

  }

}
