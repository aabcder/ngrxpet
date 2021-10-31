import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { first, tap } from 'rxjs/operators';
import { setUser } from '../store/actions/user.actions';
import { User } from '../models/user';
import { AppState } from 'src/app/appState/appState';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private store: Store<AppState>) {}

  getUserData(): void {
    this.http
      .get('/api/user')
      .pipe(first(), tap(console.warn))
      .subscribe((user: User) => {
        this.store.dispatch(setUser({ user }));
      });
  }
}
