import {Component, Input, OnInit} from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill, ApexMarkers, ApexStroke,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexYAxis
} from "ng-apexcharts";

@Component({
  selector: 'app-radar-multiple',
  templateUrl: './radar-multiple.component.html',
  styleUrls: ['./radar-multiple.component.scss']
})
export class RadarMultipleComponent implements OnInit{

  @Input() series!: ApexAxisChartSeries;
  @Input() chart!: ApexChart;
  @Input() xaxis!: ApexXAxis;
  @Input() yaxis!: ApexYAxis | ApexYAxis[];
  @Input() dataLabels!: ApexDataLabels;
  @Input() title!: ApexTitleSubtitle;
  @Input() fill!: ApexFill;
  @Input() markers!: ApexMarkers;
  @Input() stroke!: ApexStroke;

  ngOnInit() {
    this.initialChart()
  }

  initialChart() {
    this.series = [
      {
        name: "Dima",
        data: [80, 50, 30, 40, 100, 20]
      },
      {
        name: "Karina",
        data: [20, 30, 40, 80, 20, 80]
      },
      {
        name: "Neo",
        data: [44, 76, 78, 13, 43, 10]
      }
    ];

    this.chart = {
      height: 'auto',
      type: "radar",
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1
      }
    };

    // this.stroke = {
    //   width: 0
    // };

    this.dataLabels = {
      enabled: false
    };

    this.fill = {
      opacity: 0.4
    };

    this.markers = {
      size: 0
    };

    this.title = {
      text: "Radar"
    };

    this.xaxis = {
      categories: ["2018", "2019", "2020", "2021", "2022", "2023"]
    };

  }
}
