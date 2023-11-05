import {Component, Input, OnInit} from '@angular/core';
import {ApexChart, ApexLegend, ApexPlotOptions} from "ng-apexcharts";

@Component({
  selector: 'app-pie-donat',
  templateUrl: './pie-donat.component.html',
  styleUrls: ['./pie-donat.component.scss']
})
export class PieDonatComponent implements OnInit{

  @Input() chart!: ApexChart;
  @Input() plotOptions!: ApexPlotOptions;
  @Input() series!: any;
  @Input() stroke: any; //ApexStroke;
  @Input() labels!: any;
  @Input() legend!: ApexLegend

  ngOnInit() {

    this.initialChart()

  }

  initialChart() {
    this.chart = {
      type: 'donut',
      height: 375,
      width: "100%",
      dropShadow: {
        enabled: true,
        color: "#111",
        top: -1,
        left: 3,
        blur: 3,
        opacity: 0.2
      }
    };

    this.plotOptions = {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              showAlways: true,
              show: true
            }
          }
        }
      }
    }

    this.series = [71, 63, 77];

    this.stroke = {
      lineCap: 'round'
    };

    this.labels = ['June', 'May', 'April'];


  }
}
