import {Component, Input, OnInit} from '@angular/core';
import {
  ApexChart,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexResponsive,
  ApexTheme,
  ApexTitleSubtitle
} from "ng-apexcharts";

@Component({
  selector: 'app-monochrome-pie-chart',
  templateUrl: './monochrome-pie-chart.component.html',
  styleUrls: ['./monochrome-pie-chart.component.scss']
})
export class MonochromePieChartComponent implements OnInit{

  @Input() chart!: ApexChart;
  @Input() title!: ApexTitleSubtitle;
  @Input() responsive!: ApexResponsive[];
  @Input() labels: any;
  @Input() colors: any;
  @Input() theme!: ApexTheme;
  @Input() series!: ApexNonAxisChartSeries;
  @Input() options!: ApexPlotOptions;

  ngOnInit() {
    this.initialChart()
  }
  initialChart() {
    this.series = [25, 15, 44, 55, 41, 17];

    this.chart = {
      height: 'auto',
      width: "100%",
      type: "pie",

    };

    this.options = {
      pie: {
        customScale: 1,
      }
    };

    this.labels = [
      "Dima",
      "Karina",
      "Bogdana",
      "Genadiy",
      "Andrii",
      "Daria"
    ];

    this.colors = ['#F44336', '#E91E63', '#9C27B0', '#262c98','#26984e','#f4c836']

    this.theme = {
      monochrome: {
        enabled: false
      }
    };

    this.title = {
      text: "Number of leads"
    }

    this.responsive = [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  }

}
