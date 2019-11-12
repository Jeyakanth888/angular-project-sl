import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuardService } from './authentication/guard/auth-guard';
import { AuthCallbackComponent } from './authentication/component/auth-callback.component';

const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuardService],
    // children: []
    loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule),
    data: {title: ''}
  },
  {
    path: 'auth-callback',
    component: AuthCallbackComponent,
    data: {title: 'Authentication'}
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule),
    data: {title: 'Dashboard'}
  },
  {
    path: 'candidate-pool',
    loadChildren: () => import('./review/review.module').then(mod => mod.ReviewModule),
    data: {title: 'Candidate pool'}
  },
  {
    path: 'review-queue',
    loadChildren: () => import('./review/review.module').then(mod => mod.ReviewModule),
    data: {title: 'Review queue'}
  },
  {
    path: 'review',
    loadChildren: () => import('./guided-review/guided-review.module').then(mod => mod.GuidedReviewModule),
    data: {title: 'Guided review'}
  },
  {
    path: 'users',
    loadChildren: () => import('./user/user.module').then(mod => mod.UserModule),
    data: {title: 'Users'}
  }
];


export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
