import { Action } from '@ngrx/store';

export enum GuidedReviewActionTypes {
  LoadGuidedReviews = '[GuidedReview] Load GuidedReviews',


}

export class LoadGuidedReviews implements Action {
  readonly type = GuidedReviewActionTypes.LoadGuidedReviews;
}


export type GuidedReviewActions = LoadGuidedReviews;
