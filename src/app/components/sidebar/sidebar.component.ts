import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/appState/appState';
import { toggleSidebarSelector } from 'src/app/store/selectors/sidebar.selector';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  isShown: Observable<boolean>;
  constructor(private store: Store<AppState>) {
    this.isShown = store.select(toggleSidebarSelector);
  }
}
