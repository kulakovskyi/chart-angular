import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { SparkTwoComponent } from './components/spark-two/spark-two.component';
import { SparkOneComponent } from './components/spark-one/spark-one.component';
import { SparkThreeComponent } from './components/spark-three/spark-three.component';
import { DashboardFourthLayoutComponent } from './components/dashboard-fourth-layout/dashboard-fourth-layout.component';
import {NgApexchartsModule} from "ng-apexcharts";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: DashboardFourthLayoutComponent}
    ]),
    NgApexchartsModule
  ],
  declarations: [
    SparkTwoComponent,
    SparkOneComponent,
    SparkThreeComponent,
    DashboardFourthLayoutComponent
  ]
})

export class DashboardFourthModule{}
