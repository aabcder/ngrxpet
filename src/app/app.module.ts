import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UsersViewComponent } from './users-view/users-view.component';
import { CompaniesViewComponent } from './companies-view/companies-view.component';
import { CompanyInfoComponent } from './company-info/company-info.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SidebarComponent, UserInfoComponent, UsersViewComponent, CompaniesViewComponent, CompanyInfoComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
