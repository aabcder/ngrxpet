import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { setUsersList } from '../actions/usersList.action';
import { ApiService } from './../../services/api.service';

@Injectable()
export class UsersListEffects {
  getUsersList$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Users list] - get'),
      mergeMap(() =>
        this.apiService.getUsers().pipe(
          map((users) => {
            return setUsersList({ users });
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private store: Store
  ) {}
}
