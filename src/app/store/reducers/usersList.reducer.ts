import { createReducer, on } from '@ngrx/store';
import { setUsersList } from '../actions/usersList.action';
import { User } from 'src/app/models/user';

const initial: User[] = [];

export const usersListReducer = createReducer(
  initial,
  on(setUsersList, (state: User[], users: { users: User[]}) => {
    return users?.users
  })
);
