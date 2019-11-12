
import { GuidedReviewActions, GuidedReviewActionTypes } from '../actions/guided-review.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: GuidedReviewActions): State {
  switch (action.type) {

    case GuidedReviewActionTypes.LoadGuidedReviews:
      return state;

    default:
      return state;
  }
}
