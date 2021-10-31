import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appState/appState';
import { userSelector } from 'src/app/store/selectors/user.selectors';
import { User } from 'src/app/models/user';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent {
  user: User;
  constructor(private store: Store<AppState>) {
    store
      .select(userSelector)
      .pipe(
        tap((user) => {
          this.user = user;
        })
      )
      .subscribe();
  }

  logout() {}
}
