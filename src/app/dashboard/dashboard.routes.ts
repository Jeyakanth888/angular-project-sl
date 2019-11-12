import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const DashboardRoutes: Routes = [{
    path: 'dashboard',
    component: DashboardComponent,
    data: {title: 'Dashboard'}
}];
