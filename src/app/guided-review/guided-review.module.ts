import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuidedReviewRoutes } from './guided-review.routes';
import { GuidedReviewComponent } from './components/guided-review/guided-review.component';
import { DecisionTreeComponent } from './components/decision-tree/decision-tree.component';
import { QuestionNodeComponent } from './components/question-node/question-node.component';
import { CannedTextComponent } from './components/canned-text/canned-text.component';
import { SectionTreeComponent } from './components/section-tree/section-tree.component';
import { ReviewSummaryComponent } from './components/review-summary/review-summary.component';
import { ReviewHelpComponent } from './components/review-help/review-help.component';
import { Routes, RouterModule } from '@angular/router';
import { BreadcrumbsGrComponent } from './components/breadcrumbs-gr/breadcrumbs-gr.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { PopupModule } from '@progress/kendo-angular-popup';
import { MenuModule } from '@progress/kendo-angular-menu';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { GridModule } from '@progress/kendo-angular-grid';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { SharedModule } from '../shared/shared.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { GetQuestionNumberPipe } from '../pipes/get-question-number';
const routes: Routes = [
  {
    path: '',
    component: GuidedReviewComponent,
    data: {title: 'Review'},
    children: [{
      path: 'guided-review',
      component: DecisionTreeComponent,
      data: {title: 'Guided Review'}
    },
    {
      path: 'review-summary',
      component: ReviewSummaryComponent,
      data: {title: 'Review Summary'}
    },
    {
      path: 'review-conclusion',
      component: CannedTextComponent,
      data: {title: 'Review Conclusion'}
    }
    ]
  },

];

@NgModule({
  declarations: [GuidedReviewComponent, DecisionTreeComponent, QuestionNodeComponent, CannedTextComponent,
    SectionTreeComponent, ReviewSummaryComponent, ReviewHelpComponent, BreadcrumbsGrComponent, GetQuestionNumberPipe],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonsModule, DateInputsModule, DropDownsModule, InputsModule, PopupModule, MenuModule,
    LayoutModule, GridModule, TreeViewModule, SharedModule, DialogModule, TooltipModule
  ],
  exports: [RouterModule, ReviewSummaryComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]

})
export class GuidedReviewModule { }
