import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { first, map, tap } from 'rxjs/operators';
import { setUser } from '../store/actions/user.actions';
import { User } from '../models/user';
import { AppState } from 'src/app/appState/appState';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private store: Store<AppState>) {}

  getUserData(): Observable<User> {
    return this.http.get<User>('/api/user').pipe(first());
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users').pipe(first());
  }
}
