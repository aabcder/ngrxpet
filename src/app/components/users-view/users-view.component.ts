import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { usersSelector } from 'src/app/store/selectors/users.selector';
import { tap } from 'rxjs/operators';
import { AppState } from 'src/app/appState/appState';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss'],
})
export class UsersViewComponent {
  users: User[] = [];
  constructor(private store: Store<AppState>) {
    store
      .select(usersSelector)
      .pipe(
        tap((users) => {
          this.users = users;
        })
      )
      .subscribe();
  }
}
