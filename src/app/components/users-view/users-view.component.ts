import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { usersSelector } from 'src/app/store/selectors/users.selector';
import { tap } from 'rxjs/operators';
import { AppState } from 'src/app/appState/appState';
import { changeUserPriority } from 'src/app/store/actions/usersList.action';

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

  changePriority(user: User, delta: number): void {
    this.store.dispatch(changeUserPriority({ user: user, delta: delta }));
  }

  getColorByPriority(priority: number): string {
    // if (priority === 0) return '';
    if (priority < -20) return 'p-3';
    if (priority < -10) return 'p-2';
    if (priority < -3) return 'p-1';
    if (priority > 20) return 'p3';
    if (priority > 10) return 'p2';
    if (priority > 3) return 'p1';
    return 'p0';
  }
}
