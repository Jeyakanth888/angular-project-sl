import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { GuidedReviewActionTypes, GuidedReviewActions } from '../actions/guided-review.actions';



@Injectable()
export class GuidedReviewEffects {


  @Effect()
  loadGuidedReviews$ = this.actions$.pipe(
    ofType(GuidedReviewActionTypes.LoadGuidedReviews),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<GuidedReviewActions>) {}

}
