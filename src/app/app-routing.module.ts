import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesViewComponent } from './components/companies-view/companies-view.component';
import { UsersViewComponent } from './components/users-view/users-view.component';
import { UsersResolver } from './resolvers/users.resolver';

const routes: Routes = [
  {
    path: 'users',
    component: UsersViewComponent,
    resolve: { users: UsersResolver },
  },
  {
    path: 'companies',
    component: CompaniesViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
