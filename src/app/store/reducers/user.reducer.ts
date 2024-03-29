import { createReducer, on } from '@ngrx/store';
import { setUser, clearUser } from '../actions/user.actions';
import { User } from '../../models/user';

let user$: User = null as any

export const userReducer = createReducer(
  user$,
  on(setUser, ( state: User, userAction: { user: User } ) => {
    return userAction?.user;
  }),
  on(clearUser, () => null as any)
);

