import { createReducer, on } from '@ngrx/store';
import { setUser, clearUser } from '../actions/user.actions';

export const user = null;

export function userReducer(state: any, action: any) {
  return createReducer(
    user,
    on(setUser, (user) => {
      console.log(user);
      return user;
    }),
    on(clearUser, () => null)
  );
}
