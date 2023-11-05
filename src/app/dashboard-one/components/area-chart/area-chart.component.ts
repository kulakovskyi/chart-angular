import {Component, Input, OnInit} from '@angular/core';
import {ApexAxisChartSeries, ApexChart, ApexTitleSubtitle} from "ng-apexcharts";

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent implements OnInit{

  @Input() chart!: ApexChart;
  @Input() title!: ApexTitleSubtitle;
  @Input() series!: ApexAxisChartSeries;
  @Input() colors!: any;

  ngOnInit() {
    this.initialChart()
  }

  initialChart(){
    this.title = {
      text: "Dmitrii statistic"
    };

    this.series = [{
      name: "Links check",
      data: [45, 15, 15, 71, 49, 92, 69, 41, 18]
    }];

    this.chart = {
      height: 'auto',
      width: "100%",
      type: "area"
    }

    this.colors = ['rgb(6,208,208)']
  }
}
