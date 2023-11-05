import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { DashboardTwoLayoutComponent } from './components/dashboard-two-layout/dashboard-two-layout.component';
import {RouterModule} from "@angular/router";
import { LineColumnChartComponent } from './components/line-column-chart/line-column-chart.component';
import { AreaLineColumnComponent } from './components/area-line-column/area-line-column.component';
import { RadarMultipleComponent } from './components/radar-multiple/radar-multiple.component';
import {NgApexchartsModule} from "ng-apexcharts";
import { LineMultipleComponent } from './components/line-multiple/line-multiple.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: DashboardTwoLayoutComponent}
    ]),
    NgApexchartsModule
  ],
  declarations: [
    DashboardTwoLayoutComponent,
    LineColumnChartComponent,
    AreaLineColumnComponent,
    RadarMultipleComponent,
    LineMultipleComponent
  ]
})

export class DashboardTwoModule {}
