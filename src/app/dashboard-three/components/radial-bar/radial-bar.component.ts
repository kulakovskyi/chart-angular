import {Component, Input, OnInit} from '@angular/core';
import {ApexChart, ApexLegend, ApexPlotOptions} from "ng-apexcharts";

@Component({
  selector: 'app-radial-bar',
  templateUrl: './radial-bar.component.html',
  styleUrls: ['./radial-bar.component.scss']
})
export class RadialBarComponent implements OnInit{

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
      type: 'radialBar',
      height: 400,
      width: "100%",
    };

    this.plotOptions = {
      radialBar: {
        inverseOrder: true,
        hollow: {
          margin: 5,
          size: '50%',
          background: 'transparent',

        },
        track: {
          show: false,
        },
        startAngle: -180,
        endAngle: 180

      },
    }

    this.series = [71, 63, 77];

    this.stroke = {
      lineCap: 'round'
    };

    this.labels = ['June', 'May', 'April'];

    this.legend = {
      show: true,
      floating: true,
      position: 'top',
    };
  }
}
