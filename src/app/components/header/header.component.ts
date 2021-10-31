import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/appState/appState';
import { User } from 'src/app/models/user';
import {toggleSidebar} from 'src/app/store/actions/sidebar.actions';
import { userSelector } from 'src/app/store/selectors/user.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  user: Observable<User>;
  constructor(private store: Store<AppState>) {
    this.user = store.select(userSelector);
  }

  toggleSidebar(): void {
    this.store.dispatch(toggleSidebar())
  }
}
