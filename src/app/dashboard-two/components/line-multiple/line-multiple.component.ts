import {Component, Input, OnInit} from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill, ApexMarkers, ApexPlotOptions, ApexStroke,
  ApexTitleSubtitle, ApexTooltip,
  ApexXAxis,
  ApexYAxis
} from "ng-apexcharts";

@Component({
  selector: 'app-line-multiple',
  templateUrl: './line-multiple.component.html',
  styleUrls: ['./line-multiple.component.scss']
})
export class LineMultipleComponent implements OnInit{

  @Input() series!: ApexAxisChartSeries;
  @Input() chart!: ApexChart;
  @Input() xaxis!: ApexXAxis;
  @Input() yaxis!: ApexYAxis | ApexYAxis[];
  @Input() dataLabels!: ApexDataLabels;
  @Input() title!: ApexTitleSubtitle;
  @Input() fill!: ApexFill;
  @Input() tooltip!: ApexTooltip;
  @Input() labels!: any;
  @Input() stroke!: ApexStroke;
  @Input() plotOptions!: ApexPlotOptions;
  @Input() markers!: ApexMarkers;

  ngOnInit() {
    this.initialChart()
  }

  initialChart() {
    this.series = [
      {
        name: "Developer team",
        type: "line",
        data: [34, 44, 30, 50, 38, 30, 31, 20, 44, 22, 30],
        color:'#e200fb'
      },
      {
        name: "Designers team",
        type: "line",
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
        color:'#193ffe'
      },
      {
        name: "SEO team",
        type: "line",
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
        color:'#6dfe19'
      }
    ];

    this.chart = {
      height: 'auto',
      width: "100%",
      type: "line",
      stacked: false
    };

    this.stroke = {
      curve: "smooth"
    };

    this.plotOptions = {
      bar: {
        columnWidth: "50%",
        borderRadius: 10,
      }
    };


    this.dataLabels = {
      enabled: true
    };

    this.labels = [
      "01/01/2023",
      "02/01/2023",
      "03/01/2023",
      "04/01/2023",
      "05/01/2023",
      "06/01/2023",
      "07/01/2023",
      "08/01/2023",
      "09/01/2023",
      "10/01/2023",
      "11/01/2023"
    ];

    this.markers = {
      size: 0
    };



    this.tooltip = {
      shared: false,
      intersect: true
    };

    this.xaxis = {
      type: "datetime"
    };

    this.yaxis = {
      title: {
        text: "Points"
      },
      min: 0
    };

    this.tooltip = {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        }
      }
    };

  }

}
