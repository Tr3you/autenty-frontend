import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/dashboard/users/users.component';
import { AplicationsComponent } from './components/dashboard/aplications/aplications.component';
import { PoliticsComponent } from './components/dashboard/politics/politics.component';
import { CredentialsComponent } from './components/dashboard/credentials/credentials.component';
import { NewAplicationComponent } from './components/new-aplication/new-aplication.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    UsersComponent,
    AplicationsComponent,
    PoliticsComponent,
    CredentialsComponent,
    NewAplicationComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
