import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user';

export const setUsersList = createAction(
  '[Users list] - set',
  props<{ users: User[] }>()
);
