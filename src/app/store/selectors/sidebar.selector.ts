import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/appState/appState';

export const toggleSidebarSelector = createSelector(
  (state: AppState) => state?.sidebarOpenState,
  (state: boolean) => state
);
