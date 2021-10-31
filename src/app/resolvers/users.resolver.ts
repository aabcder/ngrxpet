import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { User } from '../models/user';
import { ApiService } from '../services/api.service';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { setUsersList } from '../store/actions/usersList.action';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersResolver implements Resolve<User[]> {
  constructor(private api: ApiService, private store: Store) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User[]> {
    return this.api
      .getUsers()
      .pipe(tap((users) => this.store.dispatch(setUsersList({ users }))));
  }
}
