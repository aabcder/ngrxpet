import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/appState/appState';
import { userSelector } from 'src/app/store/selectors/user.selectors';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent {
  user: Observable<any> = of(null);
  constructor(private store: Store<AppState>) {
    this.user = store.select(userSelector);
  }
}
