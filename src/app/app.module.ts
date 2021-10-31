import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UsersViewComponent } from './components/users-view/users-view.component';
import { CompaniesViewComponent } from './components/companies-view/companies-view.component';
import { CompanyInfoComponent } from './components/company-info/company-info.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ApiService } from './services/api.service';
import { userReducer } from './store/reducers/user.reducer';
import { toggleSidebarReducer } from './store/reducers/sidebar.reducer';
import { usersListReducer } from './store/reducers/usersList.reducer';
import { UsersResolver } from './resolvers/users.resolver';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    UserInfoComponent,
    UsersViewComponent,
    CompaniesViewComponent,
    CompanyInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      user: userReducer,
      sidebarOpenState: toggleSidebarReducer,
      users: usersListReducer,
    }),
  ],
  providers: [ApiService, UsersResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
