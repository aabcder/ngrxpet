import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/appState/appState';

export const usersSelector = createSelector(
  (store: AppState) => store,
  (store: AppState) => store?.users
);
