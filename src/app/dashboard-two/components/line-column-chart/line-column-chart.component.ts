import {Component, Input, OnInit} from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexTitleSubtitle, ApexTooltip,
  ApexXAxis,
  ApexYAxis
} from "ng-apexcharts";

@Component({
  selector: 'app-line-column-chart',
  templateUrl: './line-column-chart.component.html',
  styleUrls: ['./line-column-chart.component.scss']
})
export class LineColumnChartComponent implements OnInit{

  @Input() series!: ApexAxisChartSeries;
  @Input() chart!: ApexChart;
  @Input() xaxis!: ApexXAxis;
  @Input() stroke: any; //ApexStroke;
  @Input() yaxis!: ApexYAxis | ApexYAxis[];
  @Input() dataLabels!: ApexDataLabels;
  @Input() title!: ApexTitleSubtitle;
  @Input() fill!: ApexFill;
  @Input() tooltip!: ApexTooltip;
  @Input() labels!: any;


  ngOnInit() {
    this.initialChart()
  }


  initialChart() {
    this.series = [
      {
        name: "Social",
        type: "column",
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
      },
      {
        name: "Media",
        type: "line",
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
      },
    ];

    this.chart = {
      height: 'auto',
      width: "100%",
      type: "line"
    };

    this.dataLabels = {
      enabled: true,
      enabledOnSeries: [1]
    };

    this.stroke = {
      width: [0, 4]
    };

    this.title = {
      text: "Traffic"
    };

    this.labels = [
      "01 Jan 2023",
      "02 Jan 2023",
      "03 Jan 2023",
      "04 Jan 2023",
      "05 Jan 2023",
      "06 Jan 2023",
      "07 Jan 2023",
      "08 Jan 2023",
      "09 Jan 2023",
      "10 Jan 2023",
      "11 Jan 2023",
      "12 Jan 2023"
    ]

    this.xaxis = {
      type: "datetime"
    };

    this.yaxis = [
      {
        title: {
          text: "Social"
        }
      },
      {
        opposite: true,
        title: {
          text: "Media"
        }
      }
    ];

  }


}
