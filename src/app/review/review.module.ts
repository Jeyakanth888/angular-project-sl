import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatePoolComponent } from './components/candidate-pool/candidate-pool.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { CandidatePoolResultComponent } from './components/candidate-pool-result/candidate-pool-result.component';
import { ReviewQueueComponent } from './components/review-queue/review-queue.component';
import { ReviewDetailComponent } from './components/review-detail/review-detail.component';
import { ReviewConclusionComponent } from './components/review-conclusion/review-conclusion.component';
import { ReviewersComponent } from './components/reviewers/reviewers.component';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { PopupModule } from '@progress/kendo-angular-popup';
import { MenuModule } from '@progress/kendo-angular-menu';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { GridModule } from '@progress/kendo-angular-grid';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { OrdinalPipe } from '../pipes/ordinal.pipe';
import { ContractReviewedComponent } from './components/contract-reviewed/contract-reviewed.component';
import { ReviewDetailTableComponent } from './components/review-detail-table/review-detail-table.component';
import { SharedModule } from '../shared/shared.module';
import { GuidedReviewModule } from '../guided-review/guided-review.module';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { DayTimeDiffPipe } from '../pipes/day.time.diff';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';

const routes: Routes = [
  {
    path: 'candidate-pool',
    component: CandidatePoolComponent,
    data: {title: 'Candidate pool'}
  },
  {
    path: 'review-queue',
    component: ReviewQueueComponent,
    data: {title: 'Review Queue'}
  },
  {
    path: 'review-queue/review-details/:id',
    component: ReviewDetailComponent,
    data: {title: 'Review Queue/Review Details'}
  }
];

@NgModule({
  declarations: [CandidatePoolComponent, SearchFilterComponent, CandidatePoolResultComponent, ReviewQueueComponent, ReviewDetailComponent, ReviewConclusionComponent, ReviewersComponent, BreadcrumbsComponent, ContractReviewedComponent,
    ReviewDetailTableComponent, OrdinalPipe, DayTimeDiffPipe],
  imports: [
    CommonModule, RouterModule.forChild(routes),
    ButtonsModule,
    DateInputsModule,
    DropDownsModule,
    InputsModule,
    PopupModule,
    MenuModule,
    RouterModule,
    LayoutModule,
    GridModule,
    DropDownsModule,
    SharedModule,
    GuidedReviewModule,
    DialogModule,
    FormsModule,
    TooltipModule
  ],
  exports: [RouterModule, OrdinalPipe, DayTimeDiffPipe]
})
export class ReviewModule { }
