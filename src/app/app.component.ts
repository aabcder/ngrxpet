import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUser } from './store/actions/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private store: Store) {
    store.dispatch(getUser());
  }
}
