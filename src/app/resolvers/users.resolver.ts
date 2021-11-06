import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { User } from '../models/user';
import { Store } from '@ngrx/store';
import { getUsersList } from '../store/actions/usersList.action';
import { Observable, of } from 'rxjs';

interface UsersListAction {
  type: string;
  users: User[];
}

@Injectable({
  providedIn: 'root',
})
export class UsersResolver implements Resolve<boolean> {
  constructor(
    private store: Store,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    this.store.dispatch(getUsersList());
    return of(true);
  }
}
