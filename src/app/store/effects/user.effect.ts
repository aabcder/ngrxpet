import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ApiService } from './../../services/api.service';

@Injectable()
export class UserEffects {
  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[User] get'),
      mergeMap(() =>
        this.apiService.getUserData().pipe(
          map((user) => ({ type: '[User] set', user: user })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
