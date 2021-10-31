import { createReducer, on } from '@ngrx/store';
import { changeUserPriority, setUsersList } from '../actions/usersList.action';
import { User } from 'src/app/models/user';

const initial: User[] = [];

export const usersListReducer = createReducer(
  initial,
  on(setUsersList, (state: User[], users: { users: User[] }) => {
    return users?.users;
  }),
  on(changeUserPriority, (state, action: { user: User; delta: number }) => {
    return state
      .map((current) => {
        let fresh = Object.assign({}, current);
        if (fresh.id === action.user.id)
          fresh.priority = fresh.priority + action.delta;
        return fresh;
      })
      .sort((a, b) =>
        a.priority === b.priority ? 0 : a.priority > b.priority ? -1 : 1
      );
  })
);
