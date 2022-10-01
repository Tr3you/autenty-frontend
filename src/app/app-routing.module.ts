import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AplicationsComponent } from './components/dashboard/aplications/aplications.component';
import { CredentialsComponent } from './components/dashboard/credentials/credentials.component';
import { PoliticsComponent } from './components/dashboard/politics/politics.component';
import { UsersComponent } from './components/dashboard/users/users.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewAplicationComponent } from './components/new-aplication/new-aplication.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent},
  { path: 'applications', component: HomeComponent },
  { path: 'new-application', component: NewAplicationComponent},
  { path: 'dashboard/users', component: UsersComponent },
  { path: 'dashboard/application', component: AplicationsComponent },
  { path: 'dashboard/credentials', component: CredentialsComponent },
  { path: 'dashboard/politics', component: PoliticsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
