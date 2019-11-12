import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutes } from './dashboard.routes';
import { DashboardFilterComponent } from './components/dashboard-filter/dashboard-filter.component';
import { DashboardTilesComponent } from './components/dashboard-tiles/dashboard-tiles.component';
import { DashboardTileComponent } from './components/dashboard-tile/dashboard-tile.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyReviewsComponent } from './components/my-reviews/my-reviews.component';
import { TopReviewsComponent } from './components/top-reviews/top-reviews.component';
import { SalesLocationMapComponent } from './components/sales-location-map/sales-location-map.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { PopupModule } from '@progress/kendo-angular-popup';
import { MenuModule } from '@progress/kendo-angular-menu';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { GridModule } from '@progress/kendo-angular-grid';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
@NgModule({
  declarations: [DashboardFilterComponent, DashboardTilesComponent, DashboardTileComponent, DashboardComponent, MyReviewsComponent, TopReviewsComponent, SalesLocationMapComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    ButtonsModule,
    DateInputsModule,
    DropDownsModule,
    InputsModule,
    PopupModule,
    MenuModule,
    LayoutModule,
    GridModule,
    FormsModule,
    TooltipModule
  ],
  exports: [RouterModule]
})
export class DashboardModule { }
