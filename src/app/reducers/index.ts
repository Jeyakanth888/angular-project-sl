import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromDashboard from '../dashboard/reducers/dashboard.reducer';
import * as fromReview from '../review/reducers/review.reducer';
import * as fromGuidedReview from '../guided-review/reducers/guided-review.reducer';

export interface State {

  dashboard: fromDashboard.State;
  review: fromReview.State;
  guidedReview: fromGuidedReview.State;
}

export const reducers: ActionReducerMap<State> = {

  dashboard: fromDashboard.reducer,
  review: fromReview.reducer,
  guidedReview: fromGuidedReview.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
