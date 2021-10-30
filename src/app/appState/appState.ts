import { ActionReducer, ActionReducerMap } from '@ngrx/store';
import { userReducer } from '../reducers/user.reducer';

interface AppState {
  user: ActionReducer<any>;
}

export function getState(): ActionReducerMap<AppState> {
  return {
    user: userReducer,
  };
}
