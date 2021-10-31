import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user';

export const setUser = createAction('[User] set', props<{ user: User }>());
export const clearUser = createAction('[User] clear');
