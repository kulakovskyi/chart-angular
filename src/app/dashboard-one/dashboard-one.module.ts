import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { DashboardOneLayoutComponent } from './components/dashboard-one-layout/dashboard-one-layout.component';
import {RouterModule} from "@angular/router";
import { SplineChartComponent } from './components/spline-chart/spline-chart.component';
import { StackedBarChartComponent } from './components/stacked-bar-chart/stacked-bar-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { MultipleYAxisChartComponent } from './components/multiple-y-axis-chart/multiple-y-axis-chart.component';
import { AreaChartComponent } from './components/area-chart/area-chart.component';
import { MonochromePieChartComponent } from './components/monochrome-pie-chart/monochrome-pie-chart.component';
import {NgApexchartsModule} from "ng-apexcharts";


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: '', component: DashboardOneLayoutComponent}
        ]),
        NgApexchartsModule
    ],
  exports: [
    BarChartComponent,
    AreaChartComponent
  ],
    declarations: [
        DashboardOneLayoutComponent,
        SplineChartComponent,
        StackedBarChartComponent,
        BarChartComponent,
        MultipleYAxisChartComponent,
        AreaChartComponent,
        MonochromePieChartComponent,
    ]
})

export class DashboardOneModule {}
