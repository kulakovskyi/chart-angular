import {Component, Input, OnInit} from '@angular/core';
import {ApexAxisChartSeries, ApexChart, ApexFill, ApexPlotOptions, ApexXAxis} from "ng-apexcharts";

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit{

  @Input() chart!: ApexChart;
  @Input() plotOptions!: ApexPlotOptions;
  @Input() series!: ApexAxisChartSeries;
  @Input() xaxis!: ApexXAxis;
  @Input() fill!: ApexFill

  ngOnInit() {
    this.initialChart()
  }

  initialChart() {
    this.chart = {
      height: 400,
      width: "100%",
      type: 'bar',
      stacked: true,
    };

    this.plotOptions = {
      bar: {
        columnWidth: '30%',
        horizontal: false,
      },
    };

    this.series = [{
      name: 'Casino-ua',
      data: [14, 25, 21, 17, 12, 13, 11, 19],
      color: '#ff0000'
    }, {
      name: 'Favoritsport',
      data: [13, 23, 20, 8, 13, 27, 33, 12],
      color: '#0066ff'
    }, {
      name: 'Ezcaxino',
      data: [11, 17, 15, 15, 21, 14, 15, 13],
      color: '#00ff48'
    }];

    this.xaxis = {
      categories: ['2021 Q1', '2021 Q2', '2021 Q3', '2021 Q4', '2022 Q1', '2022 Q2', '2022 Q3', '2022 Q4'],
    };

    this.fill = {
      opacity: 1
    }

  }
}
