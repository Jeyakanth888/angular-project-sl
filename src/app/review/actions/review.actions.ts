import { Action } from '@ngrx/store';

export enum ReviewActionTypes {
  LoadReviews = '[Review] Load Reviews',


}

export class LoadReviews implements Action {
  readonly type = ReviewActionTypes.LoadReviews;
}


export type ReviewActions = LoadReviews;
