import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ReviewActionTypes, ReviewActions } from '../actions/review.actions';



@Injectable()
export class ReviewEffects {


  @Effect()
  loadReviews$ = this.actions$.pipe(
    ofType(ReviewActionTypes.LoadReviews),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<ReviewActions>) {}

}
