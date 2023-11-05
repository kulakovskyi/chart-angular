import {Component, Input, OnInit} from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart, ApexDataLabels,
  ApexFill,
  ApexLegend,
  ApexPlotOptions, ApexStroke,
  ApexTitleSubtitle, ApexTooltip,
  ApexXAxis
} from "ng-apexcharts";

@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.scss']
})
export class StackedBarChartComponent implements OnInit{

  @Input() legend!: ApexLegend;
  @Input() fill!: ApexFill;
  @Input() title!: ApexTitleSubtitle;
  @Input() plotOptions!: ApexPlotOptions;
  @Input() chart!: ApexChart;
  @Input() series!: ApexAxisChartSeries;
  @Input() xaxis!: ApexXAxis;
  @Input() stroke!: ApexStroke;
  @Input() tooltip!: ApexTooltip;
  @Input() dataLabels!: ApexDataLabels;
  @Input() colors!: any

  ngOnInit() {
    this.initialChart()
  }

  initialChart() {
    this.series = [
      {
        name: "Genadiy",
        data: [44, 55, 41, 37, 22, 43, 21]
      },
      {
        name: "Dmitriy",
        data: [53, 32, 33, 52, 13, 43, 32]
      },
      {
        name: "Andrii",
        data: [12, 17, 11, 9, 15, 11, 20]
      },
      {
        name: "Karina",
        data: [9, 7, 5, 8, 6, 9, 4]
      },
      {
        name: "Neo",
        data: [25, 12, 19, 32, 25, 24, 10]
      }
    ];

    this.chart = {
      type: "bar",
      height: 'auto',
      width: "100%",
      stacked: true,
      stackType: "100%"
    };

    this.plotOptions = {
      bar: {
        horizontal: true
      }
    };

    this.stroke = {
      width: 1,
      colors: ["#005555"]
    };

    this.title = {
      text: "Stacked Bar"
    };

    this.xaxis = {
      categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014]
    };

    this.colors = ['#05C48A', '#005', '#FF267E', '#b1c405', '#c40505']

    this.tooltip = {
      y: {
        formatter: function (val) {
          return val + "K";
        }
      }
    };

    this.fill = {
      opacity: 1
    };

    this.legend = {
      position: "top",
      horizontalAlign: "left",
      offsetX: 40
    };
  }
}
