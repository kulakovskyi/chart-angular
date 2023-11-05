import {Component, Input, OnInit} from '@angular/core';
import {ApexAxisChartSeries, ApexChart, ApexGrid, ApexMarkers, ApexTooltip} from "ng-apexcharts";

@Component({
  selector: 'app-spark-two',
  templateUrl: './spark-two.component.html',
  styleUrls: ['./spark-two.component.scss']
})
export class SparkTwoComponent implements OnInit{

  @Input() chart!: ApexChart;
  @Input() series!: ApexAxisChartSeries;
  @Input() stroke: any; //ApexStroke;
  @Input() markers!: ApexMarkers;
  @Input() grid!: ApexGrid;
  @Input() tooltip!: ApexTooltip;
  @Input() colors!: any;

  ngOnInit() {
    this.initialChart()
  }

  initialChart() {
    this.chart = {
      id: 'spark2',
      group: 'sparks',
      type: 'line',
      height: 100,
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 2,
        opacity: 0.2,
      }
    };

    this.series = [{
      data: [12, 14, 2, 47, 32, 44, 14, 55, 41, 69]
    }];

    this.stroke = {
      curve: 'smooth'
    };

    this.markers = {
      size: 0
    };

    // this.grid = {
    //   padding: {
    //     top: 20,
    //     bottom: 10,
    //     left: 110
    //   }
    // };

    this.colors = ['#fff'];

    this.tooltip = {
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function formatter(val) {
            return '';
          }
        }
      }
    };
  }
}
