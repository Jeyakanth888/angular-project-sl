import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { DashboardActionTypes, DashboardActions } from '../actions/dashboard.actions';



@Injectable()
export class DashboardEffects {


  @Effect()
  loadDashboards$ = this.actions$.pipe(
    ofType(DashboardActionTypes.LoadDashboards),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<DashboardActions>) {}

}
