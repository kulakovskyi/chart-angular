import {Component, Input, OnInit} from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart, ApexFill,
  ApexGrid,
  ApexLegend,
  ApexMarkers, ApexStroke,
  ApexTitleSubtitle,
  ApexXAxis
} from "ng-apexcharts";

@Component({
  selector: 'app-line-adwords',
  templateUrl: './line-adwords.component.html',
  styleUrls: ['./line-adwords.component.scss']
})
export class LineAdwordsComponent implements OnInit{

  @Input() chart!: ApexChart;
  @Input() series!: ApexAxisChartSeries;
  @Input() stroke!: ApexStroke;
  @Input() markers!: ApexMarkers;
  @Input() grid!: ApexGrid;
  @Input() colors!: any;
  @Input() xaxis!: ApexXAxis
  @Input() title!: ApexTitleSubtitle
  @Input() subtitle!: ApexTitleSubtitle
  @Input() legend!: ApexLegend
  @Input() labels!: any;
  @Input() fill!: ApexFill;

  ngOnInit() {
    this.initialChart()
  }

  initialChart() {
    this.chart = {
      height: 400,
      width: "100%",
      type: 'line',
      zoom: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        top: 3,
        left: 2,
        blur: 4,
        opacity: 1,
        color: '#6735fd'
      },
    };

    this.series = [{
      name: "Purple",
      data: [1, 15, 26, 20, 33, 27],
      color: '#6735fd'
    },
      {
        name: "Blue",
        data: [3, 33, 21, 42, 19, 32],
        color: '#357bfd'
      },
      {
        name: "Pink",
        data: [0, 39, 52, 11, 29, 43],
        color: '#fd35be'
      }
    ];

    this.title = {
      text: 'Colors',
      align: 'left',
    };

    this. subtitle = {
      text: 'Statistics',
      offsetY: 55,
      offsetX: 20
    };

    this.stroke = {
      curve: 'smooth',
      width: 5,
      dashArray: [0, 8, 5]

    };

    this.markers = {
      size: 1,
      strokeWidth: 0,
      hover: {
        size: 1
      }
    };

    this.grid = {
      show: true,
      padding: {
        bottom: 0
      }
    };

    this.labels = ['01/15/2023', '01/16/2023', '01/17/2023', '01/18/2023', '01/19/2023', '01/20/2023'];


    this.xaxis = {
      tooltip: {
        enabled: false
      }
    };

    this.legend = {
      position: 'top',
      horizontalAlign: 'right',
    }
  }

}
