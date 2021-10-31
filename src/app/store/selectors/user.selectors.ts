import {  createSelector } from '@ngrx/store';
import { AppState } from '../../appState/appState';

export const selectState = (state: AppState) => state;
export const selectUser = (state: AppState) => state.user;

export const userSelector = createSelector(
  selectState,
  selectUser,
  (state, user) => {
    return user;
  }
);
