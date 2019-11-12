
import { DashboardActions, DashboardActionTypes } from '../actions/dashboard.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: DashboardActions): State {
  switch (action.type) {

    case DashboardActionTypes.LoadDashboards:
      return state;

    default:
      return state;
  }
}
