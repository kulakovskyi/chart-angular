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
  selector: 'app-area-line-column',
  templateUrl: './area-line-column.component.html',
  styleUrls: ['./area-line-column.component.scss']
})
export class AreaLineColumnComponent implements OnInit{

  @Input() series!: ApexAxisChartSeries;
  @Input() chart!: ApexChart;
  @Input() xaxis!: ApexXAxis;
  @Input() yaxis!: ApexYAxis | ApexYAxis[];
  @Input() dataLabels!: ApexDataLabels;
  @Input() title!: ApexTitleSubtitle;
  @Input() fill!: ApexFill;
  @Input() tooltip!: ApexTooltip;
  @Input() colors!: any
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
        type: "column",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
      },
      {
        name: "Designers team",
        type: "area",
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
      },
      {
        name: "SEO team",
        type: "line",
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
      }
    ];

    this.chart = {
      height: 'auto',
      width: "100%",
      type: "line",
      stacked: false
    };

    this.stroke = {
      width: [0, 2, 5],
      curve: "smooth"
    };

    this.plotOptions = {
      bar: {
        columnWidth: "50%",
        borderRadius: 10,
      }
    };

    this.colors = ['#e200fb', '#193ffe', '#6dfe19']

    this.dataLabels = {
      enabled: false
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

    this.fill = {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100]
      }
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
