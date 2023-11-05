import {Component, Input, OnInit} from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexOptions,
  ApexPlotOptions,
  ApexTitleSubtitle
} from "ng-apexcharts";

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit{

  @Input() chart!: ApexChart;
  @Input() title!: ApexTitleSubtitle;
  @Input() series!: ApexAxisChartSeries;
  @Input() colors!: any;
  @Input() plotOptions!: ApexPlotOptions;
  @Input() dataLabels!: ApexDataLabels;

  ngOnInit() {
    this.initialChart()
  }

  initialChart() {
    this.title = {
      text: "Bar chart"
    };

    this.series = [{
      name: "Andrii Kulakovskyi",
      data: [10, 6, 35, 82, 14, 20, 69, 83, 40]
    }];

    this.colors = ['rgba(25,6,208,0.64)'];

    this.chart = {
      height: 'auto',
      width: "100%",
      type: "bar",
    }

    this.dataLabels = {
      enabled: true
    };


    this.plotOptions = {
      bar: {
        borderRadius: 10,
        dataLabels: {
          maxItems: 4,
          orientation: 'vertical'
        }
      }
    };
  }
}
