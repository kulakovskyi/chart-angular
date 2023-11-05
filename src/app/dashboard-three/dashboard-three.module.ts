import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { DashboardThreeLayoutComponent } from './components/dashboard-three-layout/dashboard-three-layout.component';
import { RadialBarComponent } from './components/radial-bar/radial-bar.component';
import { PieDonatComponent } from './components/pie-donat/pie-donat.component';
import { LineAdwordsComponent } from './components/line-adwords/line-adwords.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { AreaChartComponent } from './components/area-chart/area-chart.component';
import {NgApexchartsModule} from "ng-apexcharts";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: DashboardThreeLayoutComponent}
    ]),
    NgApexchartsModule
  ],
  declarations: [
    DashboardThreeLayoutComponent,
    RadialBarComponent,
    PieDonatComponent,
    LineAdwordsComponent,
    BarChartComponent,
    AreaChartComponent,
  ]
})

export class DashboardThreeModule{}
