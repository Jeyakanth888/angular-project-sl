
import { ReviewActions, ReviewActionTypes } from '../actions/review.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: ReviewActions): State {
  switch (action.type) {

    case ReviewActionTypes.LoadReviews:
      return state;

    default:
      return state;
  }
}
