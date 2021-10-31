import { createReducer, on } from '@ngrx/store';
import { toggleSidebar } from './../actions/sidebar.actions';

export const toggleSidebarReducer = createReducer(
  false,
  on(toggleSidebar, (state) => {
    return !state;
  })
);
